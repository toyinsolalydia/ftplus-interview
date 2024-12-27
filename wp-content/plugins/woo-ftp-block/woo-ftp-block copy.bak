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
    // Register the block
    register_block_type(__DIR__ . '/build/blocks/display-block', array(
        'render_callback' => 'render_woo_products_block'
    ));
}
add_action('init', 'create_woo_ftp_block_init');

function render_woo_products_block($attributes) {
    if (!class_exists('WooCommerce')) {
        return '<p>WooCommerce is required for this block.</p>';
    }

    $args = array(
        'post_type' => 'product',
        'posts_per_page' => isset($attributes['numberOfProducts']) ? $attributes['numberOfProducts'] : 10,
        'post_status' => 'publish'
    );

    $query = new WP_Query($args);
    
    if (!$query->have_posts()) {
        return '<p>No products found.</p>';
    }

    $output = '<div class="wp-block-woo-ftp-block-display-block"><ul class="products-list">';

    while ($query->have_posts()) {
        $query->the_post();
        $product = wc_get_product(get_the_ID());

        $output .= sprintf(
            '<li class="product-item"><h4><a href="%s">%s</a></h4>',
            esc_url(get_permalink()),
            esc_html($product->get_name())
        );

        if ($attributes['displayPrice']) {
            $output .= sprintf('<div class="price">%s</div>', $product->get_price_html());
        }

        $output .= '</li>';
    }

    wp_reset_postdata();
    $output .= '</ul></div>';
    return $output;
}


