import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './style.scss';
import './view.js'

export default function Edit({ attributes, setAttributes }) {
	const { title } = attributes;
	return (
		<>
			<section { ...useBlockProps() }>
				<h1 className='text-red-400 title-test'>Hola</h1>
			</section>
		</>
	);
}
