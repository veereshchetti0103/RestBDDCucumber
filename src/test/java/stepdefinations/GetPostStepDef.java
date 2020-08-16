package stepdefinations;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import org.testng.Assert;
import utility.GeneralUtils;
import utility.RestAssuredExtension;

import java.util.HashMap;

public class GetPostStepDef extends GeneralUtils {

    public static ResponseOptions<Response> response;

    @Given("^I perform POST operation for \"([^\"]*)\" with appid \"([^\"]*)\"$")
    public void iPerformPOSTOperationForWithAppid(String url, String scenarioName) {
        try {
            data = getData(scenarioName);

            HashMap<String, String> queryparam = new HashMap<String, String>();
            queryparam.put("appid", data.getField("appid"));

            HashMap bodyparam = new HashMap();
            bodyparam.put("external_id", data.getField("external_id"));
            bodyparam.put("name", data.getField("name"));
            bodyparam.put("latitude", Float.parseFloat(data.getField("latitude")));
            bodyparam.put("longitude", Float.parseFloat(data.getField("longitude")));
            bodyparam.put("altitude", Float.parseFloat(data.getField("altitude")));

            response = RestAssuredExtension.postOpsWithQueryParamsAndBody(url, queryparam, bodyparam);

            logStatus("I perform POST operation with appid", true);
        } catch (Exception e) {
            logStatus("I perform POST operation with appid : Failed with the exception " + e, false);
        }
    }

    @Then("^verify the reponse status code$")
    public void verifyTheReponseStatusCode() {
        try {
            logInfo("Response : ", response.body().asString());

            Assert.assertEquals(response.getStatusCode(), Float.parseFloat(data.getField("StatusCode")));

            logStatus("verify the reponse status code", true);
        } catch (Exception e) {
            logStatus("verify the reponse status code : Failed with the exception " + e, false);
        }
    }

    @Given("^I perform GET operation for \"([^\"]*)\" with appid \"([^\"]*)\"$")
    public void iPerformGETOperationForWithAppid(String url, String scenarioName) {
        try {
            data = getData(scenarioName);

            HashMap<String, String> queryparam = new HashMap<String, String>();
            queryparam.put("appid", data.getField("appid"));

            response = RestAssuredExtension.getOpsWithPathAndQueryParams(url + "/" + data.getField("id"), queryparam);

            logStatus("I perform GET operation with appid", true);
        } catch (Exception e) {
            logStatus("I perform GET operation with appid : Failed with the exception " + e, false);
        }
    }

    @Then("^verify the station response values$")
    public void verifyTheStationResponseValues() throws Throwable {
        try {
            logInfo("Response : ", response.body().asString());

            Assert.assertEquals(response.getBody().jsonPath().get("external_id"), data.getField("external_id"));
            Assert.assertEquals(response.getBody().jsonPath().get("name"), data.getField("name"));
            Assert.assertEquals(response.getBody().jsonPath().getFloat("latitude"), Float.parseFloat(data.getField("latitude")));
            Assert.assertEquals(response.getBody().jsonPath().getFloat("longitude"), Float.parseFloat(data.getField("longitude")));
            Assert.assertEquals(response.getBody().jsonPath().getFloat("altitude"), Float.parseFloat(data.getField("altitude")));

            logStatus("verify the station response values", true);
        } catch (Exception e) {
            logStatus("verify the station response values : Failed with the exception " + e, false);
        }

    }
}
