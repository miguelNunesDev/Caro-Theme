<style>
</style>
<div <?= get_block_wrapper_attributes(); ?>>
    <section id="case-typography" class="relative">
        <div class="flex max-md:flex-col">
            <aside class="flex flex-col md:basis-3/12 max-md:w-full">
                <?php foreach ($attributes['colors'] as $color) : ?>
                    <div class="h-[8.7rem] lg:h-[23.4rem] lg:flex-grow flex items-center justify-center" style="background: <?= $color['text'] ?>;">
                    <p class="font-raleway text-[3.3rem] tracking-[-0.12em] leading-[1.2em] font-extralight" style="color: <?= $color['isDark'] ? 'white' : 'black' ?>;">
                        
                        <?= $color['text'] ?>
                    </p>
                    </div>
                <?php endforeach; ?>
            </aside>
            <picture class="h-full img-box basis-9/12">
                <?php if ($attributes['desktop']) : ?>
                    <source media="(min-width: 768px)" srcset="<?= $attributes['desktop']['src'] ?>">
                <?php endif; ?>
                <?php if ($attributes['mobile']) : ?>
                    <source media="(max-width: 768px)" srcset="<?= $attributes['mobile']['src'] ?>">
                <?php endif; ?>
                <img src="<?= isset($attributes['mobile']['src']) ? $attributes['mobile']['src'] : $attributes['desktop']['src'] ?>" alt="" />
            </picture>
        </div>

    </section>
</div>


<script>
</script>