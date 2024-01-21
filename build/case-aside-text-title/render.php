<style>
    #case-aside-text-title ul {
        list-style: disc;
    }

    #case-aside-text-title ul li {
        margin-left: 2.3rem;
        font-size: 1.8rem;
        list-style: 1.2em;
    }
</style>

<section id="case-aside-text-title" class="text-white mx-auto flex flex-wrap md:py-[12.8rem] container-block md:px-[8.333%] px-[3.2rem] py-[6.4rem] items-center relative" <?= get_block_wrapper_attributes(); ?>>
    <?php get_template_part('partials/caro', 'anchor', array(
        'id' => $attributes['anchor'],
    )); ?>
    <header class="md:basis-1/2 pb-[2.8rem] md:pb-0">
        <h2 class="font-raleway leading-[1.2em] text-[4.8rem] md:text-[7.2rem] tracking-[-0.24rem] font-bold"><?= $attributes['title'] ?></h2>
    </header>
    <article class="md:basis-6/12">
        <p class="text-content"><?= $attributes['content'] ?></p>
    </article>
</section>