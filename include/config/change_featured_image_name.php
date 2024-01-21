<?php
function change_featured_image_name()
{
    global $wp_post_types;

    // Reemplaza 'mi_tipo_post' con el nombre de tu custom post type
    $post_type = 'case-study';

    // Verifica si el custom post type está registrado
    if (isset($wp_post_types[$post_type])) {
        $labels = &$wp_post_types[$post_type]->labels;

        // Cambia el nombre de 'Featured Image'
        $labels->featured_image = 'Preview Banner';
        $labels->set_featured_image = 'Set Preview Banner';
        $labels->remove_featured_image = 'Delete Preview Banner';
        $labels->use_featured_image = 'Use new Preview Banner';
    }
}

add_action('init', 'change_featured_image_name');
