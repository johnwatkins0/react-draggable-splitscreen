<?php

if ( shortcode_exists( 'draggbable-photos' ) ) {
	return;
}

add_action( 'init', function() {
	add_shortcode( 'draggable-photos', function( $atts ) {
		if ( isset( $atts['1'] ) && isset( $atts['2'] ) ) {
			$left = $atts['1'];
			$right = $atts['2'];
		} else if ( isset( $atts['image-1'] ) && isset( $atts['image-2'] ) ) {
			$left = $atts['image-1'];
			$right = $atts['image-2'];
		} else if ( isset( $atts['image-1'] ) && isset( $atts['vimeo'] ) ) {
			$left = $atts['image-1'];
			$right = $atts['vimeo'];
		}


		if ( ! $left || ! $right ) {
			return '';
		}

		$data_string = '';
		if ( $atts['start-at'] ) {
			$data_string .= "data-start-at=\"{$atts['start-at']}\"";
		}

		if ( $atts['instruction-text'] ) {
			$data_string .= "data-instruction-text=\"{$atts['instruction-text']}\"";
		}

		if ( $atts['type'] ) {
			$data_string .= "data-instruction-text=\"{$atts['instruction-text']}\"";
		}

		return "
			<div
				class=draggable-photos-container
				data-left=$left
				data-right=$right
				$data_string>
			</div>";
	} );
} );
