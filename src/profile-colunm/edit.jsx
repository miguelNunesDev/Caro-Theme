import { __ } from '@wordpress/i18n';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

import { Panel, PanelBody, TextareaControl, TextControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import block from './block.json';


export default function Edit({ attributes, setAttributes }) {
	const { title, content } = attributes;

	return (
		<>
			<InspectorControls key='setting'>
				<Panel>
					<PanelBody title='Contenido' initialOpen={true}>
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
							<li>
								<TextareaControl
									label='Content'
									help='Enter some text'
									value={content}
									onChange={(val) =>
										setAttributes({ content: val })
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
