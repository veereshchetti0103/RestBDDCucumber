@RegisterStation
Feature: Verify Post operations using REST-assured


  Scenario Outline: Successfully register two stations with post operation
    Given I perform POST operation for "/stations" with appid "<ScenarioName>"
    Then verify the reponse status code

    Examples:
      | ScenarioName      |
      | RegisterStation01 |
      | RegisterStation02 |


  Scenario Outline: Register station without and API key
    Given I perform POST operation for "/stations" with appid "<ScenarioName>"
    Then verify the reponse status code

    Examples:
      | ScenarioName         |
      | RegisterWithoutKey01 |