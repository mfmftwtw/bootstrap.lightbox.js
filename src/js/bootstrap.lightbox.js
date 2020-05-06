;(function($) {
	$.extend({
		lightbox: {
			defaultSettings: {
				backdrop: true,
				keyboard: true,
				focus: true,
				target: "#myLightbox",
				animate: "fade",
				size: false,
				align: "center",
				header: "show",
				footer: "show",
				center: true
			},
			init: function( elem, options )
			{
				var settings = $.fn.extend( true, {}, $.lightbox.defaultSettings, options, $( elem ).data() ),
					open = function()
					{
						if ( settings.target === $.lightbox.defaultSettings.target ) {
							if( $( settings.target ).length > 0 ) $( settings.target ).remove();
							$( "body" ).append( '<div class="modal" id="myLightbox" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"></div><div class="modal-footer"><div class="modal-title w-100"></div></div></div></div></div>' );
						}
						var $modal = $( settings.target ),
							$dialog = $modal.find( ".modal-dialog" ),
							$header = $modal.find( ".modal-header" ),
							$body = $modal.find( ".modal-body" ),
							$title = $modal.find( ".modal-title" ),
							$footer = $modal.find( ".modal-footer" );

						$modal.data( "backdrop", settings.backdrop );
						$modal.data( "keyboard", settings.keyboard );
						$modal.data( "focus", settings.focus );

						if ( settings.animate === "fade" ) $modal.addClass( "fade" );
						if ( settings.size ) $dialog.addClass( "modal-" + settings.size );
						if ( settings.center === true ) $dialog.addClass( "modal-dialog-centered" );
						if ( settings.header !== "show" ) $header.hide();
						if ( settings.footer !== "show" ) $footer.hide();
						$footer.addClass( "text-" + settings.align );

						$title.html( settings.title );

						var $image =  $( "<img>" ),
							path = $( elem ).data( "href" ) || $( elem ).attr( "href" );
						$image.attr( "src", path );
						$image.css( { "width": "100%", "height": "auto" });
						$body.html( "" );
						$body.append( $image );

						$modal.modal( "show" );
					}

				$( elem ).on( "click", open );
			}
		}
	});
	$.fn.extend( true, {
		lightbox: function( options ) { return this.each( function() { ( new $.lightbox.init( this, options ) ); }); }
	});
	$.fn.lightbox.Constructor = { VERSION: "1.0.0" }
})( jQuery );

$( document ).ready( function() {
	$( "*[data-toggle=lightbox]" ).lightbox();
});
