import { __ } from '@wordpress/i18n';
import './view.js';

import {
	Button,
	Flex,
	FlexItem,
	TextControl,
	TextareaControl,
} from '@wordpress/components';

import { MediaUpload } from '@wordpress/block-editor';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import block from './block.json';
import { SortableBlock } from '../../js/modules/Sortables.js';
import { DetailsControl } from './components/DetailsControl.jsx';

export default function Edit({ attributes, setAttributes }) {
	const { title, content, img, anchor, details } = attributes;

	return (
		<>
			<InspectorControls key='setting'>
				<Panel>
					<PanelBody title='Background Media' initialOpen={true}>
						<Flex>
							<FlexItem>
								<MediaUpload
									onSelect={(media) => {
										console.log(media);
										if (!media || !media.url) return;
										setAttributes({
											img: {
												id: media.id,
												src: media.url,
											},
										});
									}}
									type='image'
									value={img.id}
									className='p-3 bg-slate-300'
									render={({ open }) => (
										<Button onClick={open}>
											{img ? (
												<img src={img.src} />
											) : (
												'click here'
											)}
										</Button>
									)}
								/>
							</FlexItem>
							<FlexItem>
								{img ? 'Change media' : 'Select new Media'}
							</FlexItem>
						</Flex>
					</PanelBody>
					<PanelBody title='Text' initialOpen={true}>
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
							<li>
								<TextareaControl
									label='Content'
									value={content ? content : ''}
									onChange={(val) =>
										setAttributes({ content: val })
									}
								/>
							</li>
						</ul>
					</PanelBody>
					<PanelBody title='Details' initialOpen={true}>
						<SortableBlock
							items={details}
							name='details'
							placeholder={{ data: '', title: '' }}
							setAttributes={setAttributes}
							render={(props) => (
								<DetailsControl
									{...props}
									name='details'
									key={`details-${props.index}`}
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
