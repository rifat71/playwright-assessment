Feature: Download PDF File
  @wip
  Scenario: Download a Printable PDF of this Cheat Sheet
    Given I navigate to the 'Selenium Tutorial' page
    When I download from 'Download a Printable PDF of this Cheat Sheet' link
    Then check the file downloads correctly
