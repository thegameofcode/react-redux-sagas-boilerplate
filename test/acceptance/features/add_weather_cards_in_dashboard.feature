Feature: Add weather cards in dashboard
  As a User
  I want to be able to add weather cards in dashboard

  Scenario: Add a new city as a weather card in dashboard successfully
    Given I see the home page
    When I click "to Weather" link
    And I write "San Francisco" in the "City" input placeholder
    And I click "Get weather" button
    Then there is a new weather card with "San Francisco, US" title in the dashboard
