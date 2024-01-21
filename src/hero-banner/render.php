<aside class="absolute top-0 w-full inset-inline-0 z-[-1] pb-[15rem]">
    <svg class="w-full mx-auto h-[120rem] px-[15rem] pt-[15rem]">
        <ellipse data-offset-x="3" data-offset-y="-1" data-displace="translate" class="mouse-parallax" cx="652.5" cy="715" rx="364.5" ry="287" fill="#60371A" fill-opacity="0.5" data-observable="0" data-position="saved"></ellipse>
        <circle id="mediumRight" data-offset-x="-3" data-offset-y="-1" data-displace="translate" class="mouse-parallax" cx="1138" cy="327" r="209" fill="#60371A" fill-opacity="0.7"></circle>
        <circle data-offset-x="1" data-offset-y="1.5" data-displace="translate" class="mouse-parallax" cx="983" cy="118" r="118" fill="#60371A" fill-opacity="0.7"></circle>
        <circle id="big" data-offset-x="1.5" data-offset-y="-0.9" data-displace="translate" class="mouse-parallax" cx="757.5" cy="417.5" r="327.5" fill="#60371A" fill-opacity="0.7"></circle>
        <ellipse id="smallUp" data-offset-x="2" data-offset-y="1" data-displace="translate" class="mouse-parallax" cx="1084.62" cy="122.409" rx="82.7354" ry="94.5" fill="#EE8B30"></ellipse>
        <ellipse id="mediumBot" data-offset-x="-1" data-offset-y="-2" data-displace="translate" class="mouse-parallax" cx="262.5" cy="427.5" rx="262.5" ry="150.5" fill="#CC9123"></ellipse>
        <circle data-offset-x="0.25" data-offset-y="-0.2" data-displace="translate" class="mouse-parallax" cx="506.5" cy="257.5" r="197.5" fill="#60371A" fill-opacity="0.4"></circle>
    </svg>
    <div class="absolute inset-0 backdrop-blur-3xl"></div>
</aside>

<?php
$main_lg = 'mx-auto text-center container-block text-white  pt-[20.4rem] pb-[12rem] relative isolate';
$preload = 'pointer-events-none opacity-0 opacity-100'
?>

<section class="relative" <?= get_block_wrapper_attributes() ?> id="hero-banner" data-speed="1000">
    <!-- <aside class="absolute inset-0 z-10 bg-repeat mix-blend-multiply" style="background: url('<?= get_template_directory_uri() . '/img/layout/header-banner/noise.png' ?>'"></aside>  -->
    <div class="<?= $main_lg ?>">
        <header class="relative z-10 flex flex-column flex-wrap gap-[1.6rem] justify-center">
            <h1 class="font-open-sans font-extrabold text-[6rem] leading-[1.2em] md:text-[10rem] md:leading-[1.5em] md:basis-8/12 max-sm:text-center">
                <span class="relative inline-block text-left rotator h-[7.1rem] md:h-[11.5rem] transition-[width] duration-800">
                    <?php $first = true; ?>
                    <?php foreach ($attributes['rotators'] as $rotator) : ?>
                        <b class="absolute right-0 top-0 <?= $first ? '' : 'opacity-0' ?> transition-opacity duration-800"><?= $rotator ?></b>
                        <?php $first = false; ?>
                    <?php endforeach; ?>
                </span>
                <span class="ml-[-1rem] md:ml-[-3rem]">
                    , <br class="md:hidden"><?= $attributes['title'] ?>
                </span>
            </h1>
            <p class="text-content md:basis-6/12"><?= $attributes['content'] ?></p>
            <div class="flex gap-[1.5rem] pt-[2.4rem] basis-6/12 flex-center">
                <?php foreach ($attributes['socials'] as $social) : ?>
                    <a target="_blank" href="<?= $social['url'] ?>">
                        <img class="" src="<?= $social["icon"] ?>" alt="">
                    </a>
                <?php endforeach; ?>
            </div>
        </header>
    </div>
</section>