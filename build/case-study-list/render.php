<style>
    #case-study-list .show {
        opacity: 1;
    }
</style>


<section class="w-full mx-auto text-white" id="case-study-list" <?= get_block_wrapper_attributes(); ?>>
    <article class="mt-[9rem] flex flex-wrap max-md:bg-[#2C2829]">
        <header class="block md:hidden pt-[6.4rem] md:pt-[10rem] px-[3.2rem] pb-[3.2rem]">
            <?php get_template_part('partials/caro', 'pill', array(
                'text' => 'UX/UI Design',
            )); ?>
            <h2 class="font-raleway text-[4.8rem] leading-[1.16em] tracking-[-0.192rem] font-bold pt-[1.2rem]"><?= the_title() ?></h2>
        </header>
        <ul class="md:overflow-y-scroll md:basis-1/2 md:h-[60rem] max-md:w-full">
            <?php $i = 0;
            foreach ($attributes['cases'] as $id) : ?>
                <?php $term =  get_the_terms($id, 'category')[0]; ?>
                <li class="relative p-[3.2rem] border-white border-t <?= $i ? '' : 'md:border-t-0' ?>" data-id="<?= $id ?>">
                    <a class="max-sm:flex max-sm:justify-between max-sm:items-center" href="<?= get_the_permalink($id) ?>">
                        <span class="max-sm:max-w-[25.4rem]">
                            <h3 class="font-raleway text-[2.8rem] md:text-[3.9rem] leading-[1.2em] tracking-[-0.02em] font-bold md:font-bold md:pb-[1.2rem] pb-[.4rem]">
                                <span class="inline-block w-[.9rem] h-[.9rem] bg-white rounded-full mr-[0.1]"></span><?= get_post_meta($id, 'case_title', true) ?>
                            </h3>
                            <p class="md:pl-[.9rem] font-open-sans text-[1.8rem] md:text-[2rem] leading-[1.2em] font-light"><?= get_the_title($id) ?></p>
                            <small class="uppercase md:absolute md:bottom-[3.2rem] md:right-[3.2rem] font-open-sans text-[1.2rem] leading-[1.16em] font-semibold text-right"><?= $term->name ?></small>
                        </span>
                        <figcaption class="md:hidden">
                            <img class="w-[6.4rem]" src="<?= get_template_directory_uri() . '/img/layout/case-study-list/mobile-arrow-right.svg' ?>" alt="">
                        </figcaption>
                    </a>
                </li>
            <?php $i++;
            endforeach; ?>
        </ul>
        <aside class="basis-1/2 h-[60rem] relative hidden md:block">
            <?php foreach ($attributes['cases'] as $id) :
                $meta_id = get_post_meta($id, 'case_aside', true);
                $media_css = 'absolute inset-0 transition-opacity w-full h-full object-cover opacity-0'
            ?>
                <?php if ($meta_id) : ?>
                    <?php if (wp_attachment_is('video', $meta_id)) : ?>
                        <video class="<?= $media_css ?>" src="<?= wp_get_attachment_url($meta_id) ?>" data-id="<?= $id ?>" muted autoplay loop></video>
                    <?php else : ?>
                        <img class="<?= $media_css ?>" src="<?= wp_get_attachment_image_url($meta_id) ?>" alt="" data-id="<?= $id ?>">
                    <?php endif; ?>
                <?php endif; ?>
            <?php endforeach; ?>
        </aside>
    </article>
</section>