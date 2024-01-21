import { SortableElement } from '../../../js/modules/Sortables';

import {
	Button,
	Flex,
	FlexItem,
	TextControl,
	TextareaControl,
} from '@wordpress/components';
const { useState, useEffect } = wp.element;

export const LinksControl = SortableElement(
	({ sortIndex, value, items, setAttributes, name }) => {
		const [textGroup, setTextGroup] = useState(value);
		useEffect(() => {
			setTextGroup(items[sortIndex]);
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
			newItems[i] = { ...newItems[i], ...val };
			console.log('on change');
			setAttributes({
				[name]: newItems,
			});
		};
		return (
			<Flex>
				<FlexItem>
					<TextControl
						label={`Name ${sortIndex}`}
						value={textGroup.name}
						onChange={(val) => {
							setTextGroup(val);
						}}
						onBlur={(e) => {
							handleTextChange(
								{ name: e.target.value },
								sortIndex
							);
						}}
						onKeyDown={(e) => {
							console.log(e);
							if (e.key !== 'Enter') return;
							handleTextChange(
								{ name: e.target.value },
								sortIndex
							);
						}}
					/>
					<TextareaControl
						label={`Url ${sortIndex}`}
						value={textGroup.url}
						onChange={(val) => {
							setTextGroup(val);
						}}
						onBlur={(e) => {
							handleTextChange(
								{ url: e.target.value },
								sortIndex
							);
						}}
						onKeyDown={(e) => {
							console.log(e);
							if (e.key !== 'Enter') return;
							handleTextChange(
								{ url: e.target.value },
								sortIndex
							);
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
