<<?= $args['tag'] ?? 'a' ?> <?= $args['data'] ?? '' ?> id="<?= $args['id'] ??  '' ?>" class="bttn <?= $args['class'] ??  'bttn-fill'  ?>" href="<?= $args['link'] ?>" <?= key_exists('target', $args) ? "target=" . $args['target'] : ''  ?> <?= key_exists('download', $args) ? "download=" . $args['download'] : ''  ?> >
    <span class="hidden md:inline">
        <?= $args['text'] ?>
    </span>
    <span class="md:hidden">
        <?= $args['text-mobile'] ?? $args['text'] ?>
    </span>
</<?= $args['tag'] ?? 'a' ?>>