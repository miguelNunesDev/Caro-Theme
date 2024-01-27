import { __ } from '@wordpress/i18n';
import './view.js';

import { Button, Flex, FlexItem, TextControl, TextareaControl } from '@wordpress/components';

import { MediaUpload } from '@wordpress/block-editor';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import block from './block.json';

export default function Edit({ attributes, setAttributes }) {
	const { title, bttn, subtitle, content, anchor, thumbnail } = attributes;

	return (
		<>
			<InspectorControls key='setting'>
				<Panel>
					<PanelBody title='Image Thumbnail' initialOpen={true}>
						<Flex>
							<FlexItem>
								<MediaUpload
									onSelect={(media) => {
										console.log(media);
										if (!media || !media.url) return;
										setAttributes({
											thumbnail: {
												id: media.id,
												src: media.url,
											},
										});
									}}
									type='image'
									value={thumbnail.id}
									className='p-3 bg-slate-300 img-box'
									render={({ open }) => (
										<Button onClick={open}>
											{thumbnail ? (
												<img src={thumbnail.src} />
											) : (
												'click here'
											)}
										</Button>
									)}
								/>
							</FlexItem>
							<FlexItem>
								{thumbnail
									? 'Change media'
									: 'Select new Media'}
							</FlexItem>
						</Flex>
					</PanelBody>

					<PanelBody title='Text content' initialOpen={true}>
						<ul>
							<li>
								<TextControl
									label='Title'
									value={title}
									onChange={(val) =>
										setAttributes({ title: val })
									}
								/>
								<hr />
							</li>
							<li>
								<TextControl
									label='Subtitle'
									value={subtitle}
									onChange={(val) =>
										setAttributes({
											subtitle: val,
										})
									}
								/>
								<hr />
							</li>
							<li>
								<TextareaControl
									label='Content'
									value={content}
									onChange={(val) =>
										setAttributes({
											content: val,
										})
									}
								/>
								<hr />
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
