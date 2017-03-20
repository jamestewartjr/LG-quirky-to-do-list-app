#DIDID
A to do list application that helps you achieve the impossible. A front-end application that stores information locally and persists through page reloads as well as when new sessions are started.

##Setup Configuration

- Open terminal and git clone the quirky-crake repo(https://github.com/jamestewartjr/LG-quirky-to-do-list-app.git)
- NPM install the dependencies and dev dependencies: ``` npm install ```
- Make sure that webpack is configured correctly locally in order for it to interact with the project
- ```npm start``` - triggers the command to start the web development server for webpack, which reloads automatically when any changes are made to any files in the project
- All data is stored in the browsers local storage and is saved there until the storage is cleared manually. The data persists through reloads and even when you close the window an browser and restart it at a later time.

##Folder and File Structure

* Folder names are divided by functionality between the database, html/ pug views, and functionality of buttons
* functions are separated into separate files and serve a single purpose
