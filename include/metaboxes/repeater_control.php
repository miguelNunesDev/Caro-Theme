<?php
function render_meta_repeater($repeater, $post_id, $prefix)
{
?>
    <div class="repeater-wrapper" id="<?= $repeater['id'] . '_repeater' ?>">
        <?php foreach ($repeater['inputs'] as $input) : ?>
            <section style="display:flex; flex-wrap: wrap">
                <div style="width:90%">
                    <?php switch ($input['type']) {
                        case 'text':
                            render_meta_text($input, $post_id, $prefix . '_' . $repeater['id']);
                            break;
                        case 'textarea':
                            render_meta_text_area($input, $post_id, $prefix . '_' . $repeater['id']);
                            break;
                        case 'media':
                            render_meta_media_upload($input, $post_id, $prefix . '_' . $repeater['id']);
                            break;
                    } ?>
                </div>
                <aside>
                    <button type="button" class="button secondary remove-item" id="<?= $repeater['id'] . '_add_item' ?>">x</button>
                </aside>
            </section>
        <?php endforeach; ?>
    </div>
    <button type="button" class="button" id="<?= $repeater['id'] . '_add_item' ?>" style="margin-top:2rem">Add new Item</button>

    <script>
        var repeaterIndex = 0;
        const renderMediaUpload = (id, title, prefix, index) => {
            const section = document.createElement('section');
            section.style.display = 'flex';
            section.style.flexWrap = 'wrap';

            const innerHtml = `<div style="padding-bottom: 2rem">
                                <h2>${title}</h2>
                                <input type="hidden" id="${id}${}" name="<?= $input['id'] ?>" value="<?= esc_attr($image_id); ?>">

                                <button type="button" id="<?= $input['id'] . '_open_gallery' ?>" class="button" style="padding-block: 2rem">
                                    <img id="<?= $input['id'] . '_image_preview' ?>" class="<?= $image_url ? '' : 'hidden' ?>" src="<?php echo esc_url($image_url); ?>" style="max-width: 100%; height: auto;">

                                    <span id="<?= $input['id'] . '_select_text' ?>" class="<?= !$image_url ? '' : 'hidden' ?>" style="margin-top: 1rem">Select image</span>
                                </button>
                                <button type="button" class="<?= $image_url ? '' : 'hidden' ?> button" id="<?= $input['id'] . '_image_delete' ?>" style="margin-top:2rem">Eliminar Imagen</button>
                            </div>`;
        }
        const repeaterData = {
            postId: <?= $post_id ?>,
            prefix: <?= $prefix ?>,
            repeaterId: <?= $repeater['id'] ?>
        }
        const add_bttn = document.querySelector('#<?= $repeater['id'] . '_add_item' ?>');
        const wrapper = document.querySelector('#<?= $repeater['id'] . '_repeater' ?>');
    </script>

<?php
}
function save_meta_repeater($input, $post_id, $prefix)
{
}
