<?php

if ( shortcode_exists( 'draggbable-photos' ) ) {
	return;
}

add_action( 'init', function() {
	add_shortcode( 'draggable-photos', function( $atts ) {
		if ( ! ( isset( $atts['1'] ) && isset( $atts['2'] ) ) ) {
			return;
		}

		return "
			<div
				class=draggable-photos-container
				data-1={$atts['1']}
				data-2={$atts['2']}>
			</div>";
	} );
} );
