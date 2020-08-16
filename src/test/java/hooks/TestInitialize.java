package hooks;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import utility.GeneralUtils;
import utility.RestAssuredExtension;

public class TestInitialize extends GeneralUtils {

    @Before
    public void intializetest(Scenario scenario) {
        test = extent.startTest(scenario.getName(), "Execution Started");
        RestAssuredExtension restAssuredExtension = new RestAssuredExtension();
    }

    @After
    public void afterScenario(Scenario sceanrio) {
        extent.endTest(test);
    }

}
