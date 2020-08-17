@GetStation
Feature: Verify GET operations using REST-assured

  Scenario Outline: Scenario_3 - Verify the stations were successfully stored and their values are the same as specified in the registration request.
  Given I perform GET operation for "/stations" with appid "<ScenarioName>"
  Then verify the station response values

    Examples:
    |ScenarioName|
    |GetStation01|
    |GetStation02|