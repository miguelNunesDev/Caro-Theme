import { __ } from '@wordpress/i18n';
import './view.js';

import { TextControl, TextareaControl } from '@wordpress/components';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import block from './block.json';

export default function Edit({ attributes, setAttributes }) {
	const { title, col1, col2, anchor } = attributes;

	return (
		<>
			<InspectorControls key='setting'>
				<Panel>
					<PanelBody title='Title' initialOpen={true}>
						<ul>
							<li>
								<TextControl
									label='Title'
									value={title}
									onChange={(val) =>
										setAttributes({ title: val })
									}
								/>
							</li>
						</ul>
					</PanelBody>
					<PanelBody title='Column 1' initialOpen={true}>
						<ul>
							<li>
								<TextControl
									label='Title'
									value={col1.title}
									onChange={(val) =>
										setAttributes({
											col1: { ...col1, title: val },
										})
									}
								/>
							</li>
							<li>
								<TextareaControl
									label='Content'
									help='Enter some text'
									value={col1.content}
									onChange={(val) =>
										setAttributes({
											col1: { ...col1, content: val },
										})
									}
								/>
							</li>
						</ul>
					</PanelBody>
					<PanelBody title='Column 2' initialOpen={true}>
						<ul>
							<li>
								<TextControl
									label='Title'
									value={col2.title}
									onChange={(val) =>
										setAttributes({
											col2: { ...col2, title: val },
										})
									}
								/>
							</li>
							<li>
								<TextareaControl
									label='Content'
									help='Enter some text'
									value={col2.content}
									onChange={(val) =>
										setAttributes({
											col2: { ...col2, content: val },
										})
									}
								/>
							</li>
						</ul>
					</PanelBody>
					<PanelBody title='Section ID' initialOpen={true}>
						<ul>
							<li>
								<TextControl
									label='ID'
									value={anchor ? anchor : ''}
									onChange={(val) =>
										setAttributes({ anchor: val })
									}
								/>
							</li>
						</ul>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...useBlockProps()}>
				<ServerSideRender block={block.name} attributes={attributes} />
			</div>
		</>
	);
}
