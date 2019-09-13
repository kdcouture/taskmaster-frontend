import React, {useState, useEffect} from 'react';

import './CSS/style.css';

const API = 'http://newenv.iam9ckq2yg.us-west-2.elasticbeanstalk.com/api/v1/tasks';

let form = new FormData();

const APIPIC = "http://newenv.iam9ckq2yg.us-west-2.elasticbeanstalk.com/api/v1/tasks/img"

// On Load - Get that data from the API
// Iterate and display major task points
// Some Interaction to expose history

function App() {

  const [tasks, setTasks] = useState([]);

  function _getTasks() {
    fetch(API)
      .then( data => data.json() )
      .then( fetchedTasks => setTasks(fetchedTasks) );
  }

  function _handleChange(event) {
    let value = event.target.files ? event.target.files[0] : event.target.value;
    console.log(value);
    form.set(event.target.name, value);
  }

  function _upload(event) {
    event.preventDefault();
    fetch(APIPIC, {
      method: "POST",
      mode: 'no-cors',
      body: form,
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    window.location.reload(false);
  }

  useEffect( _getTasks, [] );

  return (
    <div className="app">
      <form onSubmit={_upload} action={API} method="post" encType="multipart/form-data">
        <label>
          <span>Enter in a task ID > </span>
          <input onChange={_handleChange} type='text' name='id'></input>
          <p></p>
        </label>
        <label>
          <span>Upload an img file > </span>
          <input onChange={_handleChange} name="file" type='file' />
        </label>
        <label>
          <input type="submit"></input>
        </label>
      </form>
      <h2>Below are the results from the dynamoDB for all tasks</h2>
      <p>Note: Users may click on the drop down arrows for more information.</p>
      <ul>
        {tasks.map( (task,idx) => {
          return (
            <li key={task.id} id="taskList">
              <details>
                <summary>
                  <span>{task.title}</span>
                </summary>
                <p>TaskID > <span>{task.id}</span></p>
                <img alt="Task Img" src={task.pic} width="250" height="250" ></img>
                <History history={task.history} />
              </details>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

function History(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>TimeStamp</th>
          <th>Action</th>
        </tr>
      </thead>
      {props.history.map( (record,idx) => {
        return (
          <tbody key={idx} id="task">
            <tr>
              <td><span id="timeStamp">{record.time}</span></td>
              <td><span id="action">{record.action}</span></td>
            </tr>
          </tbody>
        )
      })}
    </table>
  )
}

export default App;
