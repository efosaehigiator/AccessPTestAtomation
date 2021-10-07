$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createNewAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create New Account",
  "description": "",
  "id": "create-new-account",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "As a user I want to create a new account",
  "description": "",
  "id": "create-new-account;as-a-user-i-want-to-create-a-new-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I navigate to the url \"http://automationpractice.com/index.php\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"Sign in\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter my \"email address\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on the \"create account\" button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "your personal information page is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://automationpractice.com/index.php",
      "offset": 23
    }
  ],
  "location": "CreateNewAccountStep.i_navigate_to_the_url(String)"
});
formatter.result({
  "duration": 4026833700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in",
      "offset": 12
    }
  ],
  "location": "CreateNewAccountStep.i_click_on_button(String)"
});
formatter.result({
  "duration": 1506079100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email address",
      "offset": 12
    }
  ],
  "location": "CreateNewAccountStep.i_enter_my(String)"
});
formatter.result({
  "duration": 98790700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create account",
      "offset": 16
    }
  ],
  "location": "CreateNewAccountStep.i_click_on_the_button(String)"
});
formatter.result({
  "duration": 291292400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAccountStep.your_personal_information_page_is_displayed()"
});
formatter.result({
  "duration": 3430100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Enter personal details on registration form",
  "description": "",
  "id": "create-new-account;enter-personal-details-on-registration-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I check the title radio button as \"Mr\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter my \"FirstName\" and \"LastName\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter 5 character minimum \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I select my \"dateOfBirth\" from the select boxes",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 35
    }
  ],
  "location": "CreateNewAccountStep.i_check_the_title_radio_button_as(String)"
});
formatter.result({
  "duration": 15272785400,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LAPTOP-M3B29I87\u0027, ip: \u0027192.168.1.137\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 92.0.1, capabilities: {desiredCapabilities: {acceptInsecureCerts: true, browserName: firefox}}, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210922161155, moz:headless: false, moz:processID: 21288, moz:profile: C:\\Users\\efost\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 790c9e65-a1b7-46ce-b40f-c1ee34f5b1b4\n*** Element info: {Using\u003dxpath, value\u003d//input[@type\u003d\u0027radio\u0027][contains(@id,\u0027gender1\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:346)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:425)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat pages.CreateNewAccountPage.SelectTitle(CreateNewAccountPage.java:65)\r\n\tat stepDefinition.CreateNewAccountStep.i_check_the_title_radio_button_as(CreateNewAccountStep.java:40)\r\n\tat ✽.Given I check the title radio button as \"Mr\"(createNewAccount.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "FirstName",
      "offset": 12
    },
    {
      "val": "LastName",
      "offset": 28
    }
  ],
  "location": "CreateNewAccountStep.i_enter_my_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 29
    }
  ],
  "location": "CreateNewAccountStep.i_enter_character_minimum(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "dateOfBirth",
      "offset": 13
    }
  ],
  "location": "CreateNewAccountStep.i_select_my_from_the_select_boxes(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Enter userAddress details",
  "description": "",
  "id": "create-new-account;enter-useraddress-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I enter my \"Address details\" on the field \"Your Address\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on the green \"Register\" button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the homepage should be displayed and title should be \"Your Logo\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Address details",
      "offset": 12
    },
    {
      "val": "Your Address",
      "offset": 43
    }
  ],
  "location": "CreateNewAccountStep.i_enter_my_on_the_field(String,String)"
});
formatter.result({
  "duration": 27455000,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Tried to run command without establishing a connection\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LAPTOP-M3B29I87\u0027, ip: \u0027192.168.1.137\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 92.0.1, capabilities: {desiredCapabilities: {acceptInsecureCerts: true, browserName: firefox}}, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210922161155, moz:headless: false, moz:processID: 21288, moz:profile: C:\\Users\\efost\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 790c9e65-a1b7-46ce-b40f-c1ee34f5b1b4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:611)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:638)\r\n\tat pages.CreateNewAccountPage.EnterAddressDetails(CreateNewAccountPage.java:101)\r\n\tat stepDefinition.CreateNewAccountStep.i_enter_my_on_the_field(CreateNewAccountStep.java:62)\r\n\tat ✽.Given I enter my \"Address details\" on the field \"Your Address\"(createNewAccount.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 22
    }
  ],
  "location": "CreateNewAccountStep.i_click_on_the_green_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Logo",
      "offset": 54
    }
  ],
  "location": "CreateNewAccountStep.the_homepage_should_be_displayed_and_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
});