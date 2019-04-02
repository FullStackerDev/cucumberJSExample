Feature: Google search

  Scenario: Google search should give results
    Given I navigate to the url "http://www.google.com"
    Then I should see the google search engine