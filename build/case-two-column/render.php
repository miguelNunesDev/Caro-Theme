<?php
$h3 = "text-raleway text-white font-semibold pb-[.8rem] text-[4.8rem] md:text-[2.3rem] leading-[1.21em] tracking-[-0.04em]";
$p = "text-content"
?>
<section id="case-two-column" class="mx-auto text-white container-block px-[8.33%] flex flex-wrap py-[6.4rem] md:py-[12.8rem] items-start relative" <?= get_block_wrapper_attributes(); ?>>
    <?php get_template_part('partials/caro', 'anchor', array(
        'id' => $attributes['anchor'],
    )); ?>


    <header class="pb-[6.4rem] w-full">
        <h2 class="text-white text-raleway text-[4.8rem] md:text-[7.2rem] leading-[1.16em] md:leading-[1.11em] tracking-[-0.04em] font-bold"><?= $attributes['title'] ?></h2>
    </header>
    <div class="col-1 md:basis-1/2 max-md:pb-[2.4rem] md:pr-[1.5rem]">
        <h3 class="<?= $h3 ?>">
            <?= !empty($attributes['col1']['title'])
                ? $attributes['col1']['title']
                : '&nbsp;'
            ?>
        </h3>
        <p class="<?= $p ?>"><?= $attributes['col1']['content'] ?></p>
    </div>
    <div class="col-2 md:basis-1/2 md:pl-[1.5rem]">
        <h3 class="<?= empty($attributes['col2']['title']) ? 'max-md:hidden' : '' ?> <?= $h3 ?>">
            <?= !empty($attributes['col2']['title'])
                ? $attributes['col2']['title']
                : '&nbsp;'
            ?>
        </h3>
        <p class="<?= $p ?>"><?= $attributes['col2']['content'] ?></p>
    </div>
</section>