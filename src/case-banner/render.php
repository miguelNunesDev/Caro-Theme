<?php
$media_css = 'absolute inset-0 transition-opacity w-full h-full object-cover';
?>
<style>
    body.scroll-up #case-banner-menu.floater {
        opacity: 0;
    }

    #case-banner-menu.floater {
        position: fixed;
        top: 0;
    }

    .scroll-top #case-banner-menu.floater{
        opacity: 0;
    }

    .is-desktop-preview #case-banner-menu.floater {
        display: none;
    }

    @media only screen and (min-width : 0) and (max-width : 960px) {

        #case-banner-menu:not(.open) #link-wrapper {
            max-height: 0;
            padding: 0;
        }

        #case-banner-menu.open #arrow {
            scale: -1;
        }
    }


    @media only screen and (min-width : 961px) {}
</style>
<section id="case-banner" <?= get_block_wrapper_attributes(); ?>>
    <div class="relative w-full h-[61.1rem] md:h-[69rem]">
        <figure class="absolute inset-0">
            <?php $bgId = $attributes['bg']['id'];
            if ($bgId) : ?>
                <?php if (wp_attachment_is('video', $bgId)) : ?>
                    <video class="<?= $media_css ?>" src="<?= wp_get_attachment_url($bgId) ?>" muted autoplay loop></video>
                <?php else : ?>
                    <img class="<?= $media_css ?>" src="<?= wp_get_attachment_image_url($bgId) ?>" alt="">
                <?php endif; ?>
            <?php endif; ?>
        </figure>
        <?php $card = "text-raleway p-[3.2rem] md:w-[68rem] md:px-[6.8rem] md:p-[6.4rem]  overflow-hidden rounded-[1.2rem] border border-[#535150]  backdrop-blur-md text-white "; ?>
        <div class="flex flex-wrap items-center h-full mx-auto container-block">
            <header class="max-md:mx-auto <?= $card ?>" style="background: linear-gradient(74deg, rgba(34, 30, 30, 0.50) 21.29%, rgba(83, 81, 80, 0.50) 80.09%);box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);">
                <?php get_template_part('partials/caro', 'pill', array(
                    'text' => 'Case Study',
                    'class' => 'w-[12rem] block text-center text-[1.4rem]',
                    'bg' => 'bg-[#EDEDEC]',
                    'text-color' => 'text-[#2A2928]'
                )); ?>
                <h2 class="font-raleway pt-[2.4rem] md:pt-[2.4rem] text-white font-bold text-[4.2rem] md:text-[5.8rem] leading-[1.2em] tracking-[-0.04em]"><?= get_post_meta(get_the_ID(), 'case_title', true) ?></h2>
                <small class="font-normal text-[3.2rem] md:text-[4.8rem] tracking-[-0.04em] leading-[1.16em] "><?= get_the_title() ?></small>
                <ul class="flex flex-wrap gap-[1.2rem] md:gap-[1.75rem] pt-[2.5rem]">
                    <?php foreach ($attributes['tools'] as $icon) : ?>
                        <li>
                            <img class="max-md:w-[3.2rem]" src="<?= $icon ?>" alt="">
                        </li>
                    <?php endforeach; ?>
                </ul>
            </header>
        </div>
    </div>

</section>


<!-- Case banner MENU  -->
<?php
$menu_sm = 'justify-between px-[3.2rem] w-full';
$menu_lg = 'flex flex-wrap lg:justify-between align-middle
    lg:px-[12.8rem] py-[3.2rem] 
    border-y-[.1rem] border-white backdrop-blur-md 
    relative z-20
    transition-all duration-500';
?>

<style>

</style>

<menu class="floater <?= $menu_sm . ' ' . $menu_lg ?>" id="case-banner-menu">
    <header id="menu-header" class="w-[80%]  lg:w-[43.3rem]">
        <figure class="img-box">
            <img class="" src="<?= get_template_directory_uri() . '/img/layout/case-study-preview/title.png' ?>" alt="">
        </figure>
    </header>
    <button id="arrow" class="md:hidden">
        <img class="" src="<?= get_template_directory_uri() . '/img/layout/case-study-preview/drop-arrow.svg' ?>" alt="">
    </button>
    <ul id="link-wrapper" class="relative flex justify-between items-center
    max-lg:overflow-hidden max-lg:top-[3.2rem] max-lg:pb-[3.2rem] max-lg:gap-[3.2rem] max-lg:w-full flex-col max-lg:max-h-[50rem]
    lg:flex-wrap lg:flex-row   transition-all duration-700 lg:gap-[8.9rem]">

        <?php $link_css = "text-[2.3rem] leading-[1.21em] font-light lg:font-normal lg:text-[1.6rem] lg:leading-[1.18em] font-open-sans text-white" ?>

        <?php foreach ($attributes['menu'] as $li) : ?>
            <li class="hover:opacity-50">
                <a class="<?= $link_css ?>" href="<?= $li['url'] ?>">
                    <?= $li['text'] ?>
                </a>
            </li>
        <?php endforeach; ?>
    </ul>
</menu>
<menu class="static <?= $menu_sm . ' ' . $menu_lg ?>" id="case-banner-menu">
    <header id="menu-header" class="w-[80%]  lg:w-[43.3rem]">
        <figure class="img-box">
            <img class="" src="<?= get_template_directory_uri() . '/img/layout/case-study-preview/title.png' ?>" alt="">
        </figure>
    </header>
    <button id="arrow" class="md:hidden">
        <img class="" src="<?= get_template_directory_uri() . '/img/layout/case-study-preview/drop-arrow.svg' ?>" alt="">
    </button>
    <ul id="link-wrapper" class="relative flex justify-between items-center
    max-lg:overflow-hidden max-lg:top-[3.2rem] max-lg:pb-[3.2rem] max-lg:gap-[3.2rem] max-lg:w-full flex-col max-lg:max-h-[50rem]
    lg:flex-wrap lg:flex-row   transition-all duration-700 lg:gap-[8.9rem]">

        <?php $link_css = "text-[2.3rem] leading-[1.21em] font-light lg:font-normal lg:text-[1.6rem] lg:leading-[1.18em] font-open-sans text-white" ?>

        <?php foreach ($attributes['menu'] as $li) : ?>
            <li class="hover:opacity-50">
                <a class="<?= $link_css ?>" href="<?= $li['url'] ?>">
                    <?= $li['text'] ?>
                </a>
            </li>
        <?php endforeach; ?>
    </ul>
</menu>