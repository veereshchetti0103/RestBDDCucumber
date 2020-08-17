@RegisterStation
Feature: Verify Post operations using REST-assured


  Scenario Outline: Scenario_2 - Successfully register two stations and vaidate the response code as 201
    Given I perform POST operation for "/stations" with appid "<ScenarioName>"
    Then verify the reponse status code

    Examples:
      | ScenarioName      |
      | RegisterStation01 |
      | RegisterStation02 |


  Scenario Outline: Scenario_1 - Validate that attempt to register a weather station without an API Key will return status code as 401
    Given I perform POST operation for "/stations" with appid "<ScenarioName>"
    Then verify the reponse status code

    Examples:
      | ScenarioName         |
      | RegisterWithoutKey01 |