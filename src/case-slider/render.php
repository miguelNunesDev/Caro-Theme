<style>
    .reverse header {
        order: 1;
    }


    .reverse aside {
        top: 15rem;
    }

    .reverse aside {
        padding-top: 40rem;
    }

    @media only screen and (min-width : 0) and (max-width : 960px) {
        #testimonies header {
            order: -1;
        }
    }

    @media only screen and (min-width : 961px) {}
</style>
<div <?= get_block_wrapper_attributes(); ?>>
    <section id="case-slider" class="container-block px-[8.33%] mx-auto">
        <div class="relative px-[2rem]">
            <article class="swiper">
                <div class="swiper-wrapper">
                    <?php
                    foreach ($attributes['imgs'] as $img) : ?>
                        <figure class="img-box swiper-slide">
                            <img src="<?= $img ?>" alt="">
                        </figure>
                    <?php endforeach; ?>
                </div>

            </article>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
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