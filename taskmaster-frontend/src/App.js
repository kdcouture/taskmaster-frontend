import React, {useState, useEffect} from 'react';

import './CSS/style.css';

const API = 'http://newenv.iam9ckq2yg.us-west-2.elasticbeanstalk.com/api/v1/tasks';

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

  function _deleteTask(id) {
    // fetch()
    //  .method()
    //  .then()
  }

  useEffect( _getTasks, [] );

  return (
    <div className="app">
      <h2>Below are the results from the dynamoDB for all tasks</h2>
      <p>Note: Users may click on the drop down arrows for more information.</p>
      <ul>
        {tasks.map( (task,idx) => {
          return (
            <li key={task.id} id="taskList">
              <details>
                <summary>
                  <span onClick={_deleteTask}>{task.title}</span>
                </summary>
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
      <tr>
        <th>TimeStamp</th>
        <th>Action</th>
      </tr>
      {props.history.map( (record,idx) => {
        return (
          <tr key={idx} id="task">
            <td><span id="timeStamp">{record.time}</span></td>
            <td><span id="action">{record.action}</span></td>
          </tr>
        )
      })}
    </table>
  )
}

export default App;
