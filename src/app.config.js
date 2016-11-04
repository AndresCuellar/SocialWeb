/**
 * Created by Personal on 16/10/2016.
 */

export default function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider) {

    $stateProvider
        .state('login', {
            url: '',
            templateUrl: 'src/app/components/login.html',
            controller: 'LoginController',
            controllerAs: 'lnCtrl'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'src/app/states/home/home.html',
            controller: 'HomeController',
            controllerAs: 'hmCtrl'
        })
        .state('home.feed', {
            url: '/home/feed',
            templateUrl: 'src/app/states/home/feed/feed.html',
            controller: 'FeedController',
            controllerAs: 'fdCtrl'
        })
        .state('home.profile', {
            url: '/home/profile',
            templateUrl: 'src/app/states/home/profile/profile.html',
            controller: 'ProfileController',
            controllerAs: 'peCtrl'
        });

    $urlRouterProvider.otherwise('/dashboard');

    $mdThemingProvider
        .theme('default')
        .primaryPalette('teal')
        .accentPalette('purple')
        .warnPalette('red');

    //$mdIconProvider.icon('user', 'assets/images/user.svg', 64);

}