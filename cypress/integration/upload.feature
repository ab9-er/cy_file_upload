Feature: Transfer Link Test
  Create an automated test in a framework of your choice using javascript or typescript that tests 
  the transfer link upload or download functionality on WeTransfer website without an account (anonymous user)

  Scenario: Transfer Link Upload
    Given I am on the WeTransfer upload page
    When I upload the file to get a transfer link
    Then I get a transfer link as the confirmation
