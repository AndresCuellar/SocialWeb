/**
 * Created by Personal on 31/10/2016.
 */

import angular from 'angular';

import HomeController from './home.controller';
//import './login.html';


export default angular.module('homeModule', [])
    .controller('HomeController', HomeController)
/*.component('loginComponent', {
 templateUrl: 'src/app/components/login.html',
 controller: LoginController,
 controllerAs: lnCtrl
 })*/;
