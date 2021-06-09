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

I wanted to do the scraping solution right away since the values I get from the solution would be the core of the app. I managed to get the wanted data by scraping but I had to pass the URL through a heroku server that only temporarily got through the cors and when then I got an error message telling me that the method wasn't allowed. I didn't want to lose more time so I quicky reverted back to using the API instead.

This is also where I decided to go with create-react-app instead of Node.js. I also feel that the startup process goes smoother with React and again time was a major factor.

I have worked with React before and it is the framework I prefer to use when creating web apps. Once you learn through vanillaJS what some of the React functions do it feels super powerful.

I knew that getting the data from the API were the most crucial part of the assignment so I prioritized speed and control over anything else.

When it comes to actual design I tried to maintain the already exisiting theme of tretton37. Colors, shapes etc.
The colors were taken from https://tretton37.com/ where I inspected my way to get the correct color scheme.
I'm really fond of the "rounded corner" design so I pretty much applied 4px border-radius on all my elements, it also fits well with the some of the existing images on tretton37's website.

## The user stories that I picked

### Fancy animations (1 pt)

### Keyboard only function (1 pt)

### Responsive design, works on mobile and tablets (2 pt)

### No UI framework used (suchas Bootstrap, Ant) (1 pt)

### Screen reader functionality (1pt)

### Sort by name and office (1 pt)

### Available on a free public url (such as Azure, Heroku) (1 pt)

### Works in Chrome, Firefox, Edge (1 pt)

### Works in IE11 (1 pt)

I chose these cause those were the ones that I felt that I could handle without any problem. A bit of a safe card perhaps but I felt this was no place to take any unnecessary risks. :)
