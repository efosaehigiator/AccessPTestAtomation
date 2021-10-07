Feature: Create New Account

  @Test
  Scenario: As a user I want to create a new account

    Given I navigate to the url "http://automationpractice.com/index.php"
    And I click on "Sign in" button
    When I enter my "email address"
    And I click on the "create account" button
    Then your personal information page is displayed

    @Test
  Scenario: Enter personal details on registration form

    Given I check the title radio button as "Mr"
    And I enter my "FirstName" and "LastName"
    When I enter 5 character minimum "password"
    And I select my "dateOfBirth" from the select boxes

    @Test
  Scenario: Enter userAddress details

    Given I enter my "Address details" on the field "Your Address"
    And I click on the green "Register" button
    Then the homepage should be displayed and title should be "Your Logo"