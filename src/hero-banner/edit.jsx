import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';

import { RotatorControl } from './components/RotatorControl';
import {
	TextControl,
	Panel,
	PanelBody,
	TextareaControl,
} from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import block from './block.json';
import { SortableBlock } from '../../js/modules/Sortables';
import { SocialControl } from './components/SocialControl';

export default function Edit({ attributes, setAttributes }) {
	const { rotators, title, content, socials } = attributes;

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
					<PanelBody title='Social media' initialOpen={true}>
						<SortableBlock
							items={socials}
							name='socials'
							placeholder={{
								icon: null,
								url: 'example.com',
							}}
							setAttributes={setAttributes}
							render={(props) => (
								<SocialControl
									{...props}
									key={`item-${props.index}`}
								/>
							)}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...useBlockProps()}>
				<ServerSideRender block={block.name} attributes={attributes} />
			</div>
		</>
	);
}
