<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}
define("CARO_VERSION", 0.2);
function enqueue_dependencies()
{
    if (is_admin()) return;

    wp_enqueue_style('real-text', 'https://use.typekit.net/nim2nhd.css');
    wp_enqueue_style('swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
    wp_enqueue_script('swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', null, null, array());
    wp_enqueue_script('app', get_template_directory_uri() . '/js/app.js', null, CARO_VERSION, array());
    wp_enqueue_script('helpers', get_template_directory_uri() . '/js/Helpers.js', null, CARO_VERSION, array());
    wp_enqueue_script('mouseParallax', get_template_directory_uri() . '/js/components/MouseParallax.js', null, CARO_VERSION, array());
    wp_enqueue_script('contentObserver', get_template_directory_uri() . '/js/components/ContentObserver.js', null, CARO_VERSION, array());
    wp_enqueue_script('caroNav', get_template_directory_uri() . '/js/components/CaroNav.js', null, CARO_VERSION, array());
}
add_action('wp_enqueue_scripts', 'enqueue_dependencies');
add_action('admin_enqueue_scripts', 'enqueue_dependencies');

// BLOCKS REGISTER
function ink_components_block_init()
{
    register_block_type(get_template_directory() . '/build/hero-banner');
    register_block_type(get_template_directory() . '/build/ink-dependencies');
    register_block_type(get_template_directory() . '/build/case-study-preview');
    register_block_type(get_template_directory() . '/build/illustration-preview');
    register_block_type(get_template_directory() . '/build/testimonial-slider');
    register_block_type(get_template_directory() . '/build/contact-block');
    register_block_type(get_template_directory() . '/build/profile-colunm');
    register_block_type(get_template_directory() . '/build/profile-details');
    register_block_type(get_template_directory() . '/build/workflow-slider');
    register_block_type(get_template_directory() . '/build/case-study-list');
    // Case Study blocks
    register_block_type(get_template_directory() . '/build/case-banner');
    register_block_type(get_template_directory() . '/build/case-aside-banner-link');
    register_block_type(get_template_directory() . '/build/case-aside-banner');
    register_block_type(get_template_directory() . '/build/case-aside-text-title');
    register_block_type(get_template_directory() . '/build/case-card-slider');
    register_block_type(get_template_directory() . '/build/case-slider');
    register_block_type(get_template_directory() . '/build/case-overview');
    register_block_type(get_template_directory() . '/build/case-responsive-media');
    register_block_type(get_template_directory() . '/build/case-timeline');
    register_block_type(get_template_directory() . '/build/case-two-column');
    register_block_type(get_template_directory() . '/build/case-summary');
    register_block_type(get_template_directory() . '/build/case-duo-cards');
    register_block_type(get_template_directory() . '/build/case-row-text-img');
    register_block_type(get_template_directory() . '/build/case-aside-content-image');
    register_block_type(get_template_directory() . '/build/case-responsive-title-image');
}

add_action('init', 'ink_components_block_init');
