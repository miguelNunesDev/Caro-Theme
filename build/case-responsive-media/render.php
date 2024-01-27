<?php
$media_css = 'absolute inset-0 transition-opacity w-full h-full object-cover';
$id = uniqid();
?>
<style>
    #case-responsive-media.contain img {
        object-fit: contain !important;
    }

    @media only screen and (min-width : 961px) {
        <?= ".seed-" . $id ?> {
            height: <?= $attributes['height']['lg'] ?>;
        }

        #case-responsive-media .mobile {
            display: none;
        }
    }

    @media only screen and (min-width : 0) and (max-width : 960px) {
        <?= ".seed-" . $id ?> {
            height: <?= $attributes['height']['sm'] ?>;
        }

        #case-responsive-media .desktop {
            display: none;
        }
    }
</style>
<section id="case-responsive-media" <?= get_block_wrapper_attributes(); ?>>
    <?php if (!empty($attributes['title'])) : ?>
        <h2 class="font-raleway text-white text-[4.8rem] md:text-[10rem] font-bold tracking-[-0.04em] pb-[2.4rem] text-center pt-[6.4rem] md:pt-[12.8rem]"><?= $attributes['title'] ?></h2>
    <?php endif; ?>
    <figure class="relative w-full responsive-image img-cover <?= "seed-" . $id ?>">
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