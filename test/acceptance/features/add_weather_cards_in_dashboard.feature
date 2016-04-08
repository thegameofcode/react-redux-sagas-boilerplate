Feature: Add weather cards in dashboard
  As a User
  I want to be able to add weather cards in dashboard

  Scenario: Add a new city as a weather card in dashboard successfully
    Given I see the dashboard
    When I write "San Francisco" in the "Get a five-day forecast in your favorite cities" input placeholder
    And I click "Search" button
    Then there is a new weather card with "San Francisco" title in the dashboard
