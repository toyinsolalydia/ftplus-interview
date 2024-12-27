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
// 

function create_woo_ftp_block_init() {
    register_block_type(__DIR__ . '/build/blocks/display-block', array(
        'render_callback' => 'render_woo_products_block'
    ));

    // Register REST API endpoint
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
    // Using WooCommerce REST API Controller
    $controller = new WC_REST_Products_Controller();
    $request = new WP_REST_Request('GET', '/wc/v3/products');
    $request->set_query_params(array(
        'per_page' => 10,
        'status' => 'publish'
    ));
    
    $response = $controller->get_items($request);
    $products = array();
    
    if (!is_wp_error($response)) {
        foreach ($response->get_data() as $product) {
            $products[] = array(
                'id' => $product['id'],
                'name' => $product['name'],
                'price' => $product['price_html'],
                'link' => $product['permalink']
            );
        }
    }
    
    return rest_ensure_response($products);
}

function render_woo_products_block($attributes) {
    if (!class_exists('WooCommerce')) {
        return '<p>WooCommerce is required for this block.</p>';
    }

    // Using WooCommerce hooks and functions
    $args = array(
        'status' => 'publish',
        'limit' => isset($attributes['numberOfProducts']) ? $attributes['numberOfProducts'] : 10,
    );

    // Using wc_get_products hook
    $products = apply_filters('woocommerce_products_block_query', wc_get_products($args));
    
    if (empty($products)) {
        return '<p>No products found.</p>';
    }

    $output = '<div class="wp-block-woo-ftp-block-display-block"><ul class="products-list">';

    foreach ($products as $product) {
        // Apply WooCommerce product filters
        $product_name = apply_filters('woocommerce_product_title', $product->get_name(), $product);
        $product_price = apply_filters('woocommerce_product_get_price_html', $product->get_price_html(), $product);
        
        $output .= sprintf(
            '<li class="product-item"><h4><a href="%s">%s</a></h4>',
            esc_url($product->get_permalink()),
            esc_html($product_name)
        );

        if ($attributes['displayPrice']) {
            $output .= sprintf('<div class="price">%s</div>', $product_price);
        }

        $output .= '</li>';
    }

    $output .= '</ul></div>';
    return $output;
}