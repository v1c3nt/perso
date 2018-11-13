/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

const $ = require('jquery');
// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.css');
require('../scss/app.scss');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.

var app = {
    
    init: function () {
        console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
    
                $(window).on('mousewheel DOMMouseScroll', function (event) {

                    var delta = Math.max(-1, Math.min(1, (event.originalEvent.wheelDelta || -event.originalEvent.detail)));

                    $(this).scrollLeft($(this).scrollLeft() - (delta * 40));
                    event.preventDefault();

                });
        
    },

}
$(app.init);
