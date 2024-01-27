<?php
?>
<section class="flex container-block flex-col md:flex-row mx-auto gap-[1.6rem] pt-[6.4rem] md:py-[13rem] items-center relative" id="case-overview" <?= get_block_wrapper_attributes(); ?>>
    <?php get_template_part('partials/caro', 'anchor', array(
        'id' => $attributes['anchor'],
    )); ?>


    <aside class="img-box md:basis-1/2">
        <img class="" src="<?= $attributes['img']['src'] ?>" alt="">
    </aside>
    <article class="text-white md:basis-1/2 font-raleway">
        <h3 class="font-raleway pr-[2rem] md:pr-0 text-[4.8rem] md:text-[7.2rem] text-white font-bold tracking-[-0.04em]"><?= $attributes['title'] ?></h3>
        <p class="text-content pt-[2.4rem] md:pr-[8.333%]"><?= $attributes['content'] ?>
        </p>
    </article>
</section>

<!-- Overview data -->

<ul class="flex flex-col md:flex-row items-center justify-between w-full text-white border-white md:border-y md:mt-[3rem]">
    <?php foreach ($attributes['details'] as $detail) : ?>
        <li class="py-[3.4rem] w-full text-center border-b md:border-b-0 md:border-r border-white last:border-b-0 last:border-r-0">
            <strong class="pt-[1.2rem] font-raleway text-primary text-[3.9rem] font-bold leading-[1.2em] tracking-[-0.04em]"><?= $detail['data'] ?></strong>
            <p class="font-raleway text-[2.8rem] font-normal tracking-[-0.04em]"><?= $detail['title'] ?></p>
        </li>
    <?php endforeach; ?>
</ul>