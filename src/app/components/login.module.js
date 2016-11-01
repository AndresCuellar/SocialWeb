/**
 * Created by Personal on 24/10/2016.
 */


import angular from 'angular';

import LoginController from './login.controller';
//import './login.html';


export default angular.module('loginModule', [])
    .controller('LoginController', LoginController)
    /*.component('loginComponent', {
        templateUrl: './login.html',
        controller: LoginController,
        controllerAs: lnCtrl,
        binding: {

        }
    }*/

    ;
