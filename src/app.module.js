/**
 * Created by Personal on 12/10/2016.
 */

import angular from 'angular';

import 'angular-material';
import 'angular-animate';
import 'angular-aria';

//import '../node_modules/angular-material/angular-material.css';

import 'angular-material/angular-material.css';

//import 'node_modules/angular-material/angular-material.css';

import uiRouter from 'angular-ui-router';

import homeController from './app.controller.js';
import configFile from './app.config';
import login from './app/components/login.module.js';


export default angular.module('app', [
    'ngMaterial',
    uiRouter,
    login.name
])
.controller('HomeController', homeController)
.config(configFile);