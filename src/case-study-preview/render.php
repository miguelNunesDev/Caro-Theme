<?php
$menu_sm = 'justify-between px-[3.2rem]';
$menu_lg = 'flex flex-wrap lg:justify-between align-middle
    lg:px-[12.8rem] py-[3.2rem] 
    border-y-[.1rem] border-white backdrop-blur-md 
    sticky top-0 z-20
    transition-all duration-500';
?>
<style>
    .home.scroll-up #case-preview-menu {
        opacity: 0;
    }

    @media only screen and (min-width : 0) and (max-width : 960px) {

        #case-preview-menu:not(.open) #link-wrapper {
            max-height: 0;
            padding: 0;
        }

        #case-preview-menu.open #arrow {
            scale: -1;
        }
    }

    @media only screen and (min-width : 961px) {}
</style>

<menu class="<?= $menu_sm . ' ' . $menu_lg ?>" id="case-preview-menu">
    <header id="menu-header" class="w-[80%]  lg:w-[43.3rem]">
        <figure class="img-box">
            <img class="" src="<?= get_template_directory_uri() . '/img/layout/case-study-preview/title.png' ?>" alt="">
        </figure>
    </header>
    <button id="arrow" class="md:hidden">
        <img class="" src="<?= get_template_directory_uri() . '/img/layout/case-study-preview/drop-arrow.svg' ?>" alt="">
    </button>
    <ul id="link-wrapper" class="max-lg:overflow-hidden relative max-lg:top-[3.2rem] max-lg:pb-[3.2rem] max-lg:gap-[3.2rem] flex lg:flex-wrap w-[90rem] max-lg:w-full flex-col lg:flex-row justify-between items-center transition-all duration-700 max-lg:max-h-[50rem]">
        <?php $link_css = "text-[2.3rem] leading-[1.21em] font-light lg:font-normal lg:text-[1.6rem] lg:leading-[1.18em] font-open-sans text-white " ?>
        <?php
        foreach ($attributes['navItems'] as $id) :
            $post = get_post($id);
            $post_type_slug = $post->post_name;
        ?>
            <li>
                <a class="<?= $link_css ?>" href="#anchor-<?= $post_type_slug ?>">
                    <?= get_the_title($id) ?>
                </a>
            </li>
        <?php endforeach; ?>
        <li>
            <a class="<?= $link_css ?>" href="#anchor-fun-projects">
                Fun projects
            </a>
        </li>
        <li>
            <a class="<?= $link_css ?>" href="#anchor-testimonies">
                Testimonies
            </a>
        </li>
    </ul>
</menu>

<section id="case-study-preview" class="relative pb-[14rem]" <?= get_block_wrapper_attributes(); ?>>
    <!-- BG -->
    <aside class="absolute w-full inset-inline-0 z-[-1] top-1/2">
        <svg class="w-full mx-auto h-[120rem] px-[15rem] pt-[15rem]">
            <ellipse data-offset-x='3' data-offset-y='-3' data-displace='translate' class="mouse-parallax" cx="652.5" cy="715" rx="364.5" ry="287" fill="#60371A" fill-opacity="0.5" />
            <circle id="mediumRight" data-offset-x='4' data-offset-y='-1.4' data-displace='translate' class="mouse-parallax" cx="1138" cy="327" r="209" fill="#60371A" fill-opacity="0.7" />
            <circle data-offset-x='-3' data-offset-y='-2' data-displace='translate' class="mouse-parallax" cx="983" cy="118" r="118" fill="#60371A" fill-opacity="0.7" />
            <circle id="big" data-offset-x='1.5' data-offset-y='-0.9' data-displace='translate' class="mouse-parallax" cx="757.5" cy="417.5" r="327.5" fill="#60371A" fill-opacity="0.7" />
            <ellipse id="smallUp" data-offset-x='4' data-offset-y='2' data-displace='translate' class="mouse-parallax" cx="1084.62" cy="122.409" rx="82.7354" ry="94.5" transform="rotate(28.2588 1084.62 122.409)" fill="#EE8B30" />
            <ellipse id="mediumBot" data-offset-x='-2.5' data-offset-y='-3' data-displace='translate' class="mouse-parallax" cx="262.5" cy="427.5" rx="262.5" ry="150.5" fill="#CC9123" />
            <circle data-offset-x='0.25' data-offset-y='-0.2' data-displace='translate' class="mouse-parallax" cx="506.5" cy="257.5" r="197.5" fill="#60371A" fill-opacity="0.4" />
        </svg>
        <div class="absolute inset-0 backdrop-blur-3xl"></div>
    </aside>
    <!-- BG -->
    <div class="mx-auto container-block">
        <?php foreach ($attributes['previewItems'] as $id) :
            $post = get_post($id);
            $post_type_slug = $post->post_name; ?>
            <article id="<?= $post_type_slug ?>" class="md:px-[8.3%] mt-[12rem] md:mt-[15.5rem] relative comp-<?= get_post_field('post_name', $id) ?>">
                <?php get_template_part('partials/caro', 'anchor', array(
                    'id' => $post_type_slug,
                )); ?>
            
                <div class="md:px-[8.3%] flex flex-wrap justify-between h-full last:pb-0 pb-[5.6rem] md:pb-[4.8rem]">
                    <header class="md:basis-1/2 text-white mb-[3.4rem] pr-[8.3%]">
                        <?php get_template_part('partials/caro', 'pill', array(
                            'text' => 'Case Study'
                        )); ?>
                        <h2 class="font-raleway
                     font-bold text-[4.8em] md:text-[6em] leading-[1.2em] tracking-[-0.04em] my-[1.2rem]"><?= get_post_meta($id, 'case_title', true) ?></h2>

                        <p class="text-[#D2D1D0] text-[2rem] leading-[1.2em] font-normal"><?= '.' . get_the_title($id) ?></p>
                    </header>
                    <aside class="md:basis-1/2">
                        <p class="text-content"><?= get_post_meta($id, 'case_summary', true) ?></p>
                        <div class="flex flex-wrap text-[1.4em] leading-[1.21em] font-raleway font-normal gap-[2.4rem] mt-[2.4rem]">
                            <?php get_template_part('partials/caro', 'bttn', array(
                                'text' => 'Take a peek',
                                'link' => get_the_permalink($id)
                            )); ?>
                            <?php if (get_post_meta($id, 'case_link', true)) : ?>
                                <?php get_template_part('partials/caro', 'bttn', array(
                                    'text' => 'Live website',
                                    'link' => get_post_meta($id, 'case_link', true),
                                    'class' => 'bttn-line',
                                    'target' => '_blank'
                                )); ?>
                            <?php endif; ?>
                        </div>
                    </aside>
                </div>
                <div class="relative isolate h-[42.8rem] md:h-[34rem] overflow-hidden md:rounded-[1.2rem] mobile-full-width ">
                    <figure class="max-md:w-full max-lg:h-full absolute inset-0 z-[-1] img-box drop-shadow-md">
                        <img class="mobile-cover" src="<?= wp_get_attachment_image_url(get_post_meta($id, 'case_background', true), 'full') ?>" alt="">
                    </figure>
                    <section class="flex flex-wrap items-center justify-around h-full">
                        <figure class="flex items-center max-md:mt-[6.4rem] img-box-auto md:basis-1/2 max-md:mx-auto md:pl-[7.4rem] max-w-[22rem] max-h-[10rem] md:max-w-[40rem]">
                            <img class="object-contain" src="<?= wp_get_attachment_image_url(get_post_meta($id, 'case_logo', true)) ?>" alt="">
                        </figure>
                        <figure class="h-[31rem] md:h-full img-box md:basis-1/2 max-md:pb-[1.5rem]">
                            <img class="object-contain" src="<?= wp_get_attachment_image_url(get_post_meta($id, 'case_mockup', true)) ?>" alt="">
                        </figure>
                    </section>

                </div>

            </article>
        <?php endforeach; ?>
    </div>

</section>