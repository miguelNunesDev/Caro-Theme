<section id="case-aside-banner" class="relative flex flex-wrap" <?= get_block_wrapper_attributes(); ?>>
    <?php get_template_part('partials/caro', 'anchor', array(
        'id' => $attributes['anchor'],
    )); ?>
    <div class="flex max-md:w-full px-[3.2rem] py-[6.4rem] md:py-0 items-center md:basis-6/12 bg-[#2C2829]">
        <header class="md:pl-[13.2rem]">
            <h2 class="text-raleway tracking-[-0.04em] font-bold leading-[1.11em] text-white text-[7.2rem] mb-[3.2rem] md:mb-[6.4rem]"><?= $attributes['title'] ?></h2>
            <?php if ($attributes['subtitle']) : ?>
                <p class="text-white pb-[.4rem] font-raleway tracking-[-0.04em] font-semibold text-[2.3rem]"><?= $attributes['subtitle'] ?></p>
            <?php endif; ?>
            <?php if ($attributes['content']) : ?>
                <p class="text-content"><?= $attributes['content'] ?></p>
            <?php endif; ?>
        </header>

    </div>
    <aside class="md:basis-6/12 w-full img-cover h-[53.4rem] md:h-[62.8rem]">
        <?php if (wp_attachment_is('video', $attributes['thumbnail']['id'])) : ?>
            <video src="<?= $attributes['thumbnail']['src'] ?>" muted autoplay loop></video>
        <?php else : ?>
            <img src="<?= $attributes['thumbnail']['src'] ?>" alt="">
        <?php endif; ?>
    </aside>
</section>