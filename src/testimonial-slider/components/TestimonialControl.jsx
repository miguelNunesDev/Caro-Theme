import { SortableElement } from '../../../js/modules/Sortables';

import { Button, Flex, FlexItem, SelectControl } from '@wordpress/components';

export const TestimonialControl = SortableElement(
	({ sortIndex, value, items, setAttributes, options, name }) => {
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
					<SelectControl
						label={`Testimonial ${sortIndex}`}
						value={value}
						options={[
							{ label: 'select', disabled: true },
							...options.map((option) => ({
								label: option.label,
								value: option.id,
							})),
						]}
						onChange={(val) => {
							const newItems = [...items];
							newItems[sortIndex] = val;
							setAttributes({
								[name]: newItems,
							});
							console.log({
								val: val,
								newItems,
								items,
							});
                            setTimeout(() => {}, 500);
						}}
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
