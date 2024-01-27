import { SortableElement } from '../../../js/modules/Sortables';

import { Button, Flex, FlexItem, TextareaControl } from '@wordpress/components';

import { MediaUpload } from '@wordpress/block-editor';
import iconSrc from './uploadIcon.png';

export const ImagesControl = SortableElement(
	({ sortIndex, value, items, setAttributes, name }) => {
		const handleRemoveRotator = (i) => {
			const newItems = [...items];
			newItems.splice(i, 1);
			setAttributes({
				[name]: newItems,
			});
		};
		const handleSelectImage = (media, i) => {
			if (media && media.url) {
				const newItems = [...items];
				newItems[i].src = media.url;
				newItems[i].id = media.id;
				setAttributes({ [name]: newItems });
			}
		};


		return (
			<>
				<Flex>
					<FlexItem>
						<MediaUpload
							onSelect={(media) => {
								handleSelectImage(media, sortIndex);
							}}
							type='image'
							value={value}
							render={({ open }) => (
								<Button onClick={open}>
									{value?.src ? (
										<img src={value.src} />
									) : (
										<img src={iconSrc} />
									)}
								</Button>
							)}
						/>
					</FlexItem>
					<FlexItem>
						<Button
							variant='secondary'
							onClick={(e) => handleRemoveRotator(sortIndex)}
						>
							-
						</Button>
					</FlexItem>
				</Flex>
				<TextareaControl
					label='Content'
					value={value.content ? value.content : ''}
					onChange={(val) => {
						const newItems = [...items];
						newItems[sortIndex].content = val;
						setAttributes({ [name]: newItems });
					}}
				/>
				<hr />
			</>
		);
	}
);
