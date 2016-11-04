/**
 * Created by Personal on 31/10/2016.
 */


export default class FeedController {

    constructor($scope) {

        this.$scope = $scope;

        this.feed = [
            {
                postId: 1,
                postDate: new Date(),
                likeIt: false,
                star: 'star_border',
                fill: 'black',
                user: {
                    userId: 1,
                    userName: 'Edgar Ulises Garcia Gallegos',
                    userImgPath: 'src/app/resources/profile_edgar.svg'
                    },
                message: 'Se ofrecen servicion de consultaria de software, trabajamos bajo proyectos y tambien realizamos cotizaciones para tus proyectos de software. Comparanos.'
            },
            {
                postId: 2,
                postDate: new Date(),
                likeIt: false,
                star: 'star_border',
                fill: 'black',
                user: {
                    userId: 1,
                    userName: 'Edgar Ulises Garcia Gallegos',
                    userImgPath: 'src/app/resources/profile_edgar.svg'
                },
                message: 'Se ofrecen servicion de consultaria de software, trabajamos bajo proyectos y tambien realizamos cotizaciones para tus proyectos de software. Comparanos.'
            },
            {
                postId: 3,
                postDate: new Date(),
                likeIt: false,
                star: 'star_border',
                fill: 'black',
                user: {
                    userId: 1,
                    userName: 'Edgar Ulises Garcia Gallegos',
                    userImgPath: 'src/app/resources/profile_edgar.svg'
                },
                message: 'Se ofrecen servicion de consultaria de software, trabajamos bajo proyectos y tambien realizamos cotizaciones para tus proyectos de software. Comparanos.'
            }
        ];


    }

    toggleStart(item) {

        if (item.likeIt) {
            item.likeIt = false;
            item.star = 'star_border';
            item.fill = 'black';
        } else {
            item.likeIt = true;
            item.star = 'star';
            item.fill = '#FFFF00';
        }


    }



}

FeedController.$inject = ['$scope'];
