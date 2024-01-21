import { __ } from '@wordpress/i18n';
import './view.js';
import { useEffect, useState } from 'react';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, TextControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import block from './block.json';
import { IllustrationControl } from './components/IllustrationControl';
import { SortableBlock } from '../../js/modules/Sortables.js';

export default function Edit({ attributes, setAttributes }) {
	const { illustrations, title, link } = attributes;
	const [illustrationsStates, setIllustrationsStates] = useState([]);

	useEffect(() => {
        let origin = window.location.origin;
		origin = origin.includes('localhost') ? origin + '/caro' : origin;
		fetch(`${origin}/wp-json/wp/v2/illustration`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setIllustrationsStates(data);
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
									value={title ?  title : ''}
									onChange={(val) =>
										setAttributes({ title: val })
									}
								/>
							</li>
                            <li>
								<TextControl
									label='Illustrations link'
									value={link ?  link : ''}
									onChange={(val) =>
										setAttributes({ link: val })
									}
								/>
							</li>
						</ul>
					</PanelBody>
					<PanelBody title='Illustrations' initialOpen={true}>
						{illustrationsStates.length ? (
							<SortableBlock
								items={illustrations}
								name='illustrations'
								placeholder={illustrationsStates[0].id}
								setAttributes={setAttributes}
								render={(props) => (
									<IllustrationControl
										{...props}
										options={illustrationsStates.map(
											(illustrationState) => ({
												id: illustrationState.id,
												label: illustrationState.title
													.rendered,
											})
										)}
										name='illustrations'
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
