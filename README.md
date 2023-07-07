# RandomUserGeneratorApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

## Create Desktop App From Web App

Step:1 Install packages 
` npm install electron concurrently electron-packager cross-var`

Step:2 Create electron files for dev and production under src folder

Step:3 Update scripts in package.json file

Step:4 Run application using updated start command (it will allow both files to be run locally on web and also on desktop)

Step:5 Update index.html file 

Step:6 Create package.json file under src folder 

Step:7 Update angular.json file 

Step:8 Update global package.json file 

Step:9 Run command ` npm run build `

Step:10 To install web app as application 
Run `npm run package:win` for Windows 
Run `npm run package:linux` for Linux
Run `npm run package:osx` for OS X
You will find packages folder to make your app run as desktop application

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
