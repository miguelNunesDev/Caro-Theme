<?php

function render_meta_media_upload($input, $post_id, $prefix)
{
    $image_id = get_post_meta($post_id, $prefix . '_' . $input['id'], true);
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
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            initGallery("<?= $input['id'] ?>");
        });
    </script>
<?php
};
function save_meta_media_upload($input, $post_id, $prefix)
{
    $old = get_post_meta($post_id, $prefix . '_' . $input['id'], true);
    $new = array_key_exists($input['id'], $_POST)  ? $_POST[$input['id']] : null;
    
    if ($new && $new != $old) {
        update_post_meta($post_id, $prefix . '_' . $input['id'], $new);
    } elseif ('' == $new && $old) {
        delete_post_meta($post_id, $prefix . '_' . $input['id'], $old);
    }
}



// Función para añadir la metabox con botón para la galería de medios
function register_image_upload()
{
    global $INK_IMAGE_UPLOAD;

    foreach ($INK_IMAGE_UPLOAD as $input) {
        add_meta_box(
            'metabox_galeria_id',
            'Images',
            'render_image_upload',
            $input['type'],
            'side',
            'high'
        );
    }
}
