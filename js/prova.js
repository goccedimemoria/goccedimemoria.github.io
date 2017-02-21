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

(function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                        m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-92290876-1', 'auto');
            ga('send', 'pageview');
