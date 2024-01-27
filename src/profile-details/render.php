<?php
$h2 = '
font-raleway md:text-[6rem] leading-[1.2em] tracking-[-0.24rem] font-extrabold pb-[1.2rem]
text-[4.8rem]
';

$title = '
    font-raleway font-semibold text-[2.3rem] leading-[1.21em] tracking-[-0.046rem]
';
$small = 'font-open-sans font-light text-[1.4rem] leading-[1.21em] text-white pt-[.4rem]';
?>

<div <?= get_block_wrapper_attributes(); ?>>
    <section id="profile-details" class="mx-auto mb-[16rem] md:mb-[12.8rem] mt-[9.4rem]  container-block flex flex-wrap text-white relative md:px-[8.3%] justify-between isolate">

        <aside class="absolute w-full inset-inline-0 z-[-1] top-[-55rem]">
            <svg class="w-full mx-auto h-[120rem] p-[15rem] scale-75 md:scale-100">
                <ellipse cx="652.5" cy="715" rx="364.5" ry="287" fill="#60371A" fill-opacity="0.5" />
                <circle cx="1138" cy="327" r="209" fill="#60371A" fill-opacity="0.7" />
                <circle cx="983" cy="118" r="118" fill="#60371A" fill-opacity="0.7" />
                <circle cx="757.5" cy="417.5" r="327.5" fill="#60371A" fill-opacity="0.7" />
                <ellipse cx="1084.62" cy="122.409" rx="82.7354" ry="94.5" transform="rotate(28.2588 1084.62 122.409)" fill="#EE8B30" />
                <ellipse cx="262.5" cy="427.5" rx="262.5" ry="150.5" fill="#CC9123" />
                <circle cx="506.5" cy="257.5" r="197.5" fill="#60371A" fill-opacity="0.4" />
            </svg>
            <div class="absolute inset-0 backdrop-blur-3xl"></div>
        </aside>
        <div id="col-right" class="flex flex-col flex-wrap gap-[3.2rem] md:basis-1/2 md:pr-[8rem]">
            <article id="education">
                <h2 class="<?= $h2 ?>">Education</h2>
                <ul class="flex flex-col gap-[2.4rem]">
                    <?php foreach ($attributes['education'] as $education) : ?>
                        <li>
                            <p class="<?= $title ?>"><?= $education['title'] ?></p>
                            <small class="max-md:block  <?= $small ?>"><?= $education['content'] ?></small>
                        </li>
                    <?php endforeach; ?>

                </ul>
            </article>

            <article id="skills">
                <h2 class="<?= $h2 ?>">Skills</h2>
                <ul class="flex flex-wrap gap-[.8rem]">
                    <?php foreach ($attributes['skills'] as $skill) : ?>
                        <?php get_template_part('partials/caro', 'pill', array(
                            'text' => $skill,
                        )); ?>
                    <?php endforeach; ?>

                </ul>
            </article>
            <article id="tools">
                <h2 class="<?= $h2 ?>">Tools</h2>
                <ul class="flex flex-wrap gap-[1.2rem]">
                    <?php foreach ($attributes['tools'] as $tool) : ?>
                        <li class="img-box w-[3.2rem]">
                            <img src="<?= $tool ?>" alt="">
                        </li>
                    <?php endforeach; ?>
                </ul>
            </article>

            <article id="languages" class="pb-[3.2rem]">
                <h2 class="<?= $h2 ?>">Languages</h2>
                <ul class="flex flex-col gap-[.8rem]">
                    <?php foreach ($attributes['languages'] as $language) : ?>
                        <li>
                            <span class="font-raleway text-[1.8rem] leading-[1.2em] font-normal"><?= $language['name'] . ' ' ?></span>
                            <span class="font-open-sans text-[1.8rem] leading-[1.2em] font-light text-[#A5A3A1]"><?= $language['level'] ?></span>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </article>
        </div>
        <div id="col-right" class="flex flex-col flex-wrap gap-[3.2rem] md:basis-1/2">
            <article id="education">
                <h2 class="<?= $h2 ?>">Experience</h2>
                <ul class="flex flex-col gap-[2.4rem]">
                    <?php foreach ($attributes['experience'] as $experience) : ?>
                        <li>
                            <p>
                                <span class="<?= $title ?>"><?= $experience['title'] ?></span>
                                <span class="max-md:block  font-open-sans font-light text-[2rem] leading-[1.2em]"><?= $experience['company'] ?></span>
                            </p>
                            <small class="max-md:hidden <?= $small ?>"><?= $experience['details'] ?></small>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </article>
        </div>

        <?php
        $args = array(
            'post_type'      => 'global-content',
            'posts_per_page' => 1,
        );
        $global_content = get_posts($args)[0];
        $pdf_id = get_post_meta($global_content->ID, 'cv_pdf', true);
        ?>
        <a class="absolute bottom-[-12rem] md:bottom-0 right-[3.6rem] md:right-[8.3%]" download="Carolina_di_Lello_Resume_2023" target="_blank" href="<?= wp_get_attachment_url($pdf_id) ?>">
            <figure class="img-box w-[6.4rem]">
                <img src="<?= get_template_directory_uri() . '/img/layout/about/download.svg' ?>" alt="">
            </figure>
            <p class="text-center font-open-sans text-[1.4rem] leading-[1.21em] font-light text-[#A5A3A1]">
                Download<br>
                CV/Resume
            </p>
        </a>
    </section>
</div>