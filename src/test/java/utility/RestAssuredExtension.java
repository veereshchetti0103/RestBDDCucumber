package utility;

import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import io.restassured.specification.RequestSpecification;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Map;

public class RestAssuredExtension extends GeneralUtils {

    public static RequestSpecification request;

    public RestAssuredExtension() {
        RequestSpecBuilder builder = new RequestSpecBuilder();
        builder.setBaseUri("https://api.openweathermap.org/data/3.0");
        builder.setContentType(ContentType.JSON);
        request = RestAssured.given().spec(builder.build());
    }

    public static ResponseOptions<Response> getOpsWithQueryParams(String url, Map<String, String> queryParam) {
        request.queryParams(queryParam);
        return request.get(url);
    }

    public static ResponseOptions<Response> postOpsWithQueryParamsAndBody(String url, Map<String, String> queryParam, Map<String, String> bodyParam) {
        request.queryParams(queryParam);
        request.body(bodyParam);
        return request.post(url);
    }

    public static ResponseOptions<Response> getOpsWithPathAndQueryParams(String url, Map<String, String> pathParam, Map<String, String> queryParam) {
        try {
            request.pathParams(pathParam);
            request.queryParams(queryParam);
            return request.get(new URI(url));
        } catch (URISyntaxException e) {
            e.printStackTrace();
            return null;

        }
    }

    public static ResponseOptions<Response> getOpsWithPathAndQueryParams(String url, Map<String, String> queryParam) {
        try {
            request.queryParams(queryParam);
            return request.get(new URI(url));
        } catch (URISyntaxException e) {
            e.printStackTrace();
            return null;

        }
    }

}


