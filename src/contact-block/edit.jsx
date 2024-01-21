import { __ } from '@wordpress/i18n';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, TextControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import block from './block.json';
import { SocialControl } from './components/SocialControl.jsx';
import { SortableBlock } from '../../js/modules/Sortables.js';
import { RotatorControl } from './components/RotatorControl';

export default function Edit({ attributes, setAttributes }) {
	const { socials, title, rotators } = attributes;

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
					<PanelBody title='Text Rotator' initialOpen={true}>
						<SortableBlock
							items={rotators}
							name='rotators'
							placeholder='New Text'
							setAttributes={setAttributes}
							render={(props) => (
								<RotatorControl
									{...props}
									key={`item-${props.index}`}
								/>
							)}
						/>
					</PanelBody>
					<PanelBody title='Social networks' initialOpen={true}>
						{socials.length ? (
							<SortableBlock
								items={socials}
								name='socials'
								placeholder={{
									icon: null,
									url: 'example.com',
									text: '/social',
								}}
								setAttributes={setAttributes}
								render={(props) => (
									<SocialControl
										{...props}
										name='socials'
										key={`social-${props.index}`}
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
