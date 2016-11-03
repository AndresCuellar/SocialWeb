/**
 * Created by Personal on 12/10/2016.
 */

import angular from 'angular';

import 'angular-material';
import 'angular-animate';
import 'angular-aria';
import 'angular-material/angular-material.css';
import uiRouter from 'angular-ui-router';


//import homeController from './app.controller.js';
import configFile from './app.config';
import login from './app/components/login.module.js';
import home from './app/states/home/home.module.js';
import feed from './app/states/home/feed/feed.module';


export default angular.module('app', [
    'ngMaterial',
    uiRouter,
    login.name,
    home.name,
    feed.name
])
//.controller('HomeController', homeController)
.config(configFile);