import { SortableElement } from '../../../js/modules/Sortables';

import {
	Button,
	Flex,
	FlexItem,
	TextControl,
	TextareaControl,
} from '@wordpress/components';


export const MenuControl = SortableElement(
	({ sortIndex, value, items, setAttributes, name }) => {

		return (
			<ul>
				<li>
					<TextControl
						label='Title'
						value={value.text}
						onChange={(val) => {
							const newItems = [...items];
							newItems[sortIndex].text = val;
							setAttributes({ [name]: newItems });
						}}
					/>
				</li>
				<li>
					<TextControl
						label='Url / Section ID'
						value={value.url}
						onChange={(val) => {
							const newItems = [...items];
							newItems[sortIndex].url = val;
							setAttributes({ [name]: newItems });
						}}
					/>
				</li>
                <hr/>
			</ul>
		);
	}
);
