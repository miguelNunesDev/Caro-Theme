<div id="profile-colunm" <?= get_block_wrapper_attributes(); ?>>
    <section class="mx-auto mt-[12rem] md:mt-[14.9rem] mb-[9.4rem] profile-colunm container-block relative z-[1]">
        <div class="flex flex-wrap md:px-[12%] items-start justify-between">
            <aside class="relative  md:basis-6/12 md:px-[5.8rem] mobile-full-width max-md:mb-[6.4rem]">
                <picture class="block w-[35rem] md:w-full h-full img-box max-md:ml-auto max-md:mb-[3.7rem]">
                    <?php the_post_thumbnail() ?>
                </picture>
                <h1 class="max-md:pl-[3.2rem] text-white absolute bottom-0 left-0 w-full md:w-[38rem] font-raleway text-[7.2rem] md:text-[10rem] leading-[1em] tracking-[-0.4rem] font-extrabold">
                    <?php the_title() ?>
                </h1>
            </aside>
            <article class="text-white md:basis-6/12 ">
                <h2 class="font-raleway leading-[1.2em] text-[4.8rem] md:text-[6rem] tracking-[-0.24rem] my-[1rem] font-bold"><?= $attributes['title'] ?></h2>
                <p class="text-content"><?= $attributes['content'] ?></p>
            </article>
        </div>

    </section>
</div>