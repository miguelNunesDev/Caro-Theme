import { __ } from '@wordpress/i18n';
import './view.js';
import { useEffect, useState } from 'react';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, TextControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import block from './block.json';
import { WorkflowControl } from './components/WorkflowControl.jsx';
import { SortableBlock } from '../../js/modules/Sortables.js';

export default function Edit({ attributes, setAttributes }) {
	const { workflows, title, anchor } = attributes;

	return (
		<>
			<InspectorControls key='setting'>
				<Panel>
					<PanelBody title='Title' initialOpen={true}>
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
					<PanelBody title='Workflows' initialOpen={true}>
						<SortableBlock
							items={workflows}
							name='workflows'
							placeholder={{
								name: 'Name',
								content: 'Content',
							}}
							setAttributes={setAttributes}
							render={(props) => (
								<WorkflowControl
									{...props}
									name='workflows'
									key={`workflow-${props.index}`}
								/>
							)}
						/>
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
