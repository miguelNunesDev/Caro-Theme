import { SortableElement } from '../../../js/modules/Sortables';

import { Button, Flex, FlexItem } from '@wordpress/components';

import { MediaUpload } from '@wordpress/block-editor';

export const ToolsControl = SortableElement(
	({ sortIndex, value, items, setAttributes, name }) => {
		const handleSelectImage = (media, i) => {
			if (media && media.url) {
				const newItems = [...items];
				newItems[i] = media.url;
				setAttributes({ [name]: newItems });
			}
		};
		const handleRemoveRotator = (i) => {
			const newItems = [...items];
			newItems.splice(i, 1);
			setAttributes({
				[name]: newItems,
			});
		};

		return (
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
								{value ? (
									<img src={value} />
								) : (
									'Select new Media'
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
		);
	}
);
