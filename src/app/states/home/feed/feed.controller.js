/**
 * Created by Personal on 31/10/2016.
 */


export default class FeedController {

    constructor($state) {
        this.$state = $state;


        this.menuItems = [
            {
                name: 'Home',
                icon: 'dashboard',
                sref: '.dashboard'
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

FeedController.$inject = ['$state'];
