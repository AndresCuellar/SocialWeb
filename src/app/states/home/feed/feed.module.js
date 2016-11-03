/**
 * Created by Personal on 31/10/2016.
 */

import angular from 'angular';

import FeedController from './feed.controller';
//import './login.html';


export default angular.module('feedModule', [])
    .controller('FeedController', FeedController)
/*.component('loginComponent', {
 templateUrl: 'src/app/components/login.html',
 controller: LoginController,
 controllerAs: lnCtrl
 })*/;
