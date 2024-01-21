<?php

add_action('init', 'custom_post_types');

function custom_post_types()
{

    $name = 'case-study';
    $name_upper = 'Case Study';
    $name_upper_plural = 'Case Studies';
    register_post_type($name, array(
        'label' => $name_upper,
        'description' => '',
        'public' => true,
        'show_ui' => true,
        'exclude_from_search' => true,
        'show_in_menu' => true,
        '_builtin' => false,
        'capability_type' => 'post',
        'hierarchical' => false,
        'rewrite' => array("slug" => $name),
        'query_var' => true,
        'menu_icon'   => 'dashicons-format-aside',
        'has_archive' => true,
        'show_in_rest' => true,
        'supports' => array(
            'title',
            'editor',
        ),
        'labels' => array(
            'name' => $name_upper_plural,
            'singular_name' => $name_upper,
            'menu_name' => $name_upper_plural,
            'add_new' => "Add $name_upper",
            'add_new_item' => "Add $name_upper",
            'edit' => 'Edit',
            'edit_item' => "edit $name_upper",
            'new_item' => "New $name_upper",
            'view' => "View $name_upper",
            'view_item' => "View $name_upper",
            'search_items' => "Search $name_upper_plural",
            'not_found' => "No $name_upper_plural found",
            'not_found_in_trash' => "No $name_upper_plural found in trash",
        ),
    ));

    $name = 'illustration';
    $name_upper = 'Illustration';
    $name_upper_plural = 'Illustrations';
    register_post_type($name, array(
        'label' => $name_upper,
        'description' => '',
        'public' => true,
        'show_ui' => true,
        'exclude_from_search' => true,
        'show_in_menu' => true,
        '_builtin' => false,
        'capability_type' => 'post',
        'hierarchical' => false,
        'rewrite' => array("slug" => $name),
        'query_var' => true,
        'menu_icon'   => 'dashicons-images-alt2',
        'has_archive' => true,
        'show_in_rest' => true,
        'supports' => array(
            'title',
            'editor',
            'thumbnail',
        ),
        'labels' => array(
            'name' => $name_upper_plural,
            'singular_name' => $name_upper,
            'menu_name' => $name_upper_plural,
            'add_new' => "Add $name_upper",
            'add_new_item' => "Add $name_upper",
            'edit' => 'Edit',
            'edit_item' => "edit $name_upper",
            'new_item' => "New $name_upper",
            'view' => "View $name_upper",
            'view_item' => "View $name_upper",
            'search_items' => "Search $name_upper_plural",
            'not_found' => "No $name_upper_plural found",
            'not_found_in_trash' => "No $name_upper_plural found in trash",
        ),
    ));

    $name = 'testimonials';
    $name_upper = 'Testimony';
    $name_upper_plural = 'Testimonials';
    register_post_type($name, array(
        'label' => $name_upper,
        'description' => '',
        'public' => true,
        'show_ui' => true,
        'exclude_from_search' => true,
        'show_in_menu' => true,
        '_builtin' => false,
        'capability_type' => 'post',
        'hierarchical' => false,
        'rewrite' => array("slug" => $name),
        'query_var' => true,
        'menu_icon'   => 'dashicons-format-quote',
        'has_archive' => true,
        'show_in_rest' => true,
        'supports' => array(
            'title',
            'editor',
        ),
        'labels' => array(
            'name' => $name_upper_plural,
            'singular_name' => $name_upper,
            'menu_name' => $name_upper_plural,
            'add_new' => "Add $name_upper",
            'add_new_item' => "Add $name_upper",
            'edit' => 'Edit',
            'edit_item' => "edit $name_upper",
            'new_item' => "New $name_upper",
            'view' => "View $name_upper",
            'view_item' => "View $name_upper",
            'search_items' => "Search $name_upper_plural",
            'not_found' => "No $name_upper_plural found",
            'not_found_in_trash' => "No $name_upper_plural found in trash",
        ),
    ));

    $name = 'contact';
    $name_upper = 'Contact info';
    $name_upper_plural = 'Contact info';
    register_post_type($name, array(
        'label' => $name_upper,
        'description' => '',
        'public' => true,
        'show_ui' => true,
        'exclude_from_search' => true,
        'show_in_menu' => true,
        '_builtin' => false,
        'capability_type' => 'post',
        'hierarchical' => false,
        'rewrite' => array("slug" => $name),
        'query_var' => true,
        'menu_icon'   => 'dashicons-email-alt',
        'has_archive' => true,
        'show_in_rest' => true,
        'supports' => array(
            'title',
            'editor',
        ),
        'labels' => array(
            'name' => $name_upper_plural,
            'singular_name' => $name_upper,
            'menu_name' => $name_upper_plural,
            'add_new' => "Add $name_upper",
            'add_new_item' => "Add $name_upper",
            'edit' => 'Edit',
            'edit_item' => "edit $name_upper",
            'new_item' => "New $name_upper",
            'view' => "View $name_upper",
            'view_item' => "View $name_upper",
            'search_items' => "Search $name_upper_plural",
            'not_found' => "No $name_upper_plural found",
            'not_found_in_trash' => "No $name_upper_plural found in trash",
        ),
    ));

    $name = 'global-content';
    $name_upper = 'Global content';
    $name_upper_plural = 'Global Contents';
    register_post_type($name, array(
        'label' => $name_upper,
        'description' => '',
        'public' => true,
        'show_ui' => true,
        'exclude_from_search' => true,
        'show_in_menu' => true,
        '_builtin' => false,
        'capability_type' => 'post',
        'hierarchical' => false,
        'rewrite' => array("slug" => $name),
        'query_var' => true,
        'menu_icon'   => 'dashicons-admin-site-alt',
        'has_archive' => true,
        'show_in_rest' => true,
        'supports' => array(
            'title',
            'editor',
        ),
        'labels' => array(
            'name' => $name_upper_plural,
            'singular_name' => $name_upper,
            'menu_name' => $name_upper_plural,
            'add_new' => "Add $name_upper",
            'add_new_item' => "Add $name_upper",
            'edit' => 'Edit',
            'edit_item' => "edit $name_upper",
            'new_item' => "New $name_upper",
            'view' => "View $name_upper",
            'view_item' => "View $name_upper",
            'search_items' => "Search $name_upper_plural",
            'not_found' => "No $name_upper_plural found",
            'not_found_in_trash' => "No $name_upper_plural found in trash",
        ),
    ));
}
