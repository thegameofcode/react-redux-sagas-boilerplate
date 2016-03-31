Feature: Login with Google Account
  In order to use HonestCode.io web app
  As a WebApp user
  I want to be able to log into HonestCode.io using an existing Google Account

  @webapp @login
  Scenario: RICK logs into HonestCode.io using his Google Account
    Given RICK has a google account
    When RICK logs into HonestCode.io with his google account
    Then RICK is logged in
    And the dashboard is displayed
