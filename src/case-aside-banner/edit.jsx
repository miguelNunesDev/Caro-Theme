import { __ } from '@wordpress/i18n';
import './view.js';

import { Button, Flex, FlexItem, TextControl } from '@wordpress/components';

import { MediaUpload } from '@wordpress/block-editor';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import block from './block.json';

export default function Edit({ attributes, setAttributes }) {
	const { title, bttn, thumbnail, anchor } = attributes;

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

					<PanelBody title='Button' initialOpen={true}>
						<ul>
							<li>
								<TextControl
									label='Text'
									value={bttn.text}
									onChange={(val) =>
										setAttributes({
											bttn: { ...bttn, text: val },
										})
									}
								/>
							</li>
							<li>
								<TextControl
									label='Button link'
									help='Enter some text'
									value={bttn.link}
									onChange={(val) =>
										setAttributes({
											bttn: { ...bttn, link: val },
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
