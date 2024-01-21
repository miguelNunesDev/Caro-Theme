import { TextControl, Button, Flex, FlexItem } from '@wordpress/components';

import { SortableElement } from '../../../js/modules/Sortables';
const { useState, useEffect } = wp.element;

export const SkillsControl = SortableElement(
	({ sortIndex, value, items, setAttributes, name }) => {
		const [text, setText] = useState(value);
		useEffect(() => {
			setText(items[sortIndex]);
		}, [items]);
		const handleTextRemove = (i) => {
			const newItems = [...items];
			newItems.splice(i, 1);
			setAttributes({
				[name]: newItems,
			});
		};

		const handleTextChange = (val, i) => {
			const newItems = [...items];
			newItems[i] = val;
			console.log('on change');
			setAttributes({
				[name]: newItems,
			});
		};
		return (
			<Flex>
				<FlexItem>
					<TextControl
						label={`Skill ${sortIndex}`}
						value={text}
						onChange={(val) => {
							setText(val);
						}}
						onBlur={(e) => {
							handleTextChange(e.target.value, sortIndex);
						}}
						onKeyDown={(e) => {
							console.log(e);
							if (e.key !== 'Enter') return;
							handleTextChange(e.target.value, sortIndex);
						}}
					/>
				</FlexItem>
				<FlexItem>
					<Button
						variant='secondary'
						onClick={(e) => handleTextRemove(sortIndex)}
					>
						-
					</Button>
				</FlexItem>
			</Flex>
		);
	}
);
