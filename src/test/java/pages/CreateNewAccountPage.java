package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import util.DriverUtil;

public class CreateNewAccountPage extends DriverUtil {

    By SignIn = By.xpath("//a[@class='login'][contains(.,'Sign in')]");
    By EnterEmail = By.id("email_create");
    By CreateAccountButton = By.xpath("//span[contains(.,'Create an account')]");
    By SelectTitle = By.xpath("//input[@type='radio'][contains(@id,'gender1')]");
    By FirstName = By.xpath("//input[contains(@name,'customer_firstname')]");
    By LastName = By.xpath("//input[contains(@name,'customer_lastname')]");
    By Password = By.xpath("//input[contains(@type,'password')]");
    By DateDropdown = By.xpath("//select[contains(@name,'days')]");
    By MonthDropdown = By.xpath("//select[contains(@name,'months')]");
    By YearsDropdown = By.xpath("//*[@id=\"years\"]");
    By AddressFirstName = By.xpath("//input[@id='firstname']");
    By AddressLastName = By.xpath("//input[@id='lastname']");
    By EnterHomeAddress = By.id("address1");
    By EnterCity = By.id("city");
    By SelectState = By.id("id_state");
    By EnterPostCode = By.id("postcode");
    By SelectCountry = By.id("id_country");
    By EnterMobilePhoneNumber = By.id("phone_mobile");
    By AssignAlias = By.id("alias");
    By RegisterButton = By.xpath("//span[contains(.,'Registe')]");

    String BaseUrl = "http://automationpractice.com/index.php";

    public void LauchUrl(){
        driver.get(BaseUrl);
        driver.manage().deleteAllCookies();
        driver.manage().window().maximize();
    }

    public void ClickSignInButton(){
        WebDriverWait wait = new WebDriverWait(driver,30);
        wait.until(ExpectedConditions.elementToBeClickable(SignIn)).click();
    }

    public void EnterEmailAddress()
    {
        driver.findElement(EnterEmail).sendKeys("E.Efosa@yahoo.com");
    }

    public void ClickCreateAnAccount(){
        driver.findElement(CreateAccountButton).click();

    }

    public void VerifyRegistrationPageOpened(){
        if(driver.getCurrentUrl().contains("http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation")){
            System.out.println("Registration page is opened");
        }else {System.out.println("Registration page not opened");}
    }

    public void SelectTitle(){
        WebDriverWait wait = new WebDriverWait(driver,30);
        wait.until(ExpectedConditions.elementToBeClickable(SelectTitle)).click();
    }
// action class is used below to scroll the page up so elements can be visible
    public void InputFirstAndLastName(){
        Actions actions = new Actions(driver);
        actions.sendKeys(Keys.PAGE_UP).build().perform();
        driver.findElement(FirstName).sendKeys("AccessP");
        driver.findElement(LastName).sendKeys("AutomationTest");
    }
    public void InputPassword()
    {
        driver.findElement(Password).sendKeys("NewTester");
    }

    public void InputDateOfBirth(){
        Select dropdown = new Select(driver.findElement(DateDropdown));
        dropdown.selectByValue("8");
    }

    public void SelectMonthOfBirth()throws InterruptedException{
        Select dropdown = new Select(driver.findElement(MonthDropdown));
        dropdown.selectByIndex(3);
        Thread.sleep(2000);
    }

    public void SelectYearOfBirth () throws InterruptedException{
        Select dropdown = new Select(driver.findElement(YearsDropdown));
        dropdown.selectByValue("2000");
        Thread.sleep(3000);

    }

    public void EnterAddressDetails(){

        // scrolling up the page for element to be visible
        Actions actions = new Actions(driver);
        actions.sendKeys(Keys.PAGE_UP).build().perform();

         driver.findElement(AddressFirstName).clear();
         driver.findElement(AddressFirstName).sendKeys("AccessP");
         driver.findElement(AddressLastName).clear();
         driver.findElement(AddressLastName).sendKeys("AutomationTest");

        //scrolling up page for element to be visible
        Actions actions1 = new Actions(driver);
        actions1.sendKeys(Keys.PAGE_UP).build().perform();

        driver.findElement(EnterHomeAddress).sendKeys("15 tester street");
        driver.findElement(EnterCity).sendKeys("Wythenshawe");
        Select state = new Select(driver.findElement(SelectState));
        state.selectByVisibleText("Arizona");

        driver.findElement(EnterPostCode).sendKeys("34545");

        Select country = new Select (driver.findElement(SelectCountry));
        country.selectByVisibleText("United States");

        driver.findElement(EnterMobilePhoneNumber).sendKeys("073232560");
        driver.findElement(AssignAlias).sendKeys("TestGuru");
    }

    public void ClickRegisterButton (){
        driver.findElement(RegisterButton).click();
    }

    public void VerifySuccessfullRegistration (){
        String title = "Your logo";
        if (title.contains("Your logo")){
            System.out.println("Registration Successful");
        }else{System.out.println("Registration not Successful");}

    }

}


