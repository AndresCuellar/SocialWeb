/**
 * Created by Personal on 24/10/2016.
 */


export default class LoginController {

    constructor($state) {
        this.$state = $state;


        this.user = {
            username: '',
            password: ''
        };

    }

    login() {

        this.$state.go('home');

    }

}

LoginController.$inject = ['$state'];