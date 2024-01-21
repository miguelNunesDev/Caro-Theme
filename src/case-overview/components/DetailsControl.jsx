import { SortableElement } from '../../../js/modules/Sortables';

import { Button, Flex, FlexItem, TextControl } from '@wordpress/components';

export const DetailsControl = SortableElement(
	({ sortIndex, value, items, setAttributes, name }) => {
		return (
			<ul>
				<li>
					<TextControl
						label='Data'
						value={value.data}
						onChange={(val) => {
							const newItems = [...items];
							newItems[sortIndex].data = val;
							setAttributes({ [name]: newItems });
						}}
					/>
				</li>
				<li>
					<TextControl
						label='Title'
						value={value.title}
						onChange={(val) => {
							const newItems = [...items];
							newItems[sortIndex].title = val;
							setAttributes({ [name]: newItems });
						}}
					/>
				</li>
				<hr />
			</ul>
		);
	}
);
