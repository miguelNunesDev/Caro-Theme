import { SortableElement } from '../../../js/modules/Sortables';
const { useState, useEffect } = wp.element;

import { TextControl, Button, Flex, FlexItem } from '@wordpress/components';

import { MediaUpload } from '@wordpress/block-editor';

export const SocialControl = SortableElement(
	({ sortIndex, value, items, setAttributes }) => {
		const [url, setUrl] = useState(value.url);

		useEffect(() => {
			setUrl(items[sortIndex].url);
		}, [items]);

		const handleSelectImage = (media, i) => {
			if (media && media.url) {
				const newSocials = [...items];
				console.log(newSocials[i], i, items[i]);
				newSocials[i].icon = media.url;
				setAttributes({ socials: newSocials });
				console.log(items);
			}
		};

		const handleUrlChange = (val, index) => {
			const newSocials = [...items];
			newSocials[index] = { ...newSocials[index], url: val };
			console.log(newSocials[index], val);
			setAttributes({
				socials: newSocials,
			});
			console.log(items);
		};

		return (
			<Flex>
				<FlexItem>
					<MediaUpload
						onSelect={(media) => {
							handleSelectImage(media, sortIndex);
						}}
						type='image'
						value={value.icon}
						render={({ open }) => (
							<Button onClick={open}>
								{value.icon ? (
									<img src={value.icon} />
								) : (
									'Seleccionar Imagen'
								)}
							</Button>
						)}
					/>
				</FlexItem>
				<FlexItem>
					<TextControl
						label='URL de la Imagen'
						value={url}
						onChange={(val) => {
							setUrl(val);
						}}
						onBlur={(e) => {
							handleUrlChange(e.target.value, sortIndex);
						}}
						onKeyDown={(e) => {
							console.log(e);
							if (e.key !== 'Enter') return;
							handleUrlChange(e.target.value, sortIndex);
						}}
					/>
				</FlexItem>
			</Flex>
		);
	}
);
