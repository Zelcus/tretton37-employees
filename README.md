# tretton37 code assignment

Author: Zacharias Eryd Berlin
heroku URL: https://tretton37-zach.herokuapp.com/

To start localhost: npm run start
It will run on http://localhost:3000

## Project description

This is a web application that displays the employees of tretton37 from an API.
It displays their name and their assigned home-office.

In this App you can sort the employees either by office or by name.

## Design Process

I have decided to build the app very frontend heavy since that is what I am best at and feel most confident.
Time was a major factor whilst coding this. I wanted to be as effective as I could and therefore went for what felt most confident for me.

The app is therefore built with create-react-app. That way I could quicky get in the coding process and don't have to fiddle with a node.js server which would take more time.

I have worked with React before and it is the framework I prefer to use when creating web apps.

I wanted to do the scraping solution right away since the values I get from the solution would be the core of the app. I managed to get the wanted data by scraping but I had to pass the URL through a heroku server that only temporarily got through the cors. I didn't want more time loss so I quicky reverted back to using the API instead.
