import { SortableElement } from '../../../js/modules/Sortables';

import {
	Button,
	Flex,
	FlexItem,
	TextControl,
	TextareaControl,
} from '@wordpress/components';
const { useState, useEffect } = wp.element;

export const ExperienceControl = SortableElement(
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
					<TextareaControl
						label={`Title ${sortIndex}`}
						value={textGroup.title}
						onChange={(val) => {
							setTextGroup(val);
						}}
						onBlur={(e) => {
							handleTextChange(
								{ title: e.target.value },
								sortIndex
							);
						}}
						onKeyDown={(e) => {
							console.log(e);
							if (e.key !== 'Enter') return;
							handleTextChange(
								{ title: e.target.value },
								sortIndex
							);
						}}
					/>
					<TextControl
						label={`Company ${sortIndex}`}
						value={textGroup.company}
						onChange={(val) => {
							setTextGroup(val);
						}}
						onBlur={(e) => {
							handleTextChange(
								{ company: e.target.value },
								sortIndex
							);
						}}
						onKeyDown={(e) => {
							console.log(e);
							if (e.key !== 'Enter') return;
							handleTextChange(
								{ company: e.target.value },
								sortIndex
							);
						}}
					/>
					<TextareaControl
						label={`Details ${sortIndex}`}
						value={textGroup.details}
						onChange={(val) => {
							setTextGroup(val);
						}}
						onBlur={(e) => {
							handleTextChange(
								{ details: e.target.value },
								sortIndex
							);
						}}
						onKeyDown={(e) => {
							console.log(e);
							if (e.key !== 'Enter') return;
							handleTextChange(
								{ details: e.target.value },
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