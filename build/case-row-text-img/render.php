<style>
    @keyframes fade-in {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    #case-row-text-img figure {
        --duration: 0.5s;
        --delay: 0.2s;
        opacity: 0;
    }

    #case-row-text-img.animate-visible figure {
        animation: fade-in var(--duration) forwards
    }

    @media only screen and (min-width : 961) {
        
        #case-row-text-imgfigure figure:nth-child(2) {
            animation-delay: calc(var(--delay) * 1);
        }

        #case-row-text-imgfigure figure:nth-child(3) {
            animation-delay: calc(var(--delay) * 2);
        }

        #case-row-text-imgfigure figure:nth-child(4) {
            animation-delay: calc(var(--delay) * 3);
        }

        #case-row-text-imgfigure figure:nth-child(5) {
            animation-delay: calc(var(--delay) * 4);
        }

        #case-row-text-imgfigure figure:nth-child(6) {
            animation-delay: calc(var(--delay) * 5);
        }
    }
</style>

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