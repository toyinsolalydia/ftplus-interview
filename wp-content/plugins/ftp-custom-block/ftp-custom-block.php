<?php
/**
 * Plugin Name:       Ftp Custom Block
 * Description:       Woocommerce products block.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            Toyinsola Lydia
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ftp-custom-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
// function create_block_ftp_custom_block_block_init() {
// 	register_block_type( __DIR__ . '/woocommerce-products-block' );
// }
// add_action( 'init', 'create_block_ftp_custom_block_block_init' );

function ftp_custom_block_init() {
	if (!class_exists('WooCommerce')) {
        return;
    }
		register_block_type( __DIR__ . 'build/blocks/products-block', array(
			'editor_script' => 'woo-products-block-editor',
			'editor_style' => 'woo-products-block-editor',
			'style' => 'woo-products-block',
			'render_callback' => 'render_products_block'
		) );
}
add_action( 'init', 'ftp_custom_block_init' );

function ftp_custom_block_assets() {
    // Editor Script
    wp_register_script(
        'woo-products-block-editor',
        plugins_url('build/blocks/products-block/index.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n')
    );

    // Editor Style
    wp_register_style(
        'woo-products-block-editor',
        plugins_url('build/blocks/products-block/editor.css', __FILE__),
        array('wp-edit-blocks')
    );	
    // Frontend Style
    wp_register_style(
        'woo-products-block',
        plugins_url('build/blocks/products-block/style.css', __FILE__),
        array()
    );
}	

add_action('init', 'ftp_custom_block_assets');

function render_products_block($attributes) {
    $args = array(
        'post_type' => 'product',
        'posts_per_page' => -1,
        'post_status' => 'publish'
    );

    $products = wc_get_products($args);
    
    if (empty($products)) {
        return '<div class="woo-products-block">No products found.</div>';
    }

    $output = '<div class="woo-products-block"><div class="products-grid">';
    
    foreach ($products as $product) {
        $output .= sprintf(
            '<div class="product-card">
                <a href="%s">
                    %s
                    <h3>%s</h3>
                    <div class="price">%s</div>
                </a>
            </div>',
            esc_url($product->get_permalink()),
            $product->get_image('woocommerce_thumbnail'),
            esc_html($product->get_name()),
            $product->get_price_html()
        );
    }
    
    $output .= '</div></div>';
    
    return $output;
}