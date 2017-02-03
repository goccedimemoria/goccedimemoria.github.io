app = {
    
    inizializza: function() {
        this.arg01();
        this.arg02();
        this.arg03();
        this.arg04();
        this.arg05();
        this.arg06();
    },
    
    arg01: function() {
        $('#arg01').on('click', function() {
            window.location = '/antisemitismo_nella_storia/';
        });
    },
    
    arg02: function() {
        $('#arg02').on('click', function() {
            window.location = '/legislazione_antisemita_germania_italia/';
        });
    },
    
    arg03: function() {
        $('#arg03').on('click', function() {
            window.location = '/geografia_dello_sterminio/';
        });
    },
    
    arg04: function() {
        $('#arg04').on('click', function() {
            window.location = '/vita_nei_lager/';
        });
    },
    
    arg05: function() {
        $('#arg05').on('click', function() {
            window.location = '/testimonianze/';
        });
    },
    
    arg06: function() {
        $('#arg06').on('click', function() {
            window.location = '/approccio_critico_alla_shoah/';
        });
    }
    
};

$(document).ready(function() {
    app.inizializza();
});
