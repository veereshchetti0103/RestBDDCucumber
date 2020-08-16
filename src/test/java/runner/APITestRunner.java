package runner;

import com.relevantcodes.extentreports.ExtentReports;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;
import org.testng.annotations.*;
import utility.GeneralUtils;

import java.io.File;

@CucumberOptions(
        features = {"src/test/resources/Features"},
        glue = {"stepdefinations", "hooks"},
        format = {"pretty",
                "html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/cucumberTestReport.json"}
        , tags = {"@GetStation,@RegisterStation"}
)

public class APITestRunner extends GeneralUtils {

    private TestNGCucumberRunner testNGCucumberRunner;

    @BeforeSuite(alwaysRun = true)
    public void beforeSuite() {
        extent = new ExtentReports(System.getProperty("user.dir") + "\\ExtentReport\\MyReport.html");
        extent.loadConfig(new File(System.getProperty("user.dir") + "\\extent-config.xml"));
    }

    @BeforeClass(alwaysRun = true)
    public void setUpClass() {
        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    }

    @DataProvider
    public Object[][] features() {
        return testNGCucumberRunner.provideFeatures();
    }

    @Test(dataProvider = "features")
    public void features(CucumberFeatureWrapper cucumberfeature) {
        testNGCucumberRunner.runCucumber(cucumberfeature.getCucumberFeature());
    }

    @AfterClass(alwaysRun = true)
    public void tearDownClass() {
        testNGCucumberRunner.finish();
    }

    @AfterSuite(alwaysRun = true)
    public void aftersuite() {
        extent.flush();
        extent.close();
    }

}
