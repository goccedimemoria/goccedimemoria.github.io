slideshow = {
    
    indice: 1,

    scorri: function(n) {
        this.mostra(this.indice += n);
    },

    corrente: function(n) {
        this.mostra(this.indice = n);
    },
    
    mostra: function(n) {
        var i;
        var x = $('.slides');
        var dots = $('.dots');;
        if (n > x.length) {
            this.indice = 1;
        } 
        if (n < 1) {
            this.indice = x.length;
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none'; 
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' w3-white', '');
        }
        x[this.indice - 1].style.display = 'block';
        dots[this.indice - 1].className += ' w3-white';
    }
};

$(document).ready(function() {
    slideshow.mostra(slideshow.indice);
});