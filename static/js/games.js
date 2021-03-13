// выполняется когда документ полностью
// загрузился

$(document).ready(function () {

	var navbarTogglerIcon = '#nticon';
	var clsicon = '#clsicon';
	$(navbarTogglerIcon).on('click', function () {
		$(navbarTogglerIcon).css('display', 'none');
		$(clsicon).css('display', 'block');
	});

	$(clsicon).on('click', function () {
		$(navbarTogglerIcon).css('display', 'block');
		$(clsicon).css('display', 'none');
	});

	$('#footer_logo').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: '0px'}, 300);
		return false;
	});

    // Sonstructs the suggestion engine
    /*var games = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        // The url points to a json file that contains an array of country names
        prefetch: 'http://api.gamesportal.com/search.json'
    });*/
    /*
    $('.typeahead').typeahead(null, {
        name: 'games',
        source: games,
    });*/

	var searchGames = new Bloodhound({
	  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
	  queryTokenizer: Bloodhound.tokenizers.whitespace,
	  prefetch: 'http://api.gamesportal.com/search.json?t=game',
	  remote: {
	    url: 'http://api.gamesportal.com/search.json?t=game&q=%QUERY',
	    wildcard: '%QUERY'
	  }
	});

	/*$('#remote .typeahead').typeahead(null, {
	  name: 'best-pictures',
	  display: 'value',
	  source: bestPictures
	});*/

	$('#custom-templates .typeahead').typeahead(null, {
	  name: 'searchGames',
	  display: 'name',
	  source: searchGames,
	  templates: {
	    suggestion: Handlebars.compile('<div><strong>{{name}}</strong> – {{description}}</div>')
	  }
	});

});









;( function( window ) {

    'use strict';

    var docElem = window.document.documentElement;

    function getViewportH() {
        var client = docElem['clientHeight'],
            inner = window['innerHeight'];

        if( client < inner )
            return inner;
        else
            return client;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    function getOffset( el ) {
        var offsetTop = 0, offsetLeft = 0;
        do {
            if ( !isNaN( el.offsetTop ) ) {
                offsetTop += el.offsetTop;
            }
            if ( !isNaN( el.offsetLeft ) ) {
                offsetLeft += el.offsetLeft;
            }
        } while( el = el.offsetParent )

        return {
            top : offsetTop,
            left : offsetLeft
        }
    }

    function inViewport( el, h ) {
        var elH = el.offsetHeight,
            scrolled = scrollY(),
            viewed = scrolled + getViewportH(),
            elTop = getOffset(el).top,
            elBottom = elTop + elH,
            // если 0, элемент будет задействован при частичном появлении в поле видимости.
            // если 1, элемент будет задействован при полном появлении в поле видимости.
            h = h || 0;

        return (elTop + elH * h) <= viewed && (elBottom) >= scrolled;
    }

    function extend( a, b ) {
        for( var key in b ) {
            if( b.hasOwnProperty( key ) ) {
                a[key] = b[key];
            }
        }
        return a;
    }

    function cbpScroller( el, options ) {
        this.el = el;
        this.options = extend( this.defaults, options );
        this._init();
    }

    cbpScroller.prototype = {
        defaults : {
            // если 0, то класс для анимации будет добавлен, как только объект появится в поле видимости.
            // если 1, то анимация сработает только после того, как все объекты появятся в поле видимости
            viewportFactor : 0.2
        },
        _init : function() {
            if( Modernizr.touch ) return;
            this.sections = Array.prototype.slice.call( this.el.querySelectorAll( '.cbp-so-section' ) );
            this.didScroll = false;

            var self = this;
            // секции, которые уже отображены...
            this.sections.forEach( function( el, i ) {
                if( !inViewport( el ) ) {
                    classie.add( el, 'cbp-so-init' );
                }
            } );

            var scrollHandler = function() {
                    if( !self.didScroll ) {
                        self.didScroll = true;
                        setTimeout( function() { self._scrollPage(); }, 60 );
                    }
                },
                resizeHandler = function() {
                    function delayed() {
                        self._scrollPage();
                        self.resizeTimeout = null;
                    }
                    if ( self.resizeTimeout ) {
                        clearTimeout( self.resizeTimeout );
                    }
                    self.resizeTimeout = setTimeout( delayed, 200 );
                };

            window.addEventListener( 'scroll', scrollHandler, false );
            window.addEventListener( 'resize', resizeHandler, false );
        },
        _scrollPage : function() {
            var self = this;

            this.sections.forEach( function( el, i ) {
                if( inViewport( el, self.options.viewportFactor ) ) {
                    classie.add( el, 'cbp-so-animate' );
                }
                else {
                    // добавляет изначальные классы, если их нет.
                    classie.add( el, 'cbp-so-init' );

                    classie.remove( el, 'cbp-so-animate' );
                }
            });
            this.didScroll = false;
        }
    }

    // добавляем в глобальное пространство
    window.cbpScroller = cbpScroller;

} )( window );


const $backTop = $(".back-to-top");
const isHidden = "is-hidden";

AOS.init({
  offset: 200,
  delay: 50,
  once: true
});

/*$('a[data-toggle="pill"]').on("shown.bs.tab", e => {
  AOS.refresh();
});*/

$(window).on("scroll", function() {
  const $this = $(this);
  if ($this.scrollTop() + $this.height() == $(document).height()) {
    $backTop.removeClass(isHidden);
  } else {
    $backTop.addClass(isHidden);
  }
});

$backTop.on("click", () => {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});



$(document).ready(function() {

    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
        
    });



});











