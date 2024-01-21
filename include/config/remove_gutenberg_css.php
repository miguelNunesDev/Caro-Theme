<?php
function remove_gutenberg_css()
{
    // Quitar el enlace al archivo de estilos del iframe de Gutenberg
    remove_action('wp_enqueue_scripts', 'wp_common_block_scripts_and_styles');

    // Quitar el filtro que agrega estilos al contenido del iframe de Gutenberg
    remove_filter('the_content', 'do_blocks', 9);
}
add_action('admin_init', 'remove_gutenberg_css');
