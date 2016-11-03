/**
 * Created by Personal on 31/10/2016.
 */


export default class HomeController {

    constructor($state) {
        this.$state = $state;


        this.menuItems = [
            {
                name: 'Feed',
                icon: 'dashboard',
                sref: '.feed'
            },
            {
                name: 'Busqueda',
                icon: 'person',
                sref: '.profile'
            },
            {
                name: 'Amigos',
                icon: 'view_module',
                sref: '.table'
            },
            {
                name: 'Estadisticas',
                icon: 'view_module',
                sref: '.table'
            }
        ];

    }

    selectItem (item) {

    }



}

HomeController.$inject = ['$state'];
