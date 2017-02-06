app = {
    inizializza: function () {
        this.arg01();
        this.arg02();
        this.arg03();
        this.arg04();
        this.arg05();
        this.arg06();
        this.isInView();
    },
    arg01: function () {
        $('#arg01').on('click', function () {
            window.location = '/antisemitismo_nella_storia/';
        });
    },
    arg02: function () {
        $('#arg02').on('click', function () {
            window.location = '/legislazione_antisemita_germania_italia/';
        });
    },
    arg03: function () {
        $('#arg03').on('click', function () {
            window.location = '/geografia_dello_sterminio/';
        });
    },
    arg04: function () {
        $('#arg04').on('click', function () {
            window.location = '/vita_nei_lager/';
        });
    },
    arg05: function () {
        $('#arg05').on('click', function () {
            window.location = '/testimonianze/';
        });
    },
    arg06: function () {
        $('#arg06').on('click', function () {
            window.location = '/ripensare_la_shoah/';
        });
    },
    isInView: function () {
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

        var isElementInView = Utils.isElementInView($('#div-audio'), false);

        var audio = document.getElementById("audio");

        if (isElementInView) {
            //$('#audio').play();
            console.log("in");
            audio.play();
        } else {
            audio.pause();
            console.log("out");

        }
    }


};

$(document).ready(function () {
    app.inizializza();

});


