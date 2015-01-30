'use strict';

/**
 * HomeController contains functions and data for the Home page
 * @constructor
 */
var HomeController = function () {

    var homeCtrl = this;

};

HomeController.prototype = {

    /**
     * AboutMe object data to be displayed on the home page
     */
    aboutMe: {
        name: 'Dai',
        description: 'MEAN Stack and Android Developer',
        contact: 'dle.williams1@gmail.com',
        github: 'https://github.com/daveloper87'
    }

};

exports.HomeController = HomeController;