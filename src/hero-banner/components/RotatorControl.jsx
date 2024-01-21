import { TextControl, Button, Flex, FlexItem } from '@wordpress/components';

import { SortableElement } from '../../../js/modules/Sortables';
const { useState, useEffect } = wp.element;

export const RotatorControl = SortableElement(
	({ sortIndex, value, items, setAttributes }) => {
		const [text, setText] = useState(value);
		useEffect(() => {
			setText(items[sortIndex]);
		}, [items]);
		const handleRemoveRotator = (i) => {
			const newRotators = [...items];
			newRotators.splice(i, 1);
			setAttributes({
				rotators: newRotators,
			});
		};

		const handleRotatorChange = (val, i) => {
			const newRotators = [...items];
			newRotators[i] = val;
			console.log('on change');
			setAttributes({
				rotators: newRotators,
			});
		};
		return (
			<Flex>
				<FlexItem>
					<TextControl
						label={`Rotator ${sortIndex}`}
						value={text}
						onChange={(val) => {
							setText(val);
						}}
						onBlur={(e) => {
							handleRotatorChange(e.target.value, sortIndex);
						}}
						onKeyDown={(e) => {
							console.log(e);
							if (e.key !== 'Enter') return;
							handleRotatorChange(e.target.value, sortIndex);
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
