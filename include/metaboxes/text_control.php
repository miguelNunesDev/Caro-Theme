<?php
// Función para añadir la metabox



function render_meta_text($input, $post_id, $prefix)
{
    $attr = get_post_meta($post_id, $prefix . '_' . $input['id'], true);
?>
    <label for="<?= $input['id'] ?>"><?= $input['title'] ?>:</label>
    <input type="text" id="<?= $input['id'] ?>" name="<?= $input['id'] ?>" value="<?= $attr ? esc_attr($attr) : '' ?>" placeholder="<?= $attr ? esc_attr($attr) : 'Enter text' ?>">
<?php
}

function save_meta_text($input, $post_id, $prefix)
{
    $old = get_post_meta($post_id, $prefix . '_' . $input['id'], true);
    $new = array_key_exists($input['id'], $_POST)  ? $_POST[$input['id']] : null;

    if ($new && $new != $old) {
        update_post_meta($post_id, $prefix . '_' . $input['id'], $new);
    } elseif ('' == $new && $old) {
        delete_post_meta($post_id, $prefix . '_' . $input['id'], $old);
    }
}
