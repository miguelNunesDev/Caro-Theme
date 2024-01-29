<?php

get_header(); ?>

<?php if (have_posts()) {
    while (have_posts()) {
        the_post(); ?>
        <h1><?php the_title(); ?></h1>
        <?php the_content(); ?>
<?php }
} ?>

<?php $related_query = new WP_Query(array(
    'post_type' => 'case-study',
    'post__not_in' => array(get_the_ID()),
    'posts_per_page' => 4,
));
if ($related_query->have_posts()) : ?>

    <style>
        #related-case-studies .swiper-slide {
            height: auto;
        }
    </style>
    <section id="related-case-studies" class="relative block-container py-[12.8rem]">
        <aside class="absolute w-full inset-inline-0 z-[-1] top-[-10rem]">
            <svg class="w-full mx-auto h-[120rem] px-[15rem] scale-[0.75]">
                <ellipse data-offset-x='2' data-offset-y='-2' data-displace='translate' class="mouse-parallax" cx="652.5" cy="715" rx="364.5" ry="287" fill="#60371A" fill-opacity="0.5" />
                <circle id="mediumRight" data-offset-x='3' data-offset-y='-2' data-displace='translate' class="mouse-parallax" cx="1138" cy="327" r="209" fill="#60371A" fill-opacity="0.7" />
                <circle data-offset-x='-1.5' data-offset-y='-1.5' data-displace='translate' class="mouse-parallax" cx="983" cy="118" r="118" fill="#60371A" fill-opacity="0.7" />
                <circle id="big" data-offset-x='0.5' data-offset-y='-0.9' data-displace='translate' class="mouse-parallax" cx="757.5" cy="417.5" r="327.5" fill="#60371A" fill-opacity="0.7" />
                <ellipse id="smallUp" data-offset-x='-2' data-offset-y='1.5' data-displace='translate' class="mouse-parallax" cx="1084.62" cy="122.409" rx="82.7354" ry="94.5" transform="rotate(28.2588 1084.62 122.409)" fill="#EE8B30" />
                <ellipse id="mediumBot" data-offset-x='1.5' data-offset-y='-2' data-displace='translate' class="mouse-parallax" cx="262.5" cy="427.5" rx="262.5" ry="150.5" fill="#CC9123" />
                <circle data-offset-x='1' data-offset-y='-0.8' data-displace='translate' class="mouse-parallax" cx="506.5" cy="257.5" r="197.5" fill="#60371A" fill-opacity="0.4" />
            </svg>
            <div class="absolute inset-0 backdrop-blur-3xl"></div>
        </aside>
        <header class="pl-[8.3%] pb-[6.6rem]">
            <h2 class="text-white text-raleway text-[7.2rem] font-semibold tracking-[-0.04em] leading-[1.11em]">.Browse other case studies</h2>
        </header>
        <div class="swiper" style="padding-inline: 8.3%;">
            <div class="swiper-wrapper">
                <?php
                $card = "flex flex-col overflow-hidden rounded-[1.2rem] border border-[#535150] h-full justify-between";
                $gradient = 'background: linear-gradient(74deg, rgba(34, 30, 30, 0.50) 21.29%, rgba(83, 81, 80, 0.50) 80.09%);';
                while ($related_query->have_posts()) :
                    $related_query->the_post();
                    $divide = strlen(get_post_meta(get_the_ID(), 'case_title', true)) < 20 ? 'columns-2' : '';
                ?>
                    <article class="img-box swiper-slide px-[.8rem] md:max-w-none max-w-[64vw] comp-<?= get_post_field('post_name', get_the_ID()) ?>">
                        <div class="<?= $card ?>" style="<?= $gradient ?>">

                            <header class="pt-[6.4rem] px-[3.2rem] md:px-[6.4rem]">
                                <?php get_template_part('partials/caro', 'pill', array(
                                    'text' => 'Case Study',
                                )); ?>
                                <h3 class="<?= $divide ?> pb-[1rem] pt-[.8rem] text-white text-[3.2rem] md:text-[4.8rem] leading-[1.16em] tracking-[-0.04em] font-bold"><?= get_post_meta(get_the_ID(), 'case_title', true) ?></h3>
                                <p class="pt-[.8rem] text-[#D2D1D0] text-real-text text-[1.8rem] leading-[1.2em] font-normal"><?= get_the_title(); ?></p>
                            </header>

                            <div class=" py-[2.4rem] md:pt-[2.4rem] md:pb-[4.4rem] px-[2rem] md:px-[6.4rem] max-md:items-center max-md:justify-between flex md:flex-wrap gap-0 md:gap-[2.4rem]">
                                <?php get_template_part('partials/caro', 'bttn', array(
                                    'text' => 'Take a peek',
                                    'link' => get_permalink(),
                                    'class' => 'bttn-fill inline-block'
                                )); ?>
                                <br class="md:hidden">
                                <?php if (get_post_meta(get_the_ID(), 'case_link', true)) : ?>
                                    <?php get_template_part('partials/caro', 'bttn', array(
                                        'text' => 'Live App',
                                        'link' => get_post_meta(get_the_ID(), 'case_link', true),
                                        'class' => 'bttn-line inline-block',
                                        'target' => '_blank'
                                    )); ?>
                                <?php endif; ?>
                            </div>

                            <footer class="relative h-[18.7rem]">
                                <figure class="absolute inset-0 img-cover">
                                    <img class="" src="<?= wp_get_attachment_image_url(get_post_meta(get_the_ID(), 'case_background', true), 'full') ?>" alt="">
                                </figure>
                                <aside class="flex relative items-center justify-center px-[3.2rem] w-full h-full">
                                    <img class="max-w-[18rem] max-h-[9rem] md:max-h-[13rem] object-contain" src="<?= wp_get_attachment_image_url(get_post_meta(get_the_ID(), 'case_logo', true)) ?>" alt="">
                                    <img class="hidden md:inline max-h-[16rem] object-contain" src="<?= wp_get_attachment_image_url(get_post_meta(get_the_ID(), 'case_mockup', true)) ?>" alt="">
                                </aside>
                            </footer>
                        </div>

                    </article>
                <?php
                endwhile; ?>
            </div>
    </section>
<?php
    wp_reset_postdata();
endif;
?>
</section>
<script>
    var relatedSwiper = new Swiper('#related-case-studies .swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        breakpoints: {
            768: {
                slidesPerView: 3,
            }
        }
    });
</script>
<?php get_footer();
