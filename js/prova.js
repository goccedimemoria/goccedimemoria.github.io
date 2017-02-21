/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var isAgainInViewport = true;
var isInView = function () {
    function Utils() {
    }

    Utils.prototype = {
        constructor: Utils,
        isElementInView: function (element, fullyInView) {
            var pageTop = $(window).scrollTop();
            var pageBottom = pageTop + $(window).height();
            var elementTop = $(element).offset().top;
            var elementBottom = elementTop + $(element).height();

            if (fullyInView === true) {
                return ((pageTop < elementTop) && (pageBottom > elementBottom));
            } else {
                return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
            }
        }
    };

    var Utils = new Utils();

    //audio
    var isElementInView = Utils.isElementInView($('#div-audio'), false);
    var audio = document.getElementById("audio");
    if (isElementInView && !isAgainInViewport) {
        audio.play();
        myIndex = 0;
    } else if (isElementInView && isAgainInViewport) {
        audio.play();
    } else if (!isElementInView) {
        isAgainInViewport = false;
        audio.pause();
    }
}

