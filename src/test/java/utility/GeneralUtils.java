package utility;

import com.codoid.products.exception.FilloException;
import com.codoid.products.fillo.Connection;
import com.codoid.products.fillo.Fillo;
import com.codoid.products.fillo.Recordset;
import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.Properties;

public class GeneralUtils {

    public static ExtentReports extent;
    public static ExtentTest test;
    public static Recordset data;
    public static Connection connection;
    public static String datapath = System.getProperty("user.dir") + "\\src\\test\\resources\\Data\\RequestResponseData.xlsx";
    public static String propertiespath = System.getProperty("user.dir") + "\\src\\test\\resources\\Configuration.properties";

    public static void logStatus(String stepDescription, boolean stepStatus) {
        if (stepStatus) {
            test.log(LogStatus.PASS, stepDescription + " - PASS");
        } else {
            test.log(LogStatus.FAIL, stepDescription + " - FAIL");
        }
    }

    public static void logInfo(String Description, String details) {
        test.log(LogStatus.INFO, Description + " : " + details);
    }

    public static Recordset getData(String value) {
        try {
            connection = new Fillo().getConnection(datapath);
            data = connection.executeQuery("Select * from Data where SceanrioName='" + value + "'");
            data.moveFirst();
        } catch (FilloException e) {
        }
        return data;
    }

    public static Properties readProperties(){
        BufferedReader reader;
        Properties properties=null;
        try {
            reader = new BufferedReader(new FileReader(propertiespath));
            properties=new Properties();
            properties.load(reader);
            reader.close();
        }catch(Exception e){
        }
        return properties;
        }

}
