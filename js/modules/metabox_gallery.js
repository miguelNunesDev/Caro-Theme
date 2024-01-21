
function initGallery(id) {
	const image_id_input = document.querySelector('#' + id),
		image_preview = document.querySelector(`#${id}_image_preview`),
		select_text = document.querySelector(`#${id}_select_text`),
		image_delete = document.querySelector(`#${id}_image_delete`),
		open_gallery = document.querySelector(`#${id}_open_gallery`);

	console.log(id, image_delete, image_preview, image_id_input);
	open_gallery.addEventListener('click', (e) => {
		// Crea un objeto de la galería de medios
		var custom_uploader = (wp.media.frames.file_frame = wp.media({
			title: 'Seleccionar o Cargar Imagen',
			button: {
				text: 'Usar esta Imagen',
			},
			multiple: false, // Permitir la selección de múltiples imágenes
		}));

		// Cuando se selecciona o carga una imagen
		custom_uploader.on('select', function () {
			var attachment = custom_uploader
				.state()
				.get('selection')
				.first()
				.toJSON();

			// Actualiza el valor del campo de entrada oculto
			image_id_input.setAttribute('value', attachment.id);

			image_preview.classList.toggle('hidden', false);
			select_text.classList.toggle('hidden', true);
			image_delete.classList.toggle('hidden', false);
			image_preview.setAttribute('src', attachment.url);
		});

		// Abre la galería de medios
		custom_uploader.open();
	});

	image_delete.addEventListener('click', () => {
		image_preview.toggleClass('hidden', false);
		select_text.toggleClass('hidden', true);

		// Elimina la imagen
		image_id_input.setAttribute('value', '');
		image_preview.setAttribute('src', '');

		image_preview.attr('src', '');
		image_delete.toggleClass('hidden', true);
	});
}

// document.addEventListener('DOMContentLoaded', () => {
// 	images_upload_fields.forEach((id) => {
// 		initGallery(id);
// 	});
// });
