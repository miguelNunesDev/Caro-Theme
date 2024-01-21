<?php

include_once __DIR__ . '/metaboxes/text_control.php';
include_once __DIR__ . '/metaboxes/media_control.php';
include_once __DIR__ . '/metaboxes/text_area_control.php';
include_once __DIR__ . '/metaboxes/repeater_control.php';

$INK_METABOXES = [
    array(
        'post_types' => ['case-study'],
        'id' => 'case_preview',
        'title' => 'Preview Content',
        'prefix' => 'case',
        'inputs' => [
            array(
                'type' => 'text',
                'id' => 'title',
                'title' => 'Project title'

            ),
            array(
                'type' => 'textarea',
                'id' => 'summary',
                'title' => 'Project summary'

            ),
            array(
                'type' => 'text',
                'id' => 'link',
                'title' => 'Project Link'

            ),
            array(
                'type' => 'media',
                'id' => 'logo',
                'title' => 'Logo'
            ),
            array(
                'type' => 'media',
                'id' => 'mockup',
                'title' => 'Mockup'
            ),
            array(
                'type' => 'media',
                'id' => 'background',
                'title' => 'Background'
            ),
            array(
                'type' => 'media',
                'id' => 'aside',
                'title' => 'Aside Media'
            ),
        ]
    ),
    array(
        'post_types' => ['illustration'],
        'id' => 'details',
        'title' => 'Details',
        'prefix' => 'detail',
        'inputs' => [
            array(
                'type' => 'text',
                'id' => 'year',
                'title' => 'Year'
            ),
            array(
                'type' => 'media',
                'id' => 'tool',
                'title' => 'Tool icon',
            ),
        ]
    ),
    array(
        'post_types' => ['testimonials'],
        'id' => 'testimonial_info',
        'title' => 'Testimonial Info',
        'prefix' => 'testimonial',
        'inputs' => [
            array(
                'type' => 'text',
                'id' => 'job',
                'title' => 'Job position'
            ),
            array(
                'type' => 'text',
                'id' => 'company',
                'title' => 'Company name',
            ),
        ]
    ),
    array(
        'post_types' => ['global-content'],
        'id' => 'media',
        'title' => 'Content',
        'prefix' => 'cv',
        'inputs' => [
            array(
                'type' => 'media',
                'id' => 'pdf',
                'title' => 'Upload Pdf'
            ),
        ]
    ),
];

function ink_register_metaboxes()
{
    global $INK_METABOXES;

    foreach ($INK_METABOXES as $metabox) {
        foreach ($metabox['post_types'] as $post_type) {
            add_meta_box(
                $metabox['id'],
                $metabox['title'],
                'render_metaboxes',
                $post_type,
                'side',
                'high'
            );
        }
    }
}
function render_metaboxes($post)
{

    global $INK_METABOXES;
    $post_id = $post->ID;
    $post_type = $post->post_type;


    foreach ($INK_METABOXES as $metabox) :
        foreach ($metabox['post_types'] as $meta_post_type) :
            if ($post_type !== $meta_post_type) continue;
            foreach ($metabox['inputs'] as $input) :
                switch ($input['type']) {
                    case 'text':
                        render_meta_text($input, $post_id, $metabox['prefix']);
                        break;
                    case 'textarea':
                        render_meta_text_area($input, $post_id, $metabox['prefix']);
                        break;
                    case 'media':
                        render_meta_media_upload($input, $post_id, $metabox['prefix']);
                        break;
                    case 'repeater':
                        render_meta_repeater($input, $post_id, $metabox['prefix']);
                        break;
                }
?>
                <hr>
            <?php
            endforeach;
        endforeach;
    endforeach;
}

function ink_save_metaboxes($post_id)
{
    global $INK_METABOXES;



    foreach ($INK_METABOXES as $metabox) :
        foreach ($metabox['inputs'] as $input) :
            switch ($input['type']) {
                case 'text':
                    save_meta_text($input, $post_id, $metabox['prefix']);
                    break;
                case 'textarea':
                    save_meta_text_area($input, $post_id, $metabox['prefix']);
                    break;
                case 'media':
                    save_meta_media_upload($input, $post_id, $metabox['prefix']);
                    break;
            }
        endforeach;
    endforeach;
}

add_action('add_meta_boxes', 'ink_register_metaboxes');
add_action('save_post', 'ink_save_metaboxes');

function ink_set_media_script_variables()
{
    wp_enqueue_media();

    // Registra y encola tu script personalizado
    wp_register_script('metabox_gallery', get_template_directory_uri() . '/js/modules/metabox_gallery.js', array('jquery'), '1.0', true);
    wp_enqueue_script('metabox_gallery');

    global $post_type;
    global $INK_METABOXES;

    foreach ($INK_METABOXES as $metabox) :
        foreach ($metabox['post_types'] as $meta_post_type) :
            if ($post_type !== $meta_post_type) return;
            $media_ids = array();

            foreach ($metabox['inputs'] as $input) :
                if ($input['type'] === 'media') {
                    array_push($media_ids, $input['id']);
                }
            endforeach;
            wp_localize_script('metabox_gallery', 'images_upload_fields', $media_ids);
        endforeach;
    endforeach;
}
add_action('admin_enqueue_scripts', 'ink_set_media_script_variables');
