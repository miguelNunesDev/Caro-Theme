<?php

/**
 * Add custom taxonomies
 *
 * Additional custom taxonomies can be defined here
 * https://codex.wordpress.org/Function_Reference/register_taxonomy
 */
function add_custom_taxonomies()
{
    // Add new "Locations" taxonomy to Posts
    $name = 'Category';
    $slug = 'category';
    register_taxonomy($slug, 'case-study', array(
        'hierarchical' => true,
        'show_in_rest'      => true,
        'labels' => array(
            'name' => _x($name, 'taxonomy general name'),
            'singular_name' => _x($name, 'taxonomy singular name'),
            'search_items' => __('Search ' . $name),
            'all_items' => __('All ' . $name),
            'parent_item' => __('Parent ' . $name),
            'parent_item_colon' => __('Parent ' . $name . ':'),
            'edit_item' => __('Edit ' . $name),
            'update_item' => __('Update ' . $name),
            'add_new_item' => __('Add New ' . $name),
            'new_item_name' => __('New ' . $name . ' Name'),
            'menu_name' => __($name),
        ),
        // Control the slugs used for this taxonomy
        'rewrite' => array(
            'slug' => $slug, // This controls the base slug that will display before each term
            'with_front' => true, // Don't display the category base before "/locations/"
            'hierarchical' => true // This will allow URL's like "/locations/boston/cambridge/"
        ),
    ));
}
add_action('init', 'add_custom_taxonomies', 0);
