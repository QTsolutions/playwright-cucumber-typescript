Feature: Register User

 Background: 
    Given User navigates to the application
    And User click on the login link
    
@register
Scenario: Register new user
Given I navigate to the register page
When I created a new user
Then I confirm user registration is success 