<div class="relative">
    <aside class="absolute w-full h-[80vh] inset-inline-0 z-[-1] top-[8vh] ">
        <svg class="w-full mx-auto h-[90%] scale-[.8]">
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

    <section id="case-duo-cards" class="mx-auto max-md:flex-wrap text-white container-block flex gap-[3.2rem] px-[6.5%] pt-[10rem] relative">


        <?php get_template_part('partials/duo', 'card', array(
            'id' => 'card1',
            'data' => $attributes['card1']
        )); ?>

        <?php get_template_part('partials/duo', 'card', array(
            'id' => 'card2',
            'data' => $attributes['card2']
        )); ?>



    </section>
</div>