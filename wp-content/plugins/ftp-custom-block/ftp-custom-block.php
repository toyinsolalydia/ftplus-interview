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

function ftp_products_block_init() {
    register_block_type(__DIR__ . '/build/blocks/products-block');
}
add_action('init', 'ftp_products_block_init');

function ftp_enqueue_block_editor_assets() {
    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');
    
    wp_enqueue_script(
        'ftp-products-block',
        plugins_url('build/index.js', __FILE__),
        $asset_file['dependencies'],
        $asset_file['version']
    );
}
add_action('enqueue_block_editor_assets', 'ftp_enqueue_block_editor_assets');

function render_products_block($attributes) {
    $args = array(
        'post_type' => 'product',
        'posts_per_page' => $attributes['productsToShow'],
        'post_status' => 'publish'
    );

    $products = wc_get_products($args);
    
    if (empty($products)) {
        return '<div class="wp-block-ftp-products-block">No products found.</div>';
    }

    $columns = isset($attributes['columns']) ? $attributes['columns'] : 3;
    $output = sprintf(
        '<div class="wp-block-ftp-products-block"><div class="products-grid columns-%d">',
        $columns
    );
    
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

register_block_type('ftp/products-block', array(
    'render_callback' => 'render_products_block'
));