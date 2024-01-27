<style>
    @media only screen and (min-width : 0) and (max-width : 960px) {
        #testimonies #workflow-header {
            order: -1;
        }
    }
</style>
<section id="testimonies" class="max-md:overflow-hidden relative py-[7.4rem] pb-[15rem] md:py-[12.8rem] isolate z-[1]">

    <div class="justify-between mx-auto text-white container-block">
        <div class="flex flex-wrap md:px-[8.3%] justify-between">
            <header id="workflow-header" class="md:basis-6/12">
                <h2 class="font-raleway font-bold text-[4.8rem] md:text-[7.2em] leading-[1.11em] tracking-[-0.04em] mt-[3.2rem]">
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
                            <div class="flex items-center swiper-slide backdrop-blur-md <?= $card ?>" style="heigth:auto; <?= $gradient ?>">
                                <header class="text-left pb-[2.4rem] md:pb-[3rem]">
                                    <h3 class="font-raleway max-md:pb-[2.4rem] font-extrabold text-[4.8rem] md:text-[3.9rem] leading-[1.2em] tracking-[-0.04]"><?= $workflow['title'] ?></h3>
                                </header>
                                <div>
                                    <p class="text-content"><?= $workflow['content'] ?></p>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </article>
        </div>

    </div>

</section>

<script>
    var caseCardSlider = new Swiper('.swiper', {
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