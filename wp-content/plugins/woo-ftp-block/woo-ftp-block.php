<?php
/**
 * Plugin Name:       WooCommerce Featured Products Block
 * Description:       A Gutenberg block to display WooCommerce products
 * Version:          1.0.0
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Author:           Toyinsola
 * License:          GPL-2.0-or-later
 * License URI:      https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:      woo-ftp-block
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 */
function create_woo_ftp_block_init() {
    // Register the block
    register_block_type(__DIR__ . '/build/blocks/display-block');

    // Register REST API endpoint for products
    add_action('rest_api_init', function () {
        register_rest_route('woo-ftp-block/v1', '/products', array(
            'methods' => 'GET',
            'callback' => 'get_woo_products',
            'permission_callback' => '__return_true'
        ));
    });
}
add_action('init', 'create_woo_ftp_block_init');

function get_woo_products() {
    if (!class_exists('WooCommerce')) {
        return new WP_Error('woocommerce_required', 'WooCommerce is not installed or activated', array('status' => 404));
    }

    $args = array(
        'status' => 'publish',
        'limit' => 10,
        'orderby' => 'date',
        'order' => 'DESC',
    );

    $products = wc_get_products($args);
    $formatted_products = array();

    foreach ($products as $product) {
        $formatted_products[] = array(
            'id' => $product->get_id(),
            'name' => $product->get_name(),
            'price' => $product->get_price_html(),
            'link' => get_permalink($product->get_id())
        );
    }

    return rest_ensure_response($formatted_products);
}


