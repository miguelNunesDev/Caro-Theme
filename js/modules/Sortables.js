import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import { Button } from '@wordpress/components';

const SortableList = SortableContainer(({ items, render, setAttributes }) => {
	return items?.length ? (
		<ul>
			{items.map((value, index) => {
				return render({
					value,
					sortIndex: index,
					index,
					items,
					setAttributes,
				});
			})}
		</ul>
	) : (
		<></>
	);
});
const SortableBlock = ({ items, name, placeholder, render, setAttributes }) => {
	return (
		<>
			<SortableList
				items={items}
				setAttributes={setAttributes}
				onSortEnd={({ oldIndex, newIndex }) => {
					const newAttr = {};
					newAttr[name] = arrayMoveImmutable(
						items,
						oldIndex,
						newIndex
					);
					items = newAttr[name];
					setAttributes({ ...newAttr });
					console.log(newAttr, items);
				}}
				render={render}
			/>
			<Button
				variant='primary'
				onClick={(e) => {
					const newAttr = {};
					newAttr[name] = [...items];
					newAttr[name].push(placeholder);
					setAttributes(newAttr);
					console.log(newAttr, items);
				}}
			>
				Add Element
			</Button>
		</>
	);
};
export { SortableBlock, SortableElement };
