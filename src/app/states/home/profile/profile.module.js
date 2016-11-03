/**
 * Created by Personal on 31/10/2016.
 */

import angular from 'angular';

import ProfileController from './profile.controller';
//import './login.html';


export default angular.module('profileModule', [])
    .controller('ProfileController', ProfileController)
/*.component('loginComponent', {
 templateUrl: 'src/app/components/login.html',
 controller: LoginController,
 controllerAs: lnCtrl
 })*/;
