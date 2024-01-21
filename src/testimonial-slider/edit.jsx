import { __ } from '@wordpress/i18n';
import './view.js';
import { useEffect, useState } from 'react';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, TextControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import block from './block.json';
import { TestimonialControl } from './components/TestimonialControl.jsx';
import { SortableBlock } from '../../js/modules/Sortables.js';

export default function Edit({ attributes, setAttributes }) {
	const { testimonials, title } = attributes;
	const [testimonialStates, setTestimonialStates] = useState([]);

	useEffect(() => {
		let origin = window.location.origin;
		origin = origin.includes('localhost') ? origin + '/caro' : origin;
		fetch(`${origin}/wp-json/wp/v2/testimonials`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setTestimonialStates(data);
			});
	}, []);

	return (
		<>
			<InspectorControls key='setting'>
				<Panel>
					<PanelBody title='Contenido' initialOpen={true}>
						<ul>
							<li>
								<TextControl
									label='Title'
									value={title ? title : ''}
									onChange={(val) =>
										setAttributes({ title: val })
									}
								/>
							</li>
						</ul>
					</PanelBody>
					<PanelBody title='testimonials' initialOpen={true}>
						{testimonialStates.length ? (
							<SortableBlock
								items={testimonials}
								name='testimonials'
								placeholder={testimonialStates[0].id}
								setAttributes={setAttributes}
								render={(props) => (
									<TestimonialControl
										{...props}
										options={testimonialStates.map(
											(testimonialstate) => ({
												id: testimonialstate.id,
												label: testimonialstate.title
													.rendered,
											})
										)}
										name='testimonials'
										key={`illustration-${props.index}`}
									/>
								)}
							/>
						) : (
							<p>Loading</p>
						)}
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...useBlockProps()}>
				<ServerSideRender block={block.name} attributes={attributes} />
			</div>
		</>
	);
}
