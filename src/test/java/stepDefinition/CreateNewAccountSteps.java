package stepDefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.CreateNewAccountPage;

public class CreateNewAccountStep {

    CreateNewAccountPage createNewAccountPage = new CreateNewAccountPage();

    @Given("^I navigate to the url \"([^\"]*)\"$")
    public void i_navigate_to_the_url(String arg1) throws Throwable {
        createNewAccountPage.LauchUrl();
    }

    @And("^I click on \"([^\"]*)\" button$")
    public void i_click_on_button(String arg1) throws Throwable {
        createNewAccountPage.ClickSignInButton();
    }

    @When("^I enter my \"([^\"]*)\"$")
    public void i_enter_my(String arg1) throws Throwable {
        createNewAccountPage.EnterEmailAddress();
    }

    @And("^I click on the \"([^\"]*)\" button$")
    public void i_click_on_the_button(String arg1) throws Throwable {
        createNewAccountPage.ClickCreateAnAccount();
    }

    @Then("^your personal information page is displayed$")
    public void your_personal_information_page_is_displayed() throws Throwable {
        createNewAccountPage.VerifyRegistrationPageOpened();
    }

    @Given("^I check the title radio button as \"([^\"]*)\"$")
    public void i_check_the_title_radio_button_as(String arg1) throws Throwable {
        createNewAccountPage.SelectTitle();
    }

    @And("^I enter my \"([^\"]*)\" and \"([^\"]*)\"$")
    public void i_enter_my_and(String arg1, String arg2) throws Throwable {
        createNewAccountPage.InputFirstAndLastName();
    }

    @When("^I enter (\\d+) character minimum \"([^\"]*)\"$")
    public void i_enter_character_minimum(int arg1, String arg2) throws Throwable {
        createNewAccountPage.InputPassword();
    }

    @And("^I select my \"([^\"]*)\" from the select boxes$")
    public void i_select_my_from_the_select_boxes(String arg1) throws Throwable {
        createNewAccountPage.InputDateOfBirth();
        createNewAccountPage.SelectMonthOfBirth();
        createNewAccountPage.SelectYearOfBirth();
    }

    @Given("^I enter my \"([^\"]*)\" on the field \"([^\"]*)\"$")
    public void i_enter_my_on_the_field(String arg1, String arg2) throws Throwable {
        createNewAccountPage.EnterAddressDetails();
    }

    @And("^I click on the green \"([^\"]*)\" button$")
    public void i_click_on_the_green_button(String arg1) throws Throwable {
        createNewAccountPage.ClickRegisterButton();
    }

    @Then("^the homepage should be displayed and title should be \"([^\"]*)\"$")
    public void the_homepage_should_be_displayed_and_title_should_be(String arg1) throws Throwable {
        createNewAccountPage.VerifySuccessfullRegistration();
    }

}
