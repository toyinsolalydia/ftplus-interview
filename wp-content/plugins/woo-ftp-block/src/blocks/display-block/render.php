<?php
function render_block_woo_products($attributes) {
    if (!class_exists('WooCommerce')) {
        return '<p>WooCommerce is required for this block.</p>';
    }

    $args = array(
        'status' => 'publish',
        'limit' => isset($attributes['numberOfProducts']) ? $attributes['numberOfProducts'] : 10,
        'orderby' => 'date',
        'order' => 'DESC',
    );

    $products = wc_get_products($args);
    $output = '<div class="wp-block-woo-ftp-block-display-block"><ul class="products-list">';

    foreach ($products as $product) {
        $output .= sprintf(
            '<li class="product-item"><h4><a href="%s">%s</a></h4>',
            esc_url(get_permalink($product->get_id())),
            esc_html($product->get_name())
        );

        if ($attributes['displayPrice']) {
            $output .= sprintf('<div class="price">%s</div>', $product->get_price_html());
        }

        $output .= '</li>';
    }

    $output .= '</ul></div>';
    return $output;
}