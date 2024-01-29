import { __ } from '@wordpress/i18n';
import './view.js';

import { Button, Flex, FlexItem, TextControl } from '@wordpress/components';

import { MediaUpload } from '@wordpress/block-editor';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import block from './block.json';


export default function Edit({ attributes, setAttributes }) {
	const { desktop, mobile, height, title, anchor } = attributes;
	const imageCss = {
		overflow: 'hidden',
		width: '14rem',
		height: '15rem',
	};

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
					<PanelBody title='Desktop media' initialOpen={true}>
						<Flex>
							<FlexItem>
								<MediaUpload
									onSelect={(media) => {
										console.log(media);
										if (!media || !media.url) return;
										setAttributes({
											desktop: {
												id: media.id,
												src: media.url,
											},
										});
									}}
									type='image'
									value={desktop.id}
									className='p-3 bg-slate-300'
									render={({ open }) => (
										<Button onClick={open}>
											{desktop ? (
												<img
													style={imageCss}
													src={desktop.src}
												/>
											) : (
												'click here'
											)}
										</Button>
									)}
								/>
							</FlexItem>
							<FlexItem>
								{desktop ? 'Change media' : 'Select new Media'}
							</FlexItem>
						</Flex>
						<Flex>
							<FlexItem>
								<TextControl
									label='Alto'
									value={height.lg}
									onChange={(val) =>
										setAttributes({
											height: { ...height, lg: val },
										})
									}
								/>
							</FlexItem>
						</Flex>
					</PanelBody>
					<PanelBody title='Mobile media' initialOpen={true}>
						<Flex>
							<FlexItem>
								<MediaUpload
									onSelect={(media) => {
										console.log(media);
										if (!media || !media.url) return;
										setAttributes({
											mobile: {
												id: media.id,
												src: media.url,
											},
										});
									}}
									type='image'
									value={mobile.id}
									className='p-3 bg-slate-300'
									render={({ open }) => (
										<Button onClick={open}>
											{mobile ? (
												<img
													style={imageCss}
													src={mobile.src}
												/>
											) : (
												'click here'
											)}
										</Button>
									)}
								/>
							</FlexItem>
							<FlexItem>
								{mobile ? 'Change media' : 'Select new Media'}
							</FlexItem>
						</Flex>
						<Flex>
							<FlexItem>
								<TextControl
									label='Alto'
									value={height.sm}
									onChange={(val) =>
										setAttributes({
											height: { ...height, sm: val },
										})
									}
								/>
							</FlexItem>
						</Flex>
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
