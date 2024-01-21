<?php
// Función para renderizar el contenido de la metabox con botón para la galería de medios




if ($post->post_type !== $input['type']) return;


function render_image_upload($post)
{
    global $INK_IMAGE_UPLOAD;

    foreach ($INK_IMAGE_UPLOAD as $input) :

        if ($post->post_type !== $input['type']) return;

        $image_id = get_post_meta($post->ID, '_' . $input['id'], true);
        $image_url = wp_get_attachment_url($image_id);
?>
        <div style="padding-bottom: 2rem">
            <h2><?= $input['title'] ?></h2>
            <input type="hidden" id="<?= $input['id'] ?>" name="<?= $input['id'] ?>" value="<?= esc_attr($image_id); ?>">

            <button type="button" id="<?= $input['id'] . '_open_gallery' ?>" class="button" style="padding-block: 2rem">
                <img id="<?= $input['id'] . '_image_preview' ?>" class="<?= $image_url ? '' : 'hidden' ?>" src="<?php echo esc_url($image_url); ?>" style="max-width: 100%; height: auto;">

                <span id="<?= $input['id'] . '_select_text' ?>" class="<?= !$image_url ? '' : 'hidden' ?>" style="margin-top: 1rem">Select image</span>
            </button>
            <button type="button" class="<?= $image_url ? '' : 'hidden' ?> button" id="<?= $input['id'] . '_image_delete' ?>" style="margin-top:2rem">Eliminar Imagen</button>
        </div>

<?php endforeach;
}

// Función para guardar los datos de la metabox con botón para la galería de medios
function save_metabox_image_upload($post_id)
{
    global $INK_IMAGE_UPLOAD;

    foreach ($INK_IMAGE_UPLOAD as $input) :

        $old = get_post_meta($post_id, '_' . $input['id'], true);
        $new = $_POST[$input['id']];
        if ($new && $new != $old) {
            update_post_meta($post_id, '_' . $input['id'], $new);
        } elseif ('' == $new && $old) {
            delete_post_meta($post_id, '_' . $input['id'], $old);
        }
    endforeach;
}

// Añadir ganchos para activar la metabox con botón para la galería de medios
add_action('add_meta_boxes', 'register_image_upload');
add_action('save_post', 'save_metabox_image_upload');

// Función para agregar scripts y estilos necesarios
function set_image_upload_scripts()
{
    global $post_type;
    global $INK_IMAGE_UPLOAD;



    foreach ($INK_IMAGE_UPLOAD as $input) :

        if ($post_type !== $input['type']) return;
        // Registra y encola el script de la galería de medios
        wp_enqueue_media();

        // Registra y encola tu script personalizado
        wp_register_script('metabox_gallery', get_template_directory_uri() . '/js/modules/metabox_gallery.js', array('jquery'), '1.0', true);
        wp_enqueue_script('metabox_gallery');
    endforeach;
    wp_localize_script('metabox_gallery', 'images_upload_fields', $INK_IMAGE_UPLOAD);
}

// Añadir ganchos para activar scripts y estilos
add_action('admin_enqueue_scripts', 'set_image_upload_scripts');
