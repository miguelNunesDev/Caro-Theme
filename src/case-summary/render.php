<?php
$h3 = "text-open-sans text-[2rem] font-bold leading-[1.2em] ";
$p = "text-open-sans text-[1.6rem] font-regular leading-[1.18em]";
$b = "text-open-sans text-[1.6rem] font-bold leading-[1.18em]";

?>
<div class="bg-[#2A2928] relative">
    <?php get_template_part('partials/caro', 'anchor', array(
        'id' => $attributes['anchor'],
    )); ?>
    <section id="case-summary" class="mx-auto text-white container-block pb-[13.4rem] pt-[6.4rem] md:py-[13rem] ">
        <div class="flex flex-wrap md:pl-[8.333%] items-center">
            <header class="pb-[8.6rem] md:basis-5/12">
                <h2 class="font-bold text-raleway text-[4.8rem] md:text-[7.2rem] leading-[1.11em] tracking-[-0.04em]"><?= $attributes['title'] ?></h2>
            </header>
            <article class="flex flex-wrap gap-x-[1.6rem] md:basis-6/12">
                <!-- Desktop Tools When Base in -->
                <div class="hidden basis-1/2 md:block">
                    <div>
                        <h3 class="<?= $h3 ?>">Tools</h3>
                        <ul class="flex flex-wrap pt-[1.6rem] gap-[1.3rem]">
                            <?php foreach ($attributes['tools'] as $tool) : ?>
                                <li><img src="<?= $tool ?>" alt=""></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                    <div class="mt-[5.2rem]">
                        <h3 class="<?= $h3 ?>">When</h3>
                        <p class="pt-[1.6rem] <?= $p ?>"><?= $attributes['when'] ?></p>
                    </div>
                    <div class="mt-[2.4rem]">
                        <h3 class="<?= $h3 ?>">Based in</h3>
                        <p class="pt-[1.6rem] <?= $p ?>"><?= $attributes['base'] ?></p>
                    </div>
                </div>

                <div class="flex flex-wrap md:block md:basis-1/2 md:ml-[-1.6rem]">
                    <!-- Skills -->
                    <div class="max-md:basis-1/2">
                        <h3 class="<?= $h3 ?>">Skills</h3>
                        <ul class="pt-[2.4rem] flex flex-wrap gap-[.8rem]">
                            <?php foreach ($attributes['skills'] as $skill) : ?>
                                <li><?php get_template_part('partials/caro', 'pill', array(
                                        'text' => $skill,
                                        'class' => 'block'
                                    )); ?>

                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                    <!-- MOBILE Tools -->
                    <div class="md:hidden basis-1/2">
                        <h3 class="<?= $h3 ?>">Tools</h3>
                        <ul class="flex flex-wrap pt-[1.6rem] gap-[1.3rem]">
                            <?php foreach ($attributes['tools'] as $tool) : ?>
                                <li><img src="<?= $tool ?>" alt=""></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                    <!-- MOBILE When -->
                    <div class="w-full md:hidden mt-[5.2rem]">
                        <h3 class="<?= $h3 ?>">When</h3>
                        <p class="pt-[1.6rem] <?= $p ?>"><?= $attributes['when'] ?></p>
                    </div>
                    <!-- MOBILE Based in -->
                    <div class="w-full md:hidden mt-[5.2rem]">
                        <h3 class="<?= $h3 ?>">Based in</h3>
                        <p class="pt-[1.6rem] <?= $p ?>"><?= $attributes['base'] ?></p>
                    </div>

                    <!-- Links -->
                    <div class="w-full pt-[5.2rem]">
                        <?php if (!$attributes['links']) : ?>
                            <h3 class="<?= $h3 ?>">Links</h3>
                            <ul class="flex flex-wrap pt-[1.6rem] gap-[1.3rem]">
                                <?php foreach ($attributes['links'] as $link) : ?>
                                    <li class="w-full">
                                        <strong class="<?= $b ?>"><?= $link['name'] ?></strong>
                                        <a class="transition duration-300 hover:opacity-50 pl-[.1rem] <?= $p ?>" href=" <?= $link['url'] ?>" target="_blank"> <?= $link['url'] ?></a>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        <?php endif; ?>
                    </div>
                </div>
                <div class="w-full pt-[5.2rem]">
                    <h3 class="<?= $h3 ?>">Team</h3>
                    <ul class="flex flex-wrap pt-[1.6rem] gap-[1.3rem]">
                        <?php foreach ($attributes['team'] as $person) : ?>
                            <li class="w-full"><strong class="<?= $b ?>"><?= $person['name'] ?></strong><span class="pl-[.1rem] <?= $p ?>"> <?= $person['job'] ?></span></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </article>
        </div>
    </section>
</div>