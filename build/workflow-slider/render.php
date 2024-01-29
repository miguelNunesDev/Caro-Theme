<style>
    #workflow .swiper-slide {
        height: auto !important;
    }

    @media only screen and (min-width : 0) and (max-width : 960px) {
        #workflow #workflow-header {
            order: -1;
        }
    }
</style>
<section id="workflow" class="max-md:overflow-hidden relative pt-[7.4rem] pb-[15rem] md:pb-[12rem] isolate z-[1]">

    <div class="justify-between mx-auto text-white container-block">
        <div class="flex flex-wrap md:px-[8.3%] justify-between">
            <header id="workflow-header" class="md:basis-5/12">
                <h2 class="font-raleway font-bold text-[4.8rem] md:text-[10em] leading-[1em] tracking-[-0.04em] mt-[3.2rem]">
                    <?= $attributes['title'] ?>
                </h2>
            </header>
            <article class="w-full md:w-[50%] md:basis-6/12 max-sm:pt-[3.2rem]">
                <div class="swiper">
                    <div class="swiper-wrapper">
                        <?php
                        $card = "flex flex-col w-[53.2rem] p-[3.2rem] md:p-[6.4rem]  overflow-hidden rounded-[1.2rem] border border-[#535150]";
                        $gradient = "background: linear-gradient(74deg, rgba(34, 30, 30, 0.50) 21.29%, rgba(83, 81, 80, 0.50) 80.09%)";
                        foreach ($attributes['workflows'] as $workflow) : ?>
                            <div class="flex items-center swiper-slide backdrop-blur-md <?= $card ?>" style="<?= $gradient ?>">
                                <header class="text-left pb-[2.4rem] md:pb-[3rem]">
                                    <h3 class="font-raleway max-md:pb-[2.4rem] font-extrabold text-[4.8rem] md:text-[3.9rem] leading-[1.2em] tracking-[-0.04]"><?= $workflow['title'] ?></h3>
                                </header>
                                <div class="font-raleway font-extralight text-[1.8rem] md:text-[2.8rem] tracking-[-0.02em] leading-[1.21em]">
                                    <p><?= $workflow['content'] ?></p>
                                </div>
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