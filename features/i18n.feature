Feature: internationalization
  As a non-English-speaking user of the Weather Rock app
  I want the app to have and display translations of its text in my language
  So that I can better understand the application's use and results

  Scenario: language display defaults to English
    Given I visit the application's start page
    Then I see a question asking "What is your name?"

  Scenario: I can switch the language display to a non-English language
    Given I visit the application's start page
    When I switch the language preference to Spanish
    Then I see a question asking "¿Cómo te llamas?"
