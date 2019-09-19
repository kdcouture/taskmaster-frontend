/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package lambda_dynamoDB_Read;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.datamodeling.*;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;

import com.amazonaws.services.lambda.runtime.RequestHandler;
import netscape.javascript.JSObject;

import javax.json.JsonObject;

import java.util.*;

public class Library {

    public List<Task> getAllTasks() {
        final AmazonDynamoDB ddb = AmazonDynamoDBClientBuilder.defaultClient();
        DynamoDBMapper ddbMapper = new DynamoDBMapper(ddb);
        return ddbMapper.scan(Task.class, new DynamoDBScanExpression());
    }

    public List<Task> getTaskByAssignee(JsonObject input) {
        System.out.println("TESTSETSETSET    -----    " + input);
        final AmazonDynamoDB ddb = AmazonDynamoDBClientBuilder.defaultClient();
        DynamoDBMapper ddbMapper = new DynamoDBMapper(ddb);

        List<Task> task = ddbMapper.scan(Task.class, new DynamoDBScanExpression());
//        return task;
        return null;
    }
}