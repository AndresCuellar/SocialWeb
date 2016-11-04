/**
 * Created by Personal on 31/10/2016.
 */


export default class HomeController {

    constructor($state, $mdSidenav) {
        this.$state = $state;
        this.$mdSidenav = $mdSidenav;


        this.menuItems = [
            {
                name: 'Feed',
                icon: 'home',
                sref: '.feed'
            },
            {
                name: 'Busqueda',
                icon: 'search',
                sref: '.profile'
            },
            {
                name: 'Amigos',
                icon: 'group',
                sref: '.table'
            },
            {
                name: 'Estadisticas',
                icon: 'show_chart',
                sref: '.table'
            }
        ];

    }

    selectItem (item) {

    }

    toggleNav (navId) {
        this.$mdSidenav(navId).toggle();
    }



}

HomeController.$inject = ['$state','$mdSidenav'];
