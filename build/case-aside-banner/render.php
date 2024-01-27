
<section id="case-aside-banner" class="relative flex flex-wrap" <?= get_block_wrapper_attributes(); ?>>
    <?php get_template_part('partials/caro', 'anchor', array(
        'id' => $attributes['anchor'],
    )); ?>
    <aside class="md:basis-7/12 w-full img-cover h-[53.4rem] md:h-[62.8rem]">
        <?php if (wp_attachment_is('video', $attributes['thumbnail']['id'])) : ?>
            <video style="height: 100%;" src="<?= $attributes['thumbnail']['src'] ?>" muted autoplay loop></video>
        <?php else : ?>
            <img src="<?= $attributes['thumbnail']['src'] ?>" alt="">
        <?php endif; ?>
    </aside>
    <div class="flex max-md:w-full px-[3.2rem] py-[6.4rem] md:py-0 items-center md:basis-5/12 bg-[#2C2829]">
        <header class="md:pl-[11.6rem]">
            <h2 class="text-raleway tracking-[-0.04em] font-bold leading-[1.11em] text-white text-[4.8rem] md:text-[7.2rem] mb-[2.4rem]"><?= $attributes['title'] ?></h2>
            <?php if ($attributes['bttn']['link']) : ?>
                <?php get_template_part('partials/caro', 'bttn', array(
                    'text' => $attributes['bttn']['text'],
                    'link' => $attributes['bttn']['link'],
                    'class' => 'bttn-line inline-block',
                    'target' => '_blank'
                )); ?>
            <?php endif; ?>
        </header>

    </div>
</section>