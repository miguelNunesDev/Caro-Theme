<section class="pt-[14rem] pb-[12rem] bg-[#2A2928] relative" <?= get_block_wrapper_attributes(); ?>>
    <?php get_template_part('partials/caro', 'anchor', array(
        'id' => $attributes['anchor'],
    )); ?>
    <h3 class="ml-[8.33%] text-raleway  max-w-[32rem] md:max-w-none text-[4.8rem] md:text-[7.2rem] leading-[1.11em] tracking-[-0.04em] font-bold text-white"><?= $attributes['title'] ?></h3>
    <div class="w-full overflow-x-scroll md:overflow-hidden mx-auto md:pt-[4.6rem] py-[4.6rem]">
        <picture class=" w-[128.3rem] img-box md:w-[90%] block mx-auto">
            <source media="(max-width: 760px)" srcset="<?= $attributes['mobile']['src'] ?>" />
            <source media="(min-width: 761px)" srcset="<?= $attributes['desktop']['src'] ?>" />
            <img src="<?= $attributes['mobile']['src'] ?>" alt="" />
        </picture>
    </div>
</section>