<?php
$card = "overflow-hidden rounded-[1.2rem] border border-[#535150] backdrop-blur-md";
$gradient = "background: linear-gradient(74deg, rgba(34, 30, 30, 0.50) 21.29%, rgba(83, 81, 80, 0.50) 80.09%); box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);";
?>
<article id="<?= $args['id'] ?>" class="<?= $card ?> flex flex-col w-full md:w-[57.2rem] md:h-[83rem] md:px-[6.4rem] md:pb-[12.6rem]" style="<?= $gradient ?>">
    <header class="pb-[2.4rem] relative">
        <figure class="img-cover md:w-[30em] md:h-[25rem] rounded-[.4rem] ml-auto overflow-hidden">
            <img src="<?= $args['data']['img']['src'] ?>" alt="">
        </figure>


        <div class="absolute top-[50%] translate-y-[-50%] left-0">
            <?php get_template_part('partials/caro', 'pill', array(
                'text' => 'User persona',
                'class' => ''
            )); ?>
            <h2 class="font-bold font-raleway text-[6rem] leading-[1.2em] tracking-[-0.04em] w-[3.34rem]"><?= $args['data']['title'] ?></h2>
        </div>


    </header>
    <div>
        <p class="pb-[.4rem] text-[3.3rem] tracking-[-0.04rem] leading-[1.21em] font-bold font-raleway"><?= $args['data']['name'] ?></p>

        <ul class="flex flex-col gap-[.4rem]">
            <?php foreach ($args['data']['details'] as $detail) : ?>
                <li class="font-open-sans  leading-[1.21em]">
                    <strong class="font-regular text-[1.4rem]"><?= $detail['title'] ?></strong>
                    <span class="pl-[.15rem] text-[1.2rem] font-light"> <?= $detail['content'] ?></span>
                </li>
            <?php endforeach; ?>
        </ul>
        <p class="font-open-sans font-light pt-[2.4rem] text-[1.8rem] leading-[1.2em]"><?= $args['data']['content'] ?></p>
        <ul class="flex flex-wrap gap-[.8rem] pt-[2.4rem]">
            <?php foreach ($args['data']['keywords'] as $keyword) : ?>
                <?php get_template_part('partials/caro', 'pill', array(
                    'text' => $keyword,
                )); ?>
            <?php endforeach; ?>
        </ul>
    </div>
</article>