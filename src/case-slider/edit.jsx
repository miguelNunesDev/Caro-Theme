import { __ } from '@wordpress/i18n';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

import { Panel, PanelBody, TextControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import block from './block.json';
import { SortableBlock } from '../../js/modules/Sortables';
import { ToolsControl } from '../profile-details/components/ToolsControl';

export default function Edit({ attributes, setAttributes }) {
	const { imgs, anchor } = attributes;

	return (
		<>
			<InspectorControls key='setting'>
				<Panel>
					<PanelBody title='Images slide' initialOpen={true}>
						<SortableBlock
							items={imgs}
							name='imgs'
							setAttributes={setAttributes}
							render={(props) => (
								<ToolsControl
									{...props}
									key={`imgs-${props.index}`}
									name='imgs'
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
