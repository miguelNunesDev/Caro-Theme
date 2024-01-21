<style>
    .case-study #fun-projects {
        padding-top: 0 !important;
    }

    .home #fun-projects {
        position: relative;
        z-index: 1;
    }

    @media only screen and (min-width : 961px) {
        .home #fun-projects {
            margin-bottom: 14.8rem;
        }
    }

    @media only screen and (min-width : 0) and (max-width : 960px) {
        .home #fun-projects {
            margin-bottom: 14.6rem;
        }
    }
</style>
<section id="ilustration-preview" class="w-full mx-auto relative z-[1]" <?= get_block_wrapper_attributes(); ?> id="fun-projects">
    <?php get_template_part('partials/caro', 'anchor', array(
        'id' => 'fun-projects',
    )); ?>
    
    
    <div class="flex flex-wrap">
        <aside class="md:basis-7/12 md:h-[67.7rem] max-sm:flex-col flex flex-nowrap max-sm:order-1 max-sm:w-full">
            <?php foreach ($attributes['illustrations'] as $id) : ?>
                <figure class="max-sm:w-full max-sm:h-[8.3rem] md:h-full md:basis-1/6 md:hover:basis-6/6 min-w-0 md:hover:min-w-[78.rem] transition-all duration-1000">
                    <?php
                    $img_lg = 'object-cover w-full h-full';
                    echo get_the_post_thumbnail($id, 'full', array('data-id' => $id, 'class' => 'object-cover w-full h-full'));
                    ?>
                </figure>
            <?php endforeach; ?>
        </aside>
        <article class="pt-[12rem] pb-[6.4rem] md:basis-5/12 bg-[#2A2928] grid content-center relative max-sm:w-full">
            <header class="transition-all max-sm:max-w-[30rem] max-sm:px-[3.2rem] md:pl-[11.6rem] md:max-w-[36rem] text-white">
                <?php get_template_part('partials/caro', 'pill', array(
                    'text' => 'Graphic Design',
                )); ?>
                <h2 class="font-raleway font-extrabold text-[4.8rem] md:text-[10em] leading-[1.16em] md:leading-[1em] mt-[1.2rem] tracking-[-0.04em]"><?= $attributes['title'] ?></h2>
                <?php get_template_part('partials/caro', 'bttn', array(
                    'text' => 'View All',
                    'link' => 'https://www.behance.net/carodilello',
                    'class' => 'bttn-fill mt-[3.2rem] inline-block',
                    'target' => '_blank',
                )); ?>
            </header>
        </article>
    </div>

</section>