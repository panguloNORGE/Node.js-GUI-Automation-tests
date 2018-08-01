# Node.js-GUI-Automation-tests
GUI automation using node.js with a norwegian website XEneta

These are two test suites with the automated tests for Xeneta's website:  Media Sources and Request Demo pages.

    Test Suite: Media Sources
    Test Cases:

        MS1	Verify navigation across the 4 main sections of media sources homepage

        MS2	Verify screenshots for the Xeneta products 

        MS3	Verify german version of the media sources 

        hompeage                                                                           


    Test Suite: Request Demo
    Test Cases:

        RD1 Verify request demo form is displayed: fields, dropdowns and submit button

        RD2 Fill out the demo form:fields and select a specific

         option from the dropdown

        options

        RD3 Negative test: click submit button without filling form(indicate user to enter

        required fields) 


For more details on the test cases please check the test specification excel file in this repository 

Pre-conditions
==============

-Windows PC

-Internet Explorer browser installed

-JDK installed 

-Install node.js:  

https://nodejs.org/en/

-After installation go to the node.js command prompt and run the following command to install nightwatch: 

npm install -g nightwatch


Files needed are uploaded in this GIT repository 
===============================================================================

-nightwatch.json 
(which is a config file where one can specify which browser we use, the location of the corresponding driver for the browser in question, the location of the selenium server jar file and the location of the tests)

-selenium server jar file

-microsoft web driver (driver for using IE in our test)

-TestSuite_MediaSources.js (the actual tests)

-TestSuite_RequestDemo.js (the actual tests)


SETUP instructions
=============== 

1-in your PC create the main folder w/ any name you want e.g. “MAIN FOLDER” 

2-in the “MAIN FOLDER” create  3 sub-folders w/ these names: “bin”, “tests” and “reports”

3-in the “MAIN FOLDER” put the json file from the google drive  folder "automation files"  

nightwatch.json 

4-in the “bin” folder put the following files from the google drive  folder "automation files" :

The selenium server jar 

The microsoft web driver 

5-In the “tests” folder put  the following files from the google drive  folder "automation files"  : 

TestSuite_MediaSources.js

TestSuite_RequestDemo.js


RUN the tests
==============

1-in the node.js command prompt , change directory to “MAIN FOLDER”  , once in this directory, run the wanted test suite w/ this command:

nightwatch -t tests/TestSuite_RequestDemo.js

Or

nightwatch -t tests/TestSuite_RequestDemo


Then the IExplorer will be launched and test will run
