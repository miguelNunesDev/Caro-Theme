import { __ } from '@wordpress/i18n';
import './view.js';

import { Button, Flex, FlexItem, TextControl } from '@wordpress/components';

import { MediaUpload } from '@wordpress/block-editor';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import block from './block.json';
import { ToolsControl } from './components/ToolsControl.jsx';
import { SortableBlock } from '../../js/modules/Sortables.js';

export default function Edit({ attributes, setAttributes }) {
	const { title, desktop, mobile, anchor } = attributes;

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
					<PanelBody title='Desktop Media' initialOpen={true}>
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
												<img src={desktop.src} />
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
					</PanelBody>
					<PanelBody title='Mobile Media' initialOpen={true}>
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
												<img src={mobile.src} />
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
