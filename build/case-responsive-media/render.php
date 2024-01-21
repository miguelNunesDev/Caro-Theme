<?php
$media_css = 'absolute inset-0 transition-opacity w-full h-full object-cover';
?>
<style>
    @media only screen and (min-width : 961px) {
        #case-responsive-media .responsive-image {
            height: <?= $attributes['height']['lg'] ?>;
        }

        #case-responsive-media .mobile {
            display: none;
        }
    }

    @media only screen and (min-width : 0) and (max-width : 960px) {
        #case-responsive-media .responsive-image {
            height: <?= $attributes['height']['sm'] ?>;
        }

        #case-responsive-media .desktop {
            display: none;
        }
    }
</style>
<section id="case-responsive-media" class="w-full" <?= get_block_wrapper_attributes(); ?>>
    <?php if (!empty($attributes['title'])) : ?>
        <h2><?= $attributes['title'] ?></h2>
    <?php endif; ?>
    <figure class="relative w-full responsive-image img-cover">
        <?php if ($attributes['desktop']['id']) : ?>
            <?php if (wp_attachment_is('video', $attributes['desktop']['id'])) : ?>
                <video class="desktop hidden md:block <?= $media_css ?>" src="<?= $attributes['desktop']['src'] ?>" data-id="<?= $attributes['desktop']['id'] ?>" muted autoplay loop></video>
            <?php else : ?>
                <img class="dekstop hidden md:block <?= $media_css ?>" src="<?= $attributes['desktop']['src'] ?>" alt="" data-id="<?= $attributes['desktop']['id'] ?>">
            <?php endif; ?>
        <?php endif; ?>
        <?php if ($attributes['mobile']['id']) : ?>
            <?php if (wp_attachment_is('video', $attributes['mobile']['id'])) : ?>
                <video class="mobile block md:hidden<?= $media_css ?>" src="<?= $attributes['mobile']['src'] ?>" data-id="<?= $attributes['mobile']['id'] ?>" muted autoplay loop></video>
            <?php else : ?>
                <img class="mobile block md:hidden<?= $media_css ?>" src="<?= $attributes['mobile']['src'] ?>" alt="" data-id="<?= $attributes['mobile']['id'] ?>">
            <?php endif; ?>
        <?php endif; ?>
    </figure>
</section>