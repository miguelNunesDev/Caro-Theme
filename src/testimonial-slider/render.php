<style>
    .reverse header {
        order: 1;
    }


    .reverse aside {
        top: 0;
        padding-top: 0;
    }

    #testimonies aside svg {
        scale: 0.75;
    }

    #testimonies .swiper-slide {
        height: auto;
    }

    @media only screen and (min-width : 0) and (max-width : 960px) {
        #testimonies header {
            order: -1;
        }
    }

    .home #testimonies {
        padding-top: 14.8rem;
    }

    @media only screen and (min-width : 961px) {}
</style>
<div <?= get_block_wrapper_attributes(); ?>>
    <section id="testimonies" class="max-md:overflow-hidden relative pt-[7.4rem] pb-[12rem] isolate">
        <?php get_template_part('partials/caro', 'anchor', array(
            'id' => 'testimonies',
            'offset' => 'top-0'
        )); ?>
        <aside class="absolute w-full inset-inline-0 z-[-1] top-[-15rem] overflow-hidden max-h-[135rem]">
            <svg class="w-full mx-auto h-[120rem] px-[15rem] pt-[15rem]">
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
        <div class="justify-between mx-auto text-white container-block">
            <div class="flex flex-wrap md:px-[8.3%] justify-between">
                <header class="flex flex-col items-start justify-center md:basis-5/12">
                    <?php get_template_part('partials/caro', 'pill', array(
                        'text' => 'Testimonies'
                    )); ?>
                    <h2 class="font-raleway font-bold text-[4.8rem] md:text-[10em] leading-[1em] tracking-[-0.04em] mt-[3.2rem]">
                        <?= $attributes['title'] ?>
                    </h2>
                </header>
                <article class="w-full  md:w-[50%] md:basis-6/12 max-sm:pt-[3.2rem]">
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <?php
                            $card = "flex flex-col w-[53.2rem] p-[3.2rem] md:p-[6.4rem]  overflow-hidden rounded-[1.2rem] border border-[#535150]";
                            $gradient = "background: linear-gradient(74deg, rgba(34, 30, 30, 0.50) 21.29%, rgba(83, 81, 80, 0.50) 80.09%)";
                            foreach ($attributes['testimonials'] as $id) : ?>
                                <div class="flex items-center swiper-slide backdrop-blur-md <?= $card ?> " style="<?= $gradient ?> ">
                                    <div class="font-raleway font-extralight text-[1.8rem] md:text-[2.8rem] tracking-[-0.02em] leading-[1.21em]">
                                        <?php
                                        $raw = get_post_field('post_content', $id);
                                        $content = apply_filters('the_content', $raw);
                                        echo $content
                                        ?>
                                    </div>
                                    <footer class="pt-[2.4rem] flex flex-col gap-[0.2rem] text-right font-open-sans  ">
                                        <h3 class="font-semibold text-[1.8rem] pb-[.4rem] leading-[1.2em]">
                                            <?= get_the_title($id) ?>
                                        </h3>
                                        <p class="text-[1.6rem] leading-[1.2em]"><?= get_post_meta($id, 'testimonial_job', true) ?></p>
                                        <p class="text-[1.6rem] leading-[1.2em]"><?= get_post_meta($id, 'testimonial_company', true) ?></p>
                                    </footer>
                                </div>
                            <?php endforeach; ?>
                        </div>
                        <!-- If we need pagination -->
                        <div class="swiper-pagination"></div>
                    </div>

                </article>
            </div>

        </div>

    </section>
</div>


<script>
    var testimonialSwiper = new Swiper('.swiper', {
        effect: "cards",
        grabCursor: true,
        loop: true,
        cardsEffect: {
            rotate: false,
            prev: {
                rotate: false,
                translate: [-100, 0, -200],
            }

        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
</script>