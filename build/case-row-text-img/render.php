<div <?= get_block_wrapper_attributes(); ?>>
    <section id="case-row-text-img" class="container-block px-[8.33%] mx-auto py-[6.4rem] md:py-[3.4rem]">
        <div class="relative flex flex-col justify-between md:flex-row">
            <?php
            foreach ($attributes['imgs'] as $img) : ?>
                <figure class="px-[4.2rem] md:px-0 md:w-[23.2rem]">
                    <figcaption class="px-[3.2rem] pb-[3.4rem] text-content text-center md:text-[1.4rem]">
                        <?= $img['content'] ?>
                    </figcaption>
                    <img class="w-full" src="<?= $img['src'] ?>" alt="">
                </figure>
            <?php endforeach; ?>
        </div>

    </section>
</div>


<script>
    var testimonialSwiper = new Swiper('#case-slider .swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
            }
        }
    });
</script>