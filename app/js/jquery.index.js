( function(){

    $( function(){

        $( '.mobile-menu' ).each( function(){
            new Menu( $( this ) );
        } );

        $( '.site__aside' ).each( function(){
            new Aside( $( this ) );
        } );

    } );

    var Aside = function( obj ){

        //private properties
        var _obj = obj,
            _btn = $( '.site__aside-tablet' );

        //private methods
        var _constructor = function(){
                _onEvents();
            },
            _onEvents = function(){

                _btn.on( 'click', function() {

                    if ( $( this ).hasClass( 'close' ) ){
                        _closeAside();
                    } else {
                        _openAside();
                    }

                } );

            },
            _openAside = function(){
                _btn.addClass( 'close' );
                _obj.addClass( 'visible' );
            },
            _closeAside = function(){
                _btn.removeClass( 'close' );
                _obj.removeClass( 'visible' );
            };

        //public properties

        //public methods

        _constructor();

    };

    var Menu = function( obj ){

        //private properties
        var _obj = obj,
            _btn = $( '.mobile-menu-btn' );

        //private methods
        var _constructor = function(){
                _onEvents();
            },
            _onEvents = function(){

                _btn.on( 'click', function() {

                    if ( $( this).hasClass( 'close' ) ){
                        _closeMenu();
                    } else {
                        _openMenu();
                    }

                } );

            },
            _openMenu = function(){
                _btn.addClass( 'close' );
                _obj.addClass( 'visible' );
            },
            _closeMenu = function(){
                _btn.removeClass( 'close' );
                _obj.removeClass( 'visible' );
            };

        //public properties

        //public methods

        _constructor();

    };

} )();