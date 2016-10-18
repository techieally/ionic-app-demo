Ionic App Base
=====================

A starting project for Ionic that optionally supports using custom SCSS.

## Using this project

We recommend using the [Ionic CLI](https://github.com/driftyco/ionic-cli) to create new Ionic projects that are based on this project but use a ready-made starter template.

For example, to start a new Ionic project with the default tabs interface, make sure the `ionic` utility is installed:

```bash
$ npm install -g ionic
```

Then run: 

```bash
$ ionic start myProject tabs
```

More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/getting-started) page and the [Ionic CLI](https://github.com/driftyco/ionic-cli) repo.

## Issues
Issues have been disabled on this repo, if you do find an issue or have a question consider posting it on the [Ionic Forum](http://forum.ionicframework.com/).  Or else if there is truly an error, follow our guidelines for [submitting an issue](http://ionicframework.com/submit-issue/) to the main Ionic repository.


Open your command window to install Cordova:

C:\Users\Username> npm install -g cordova 

Open your command window to install Cordova and Ionic:

C:\Users\Username> npm install -g cordova ionic

create folder and give that name:

C:\Users\Username> cd Desktop

C:\Users\Username\Desktop> ionic start myApp tabs

Now we want to access myApp folder that we just created. This is our root folder.

Now let's add Cordova project for android Platform and install basic cordova plugins. This step allows us to run the app on Android emulator or device.

C:\Users\Username\Desktop\myApp> ionic platform add android

C:\Users\Username\Desktop\myApp> ionic build android

The last step of the installation process is to run your app which will start the mobile device if connected or default emulator if there is no device connected

C:\Users\Username\Desktop\myApp> ionic run android

*For further any clarification just go through below link:
https://www.tutorialspoint.com/ionic/ionic_environment_setup.htm

C:\Users\Username\Desktop\myApp> ionic platfocrm add android

