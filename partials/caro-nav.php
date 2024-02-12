<?php function renderNav($menuItems)
{
    $args = array(
        'post_type'      => 'global-content',
        'posts_per_page' => 1,
    );
    $global_content = get_posts($args)[0];
    $pdf_id = get_post_meta($global_content->ID, 'cv_pdf', true);

    $menu_sm = 'group 
    transition-[left] duration-700
    max-lg:group-[.open]:left-0 max-lg:left-[100%]
    max-lg:fixed  max-lg:top-0 max-lg:h-[100vh] max-lg:h-[100svh]  max-lg:w-[100vw]   
    max-lg:bg-[#2C2829]
    max-lg:flex-col max-lg:justify-center';

    $menu_lg = 'relative items-center list-none
    flex flex-wrap md:gap-[2.4rem] 
    text-white
    px-[3.2rem]
    
    ';
?>
    <style>
        #caro-nav:not(.open) {
            overflow: hidden;
        }

        .scroll-up #caro-nav {
            top: 0;
        }

        .home.scroll-top #caro-nav,
        .case-studies.scroll-top #caro-nav {
            background: none;
            border: none;
        }

        .scroll-top #caro-nav {
            position: absolute;
            top: 0;

        }
        #caro-nav.open {
            top: 0 !important;
            z-index: 110;
        }
        #caro-nav {
            position: fixed;
            top: -10rem;
            left: 0;
            border-bottom: .1rem solid #535150;
            background: linear-gradient(92deg, rgba(69, 64, 66, 0.30) -0.45%, rgba(42, 41, 40, 0.30) 106.5%);
            backdrop-filter: blur(10px);
        }
    </style>
    <nav class="<?= $menu_sm . ' ' . $menu_lg ?>" id="nav-menu">
        <?php foreach ($menuItems as $item) : ?>
            <li class="transition max-lg:border-t max-lg:w-full max-lg:first:border-t-0 max-lg:text-center max-lg:border-t-white max-lg:py-[2.4rem]">
                <?php get_template_part('partials/caro', 'bttn', array(
                    'text' => $item->title,
                    'link' => $item->url,
                    'class' => 'bttn hover:text-primary max-lg:text-[3.3rem] tracking-[-0.02em] block max-lg:font-normal'
                )); ?>
            </li>
        <?php endforeach; ?>
        <li class="max-lg:absolute max-lg:bottom-[6.2rem] max-lg:inset-x-[3.2rem]">
            <?php get_template_part('partials/caro', 'bttn', array(
                'text' => 'CV/Resume',
                'text-mobile' => 'Download CV/Resume',
                'link' => wp_get_attachment_url($pdf_id),
                'class' => 'bttn-line max-lg:block max-lg:text-center max-md:text-[1.8rem] max-md:py-[2.4rem]',
                'target' => '_blank',
                'download' => 'Carolina_di_Lello_Resume_2023'
            )); ?>
        </li>
    </nav>
<?php } ?>

<?php $menuItems = wp_get_nav_menu_items(wp_get_nav_menus()[0]->term_id); ?>
<header class="transition-all duration-500 px-[3.2rem] py-[2.4rem] absolute top-0 inset-x-0 z-50 isolate group" id="caro-nav">
    <div class="flex flex-wrap items-center justify-between">

        <a href="<?= get_home_url() ?>" class="w-[11.3rem] z-10 relative">
            <img class="w-full" src="<?= get_template_directory_uri() . '/img/layout/caro-nav/logo.svg' ?>" alt="">
        </a>

        <button class="relative lg:hidden img-box w-[3.2rem] h-[3.2rem] z-10" id="nav-bttn">
            <img id="icon-menu" class="absolute top-0 max-lg:group-[.open]:hidden" src="<?= get_template_directory_uri() . '/img/layout/caro-nav/nav-menu.svg' ?>" alt="">
            <img id="icon-close" class="absolute top-0 max-lg:hidden max-lg:group-[.open]:block" src="<?= get_template_directory_uri() . '/img/layout/caro-nav/nav-close.svg' ?>" alt="">
        </button>
        <?php renderNav($menuItems) ?>
    </div>
</header>