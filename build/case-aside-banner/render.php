<?php
$id = uniqid();
?>

<section id="case-aside-banner" class="relative flex flex-wrap" <?= get_block_wrapper_attributes(); ?>>
    <?php get_template_part('partials/caro', 'anchor', array(
        'id' => $attributes['anchor'],
    )); ?>
    <aside class="relative w-full overflow-hidden md:basis-7/12 img-cover">
        <?php if (wp_attachment_is('video', $attributes['thumbnail']['id'])) : ?>
            <video class="" style="height: auto;" src="<?= $attributes['thumbnail']['src'] ?>" muted autoplay loop></video>
        <?php else : ?>
            <img src="<?= $attributes['thumbnail']['src'] ?>" alt="">
        <?php endif; ?>
    </aside>
    <div class="flex max-md:w-full px-[3.2rem] py-[6.4rem] md:py-0 items-center md:basis-5/12 bg-[#2C2829]">
        <header class="md:pl-[11.6rem]">
            <h2 class="text-raleway tracking-[-0.04em] font-bold leading-[1.11em] text-white text-[4.8rem] md:text-[7.2rem] mb-[2.4rem]"><?= $attributes['title'] ?></h2>

            <!-- EXTERNAL LINK -->
            <?php if ($attributes['bttn']['link'] && $attributes['bttn']['isExternal']) : ?>

                <?php get_template_part('partials/caro', 'bttn', array(
                    'text' => $attributes['bttn']['text'],
                    'link' => $attributes['bttn']['link'],
                    'class' => 'bttn-line inline-block',
                    'target' => '_blank'
                )); ?>
            <?php endif; ?>

            <!-- Overlay LINK -->
            <?php if ($attributes['bttn']['link'] && !$attributes['bttn']['isExternal']) : ?>
                <?php get_template_part('partials/caro', 'bttn', array(
                    'text' => $attributes['bttn']['text'],
                    'data' => 'data-target=' . $id,
                    'class' => 'bttn-line inline-block',
                    'link' => '#',
                    'tag' => 'button'
                )); ?>
            <?php endif; ?>
        </header>
    </div>
</section>

<?php if ($attributes['bttn']['link'] && !$attributes['bttn']['isExternal']) : ?>
    <article class="fixed inset-0 flex items-center justify-center hidden z-[60] overlay" data-target="<?= $id ?>">
        <div class="transition duration-500 opacity-0 wrapper">
            <aside class="bg absolute inset-0 bg-black opacity-70 z-[-1]"></aside>
            <section class="bg-[#2C2829] w-[80vw] h-[80vh] overflow-scroll">
                <img class="w-full" src="<?= $attributes['bttn']['link'] ?>" alt="">
            </section>
            <button class="absolute top-[3rem] right-[3rem] close">
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="29.1803" height="2.04904" transform="matrix(0.723635 -0.690183 0.723635 0.690183 0.434296 20.1396)" fill="white" />
                    <rect width="29.1803" height="2.04904" transform="matrix(0.723635 0.690183 -0.723635 0.690183 1.48276 0.139648)" fill="white" />
                </svg>

            </button>
        </div>

    </article>

    <script>
        const overlay = document.querySelector('.overlay[data-target="<?= $id ?>"]');
        const button = document.querySelector('button[data-target="<?= $id ?>"]');

        const showOverlay = (state) => {
            if (state) {
                overlay.classList.toggle('hidden', !state);
                setTimeout(() => {
                    overlay.querySelector('.wrapper').classList.toggle('opacity-0', !state);
                }, 50)
            } else {
                overlay.querySelector('.wrapper').classList.toggle('opacity-0', !state);
                setTimeout(() => {
                    overlay.classList.toggle('hidden', !state);
                }, 5000)
            }

        }

        button.addEventListener('click', () => {
            showOverlay(true);
        })

        overlay.querySelector('.bg').addEventListener('click', () => showOverlay(false))
        overlay.querySelector('.close').addEventListener('click', () => showOverlay(false))
    </script>
<?php endif; ?>