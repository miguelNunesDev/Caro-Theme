<style>
    body:not(.scroll-down) #back-top,
    .scroll-top #back-top {
        opacity: 0;
        pointer-events: none;
    }
</style>
<section id="contact-block" class="mx-auto container-block flex flex-wrap px-[3.2rem] md:px-[8.3%] py-[6rem] text-white justify-between md:pt-[15rem]" data-speed="1000">
    <article class="md:basis-5/12">
        <h3 class="font-raleway font-bold text-[4.8em] md:text-[6em] leading-[1.2em] tracking-[-0.024em] pb-[6.4rem]">
            <span class="mr-[1rem] md:mr-[1rem]"><?= $attributes['title'] ?></span>
            <span class="relative inline-block text-left rotator h-[4.4rem] md:h-[5.5rem] transition-[width] duration-800">
                <?php $first = true; ?>
                <?php foreach ($attributes['rotators'] as $rotator) : ?>
                    <b class="absolute right-0 top-0 <?= $first ? '' : 'opacity-0' ?> transition-opacity duration-800"><?= $rotator ?></b>
                    <?php $first = false; ?>
                <?php endforeach; ?>
            </span>
        </h3>
        <ul class="border-t border-white font-open-sans text-[2em] leading-[1.2em] font-light ">
            <?php
            foreach ($attributes['socials'] as $social) : ?>
                <li class="border-b border-white group">
                    <a class="py-[2.4rem] pl-[3.2rem] flex relative items-center" target="_blank" href="<?= $social['url'] ?>">
                        <img class="w-[3.2rem] group-hover:ml-[1.5rem] transition-all" src="<?= $social['icon'] ?>" alt="">
                        <p class="pl-[2rem]"><?= $social['text'] ?></p>
                        <img class="absolute right-0 -translate-y-1/2 top-1/2 w-[3.2rem]" src="<?= get_template_directory_uri() . '/img/layout/contact-block/arrow-diagonal.svg' ?>" alt="">
                    </a>
                </li>
            <?php endforeach; ?>
        </ul>
    </article>
    <header class="grid max-sm:hidden basis-6/12 place-content-center">
        <h2 class="font-real-text font-extrabold text-[15em] leading-[1em] tracking-[-0.06em] text-right">
            <?= get_the_title(163); ?>
        </h2>
    </header>
    <aside id="back-top" class="z-[100] flex justify-end md:py-[1rem] max-sm:pt-[7.4rem] max-sm:pb-[6.4rem] hover:opacity-50 transition-opacity duration-500 fixed right-[3rem] bottom-[5rem] ">
        <a href="#" class="inline-block ml-auto text-center max-sm:mr-auto">
            <img class="w-[6.4rem] mx-auto" src="<?= get_template_directory_uri() . '/img/layout/contact-block/arrow-to-top.svg' ?>" alt="">
            <p class="font-open-sans text-[1.4em] leading-[1.21em] pt-[1rem] hidden">back to the top</p>
        </a>
    </aside>
</section>