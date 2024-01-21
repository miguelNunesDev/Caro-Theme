<?php

$contact = null;
$posts = get_posts(array(
    'post_type' => 'contact', // Reemplaza con el nombre de tu tipo de post personalizado
    'posts_per_page' => 1, // Obtener solo un post
));

if (!empty($posts)) $contact = $posts[0];
$contact->post_content;
$content = apply_filters('the_content', $contact->post_content);
?>

<style>
    body:not(.case-studies):not(.get-in-touch) #bg-footer {
        display: none;
    }

    body.get-in-touch footer {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    body.get-in-touch footer small {
        position: absolute;
        bottom: 0;
        inset-inline: 0;
    }
    body.get-in-touch footer header {
        order: -1;
    }
    body.get-in-touch footer section aside {
        display: none;
    }
</style>

<footer class="relative overflow-hidden max-sm:pt-[6rem]" id="footer">
    <aside id="bg-footer" class="absolute w-full inset-inline-0 z-[-1] top-[8vh]">
        <svg class="w-full mx-auto h-[120rem] px-[15rem] pt-[15rem]">
            <ellipse data-offset-x='2' data-offset-y='-2' data-displace='translate' class="mouse-parallax" cx="652.5" cy="715" rx="364.5" ry="287" fill="#60371A" fill-opacity="0.5" />
            <circle id="mediumRight" data-offset-x='3' data-offset-y='-2' data-displace='translate' class="mouse-parallax" cx="1138" cy="327" r="209" fill="#60371A" fill-opacity="0.7" />
            <circle data-offset-x='-1.5' data-offset-y='-1.5' data-displace='translate' class="mouse-parallax" cx="983" cy="118" r="118" fill="#60371A" fill-opacity="0.7" />
            <circle id="big" data-offset-x='0.5' data-offset-y='-0.9' data-displace='translate' class="mouse-parallax" cx="757.5" cy="417.5" r="327.5" fill="#60371A" fill-opacity="0.7" />
            <ellipse id="smallUp" data-offset-x='-2' data-offset-y='1.5' data-displace='translate' class="mouse-parallax" cx="1084.62" cy="122.409" rx="82.7354" ry="94.5" transform="rotate(28.2588 1084.62 122.409)" fill="#EE8B30" />
            <ellipse id="mediumBot" data-offset-x='1.5' data-offset-y='-2' data-displace='translate' class="mouse-parallax" cx="262.5" cy="427.5" rx="262.5" ry="150.5" fill="#CC9123" />
            <circle data-offset-x='1' data-offset-y='-0.8' data-displace='translate' class="mouse-parallax" cx="506.5" cy="257.5" r="197.5" fill="#60371A" fill-opacity="0.4" />
        </svg>
        <div class="absolute inset-0 backdrop-blur-3xl"></div>
    </aside>
    <?= $content ?? '' ?>
    <small class="text-[#7D7A78] block bg-[#312C2E] font-light text-center font-open-sans text-[1.4em] leading-[1.21em] py-[1.2rem] mt-[12rem]">Copyright 2023 - Caro.</small>
</footer>
<?php wp_footer(); ?>
</body>

</html>