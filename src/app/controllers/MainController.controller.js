/**
 * Created by Personal on 18/10/2016.
 */

import angular from 'angular';

export default class MainController {

    constructor(navService, $mdSidenav, $mdBottomSheet, $log, $q, $state, $mdToast){

        this.menuItems = [];
        this.title = $state.current.data.title;

        navService
            .loadAllItems()
            .then(
                (menuItems) => {
                this.menuItems = [].concat(menuItems);
            });

    }


    toggleRightSidebar() {
        $mdSidenav('right').toggle();
    }

    toggleItemsList() {
        var pending = $mdBottomSheet.hide() || $q.when(true);

        pending.then(
            () => {
                $mdSidenav('left').toggle();
            }
        );
    }

    selectItem (item) {
        this.title = item.name;
        this.toggleItemsList();
        this.showSimpleToast(this.title);
    }

    /*
    showActions($event) {
        $mdBottomSheet.show({
            parent: angular.element(document.getElementById('content')),
            templateUrl: 'app/views/partials/bottomSheet.html',
            controller: [ '$mdBottomSheet', SheetController],
            controllerAs: "vm",
            bindToController : true,
            targetEvent: $event
        }).then(function(clickedItem) {
            clickedItem && $log.debug( clickedItem.name + ' clicked!');
        });

        function SheetController( $mdBottomSheet ) {
            var vm = this;

            vm.actions = [
                { name: 'Share', icon: 'share', url: 'https://twitter.com/intent/tweet?text=Angular%20Material%20Dashboard%20https://github.com/flatlogic/angular-material-dashboard%20via%20@flatlogicinc' },
                { name: 'Star', icon: 'star', url: 'https://github.com/flatlogic/angular-material-dashboard/stargazers' }
            ];

            vm.performAction = function(action) {
                $mdBottomSheet.hide(action);
            };
        }
    }*/

    showSimpleToast(title) {
        $mdToast.show(
            $mdToast.simple()
                .content(title)
                .hideDelay(2000)
                .position('bottom right')
        );
    }

}

MainController.$inject = ['navService', '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$state', '$mdToast'];
