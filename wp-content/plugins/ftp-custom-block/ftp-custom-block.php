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

if (!defined('ABSPATH')) {
    exit;
}

function ftp_products_block_init() {
    if (!class_exists('WooCommerce')) {
        return;
    }

    // Check if block.json exists
    $block_json = __DIR__ . '/build/blocks/products-block/block.json';
    if (!file_exists($block_json)) {
        return;
    }

    register_block_type($block_json, [
        'render_callback' => 'render_products_block'
    ]);
}
add_action('init', 'ftp_products_block_init', 20);

function render_products_block($attributes) {
    if (!function_exists('wc_get_products')) {
        return 'WooCommerce is not active';
    }

    $args = [
        'post_type' => 'product',
        'posts_per_page' => $attributes['productsToShow'] ?? 6,
        'post_status' => 'publish'
    ];

    $products = wc_get_products($args);
    
    if (empty($products)) {
        return '<div class="wp-block-ftp-products-block">No products found.</div>';
    }

    $columns = $attributes['columns'] ?? 3;
    $output = sprintf(
        '<div class="wp-block-ftp-products-block"><div class="products-grid columns-%d">',
        $columns
    );
    
    foreach ($products as $product) {
        $output .= sprintf(
            '<div class="product-card">
                <a href="%s">%s<h3>%s</h3><div class="price">%s</div></a>
            </div>',
            esc_url($product->get_permalink()),
            $product->get_image('woocommerce_thumbnail'),
            esc_html($product->get_name()),
            $product->get_price_html()
        );
    }
    
    return $output . '</div></div>';
}

// Add WooCommerce block category
add_filter('block_categories_all', function($categories) {
    return array_merge($categories, [[
        'slug'  => 'woocommerce',
        'title' => 'WooCommerce'
    ]]);
});