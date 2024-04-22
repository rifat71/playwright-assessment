Cucumber Playwright Framework  
=================
ETE testing framework: This is an ETE automation framework where I use Playwright and javascript to automate features to download a PDF file after navigating a website link. I put two feature files where one will pass and the other one is intended to fail and take screenshots upon failing. Then this has been integrated into the HTML report for better understanding and debugging.

Setup
-----
Install NodeJS >=14

```shell 
npm install 
```

Downlaod browser's binary

```shell 
npx playwright install 
```

Environment  Variables
---------------------------------
  * Currently, I didn't put any environmental variables, however, we can use them based on our requirements. In addition, we can then use the .env file to manage those.


Running Tests
-------------
Run the example passing test with the @wip tag
```shell
npm run test-pass
```

Run the example failed test with the @wip2 tag
```shell
npm run test-fail
```


Troubleshooting
---------------------------------
* What I have added in this repo
  * added two feature files: cucumber/features/*
  * added separate step-definition files: cucumber/step_definitions/*
  * common locators added to JSON file under resources/pages/* 
  * added .gitignore to avoid uploading unwanted files in the repo
  * common functions have been added under the utils folder
  * utils/elements.js is added for future use to handle separate common user interaction function 
  * downloaded files will be added to the resources/downloads/* folder. The downloaded pdf will be downloaded here.
  * screenshot upon test failure will be added in this path: reports/screenshots/* and attached to the HTML report. The work has been done in the after hooks
  * generate cucumber HTML report which will be opened automatically after the test execution
  * report will be generated under the reports folder
  * world-class, screenshot class, report class, and hooks have been added here: cucumber/support/*
  * report will be generated under the reports folder
  * baseUrl is in the before hooks and navigating to any URL will be adjusted in the utils/navigation file


Test Report Example Image
---------------------------------
![cucumber-html-report](https://imgur.com/gallery/3M64jnK)


Contributing
---------------------------------
Amanullah Galib