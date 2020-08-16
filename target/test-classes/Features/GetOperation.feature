@GetStation
Feature: Verify GET operations using REST-assured

  Scenario Outline: Verify get operation
  Given I perform GET operation for "/stations" with appid "<ScenarioName>"
  Then verify the station response values

    Examples:
    |ScenarioName|
    |GetStation01|
    |GetStation02|