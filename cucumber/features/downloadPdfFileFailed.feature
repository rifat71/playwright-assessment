
Feature: Download PDF File Failed

    Scenario: Download a Printable PDF with Invalid Link
      Given I navigate to the 'Selenium Tutorial' page
      When I download from 'Invalid' link
      Then check the file downloads correctly
