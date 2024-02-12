import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
} from '@wordpress/block-editor';

import {
	Panel,
	PanelBody,
	TextControl,
	Flex,
	FlexItem,
	Button,
} from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import block from './block.json';
import { SortableBlock } from '../../js/modules/Sortables';
import { ColorsControl } from './components/ColorsControl';

export default function Edit({ attributes, setAttributes }) {
	const { desktop, mobile, colors, anchor } = attributes;
	const imageCss = {
		overflow: 'hidden',
		width: '14rem',
		height: '15rem',
	};

	return (
		<>
			<InspectorControls key='setting'>
				<Panel>
					<PanelBody title='Colors' initialOpen={true}>
						<SortableBlock
							items={colors}
							name='colors'
							setAttributes={setAttributes}
							placeholder={{ text: 'Hex color', isDark: false }}
							render={(props) => (
								<ColorsControl
									{...props}
									key={`colors-${props.index}`}
									name='colors'
								/>
							)}
						/>
					</PanelBody>
					<PanelBody title='Desktop media' initialOpen={true}>
						<Flex>
							<FlexItem>
								<MediaUpload
									onSelect={(media) => {
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
									render={({ open }) => (
										<Button onClick={open}>
											{desktop?.src ? (
												<img
													style={imageCss}
													src={desktop?.src}
												/>
											) : (
												'click here'
											)}
										</Button>
									)}
								/>
							</FlexItem>
							<FlexItem>
								{desktop?.src
									? 'Change media'
									: 'Select new Media'}
							</FlexItem>
						</Flex>
					</PanelBody>
					<PanelBody title='Mobile media' initialOpen={true}>
						<Flex>
							<FlexItem>
								<MediaUpload
									onSelect={(media) => {
										if (!media || !media.url) return;
										setAttributes({
											mobile: {
												id: media.id,
												src: media.url,
											},
										});
									}}
									type='image'
									value={mobile?.id}
									render={({ open }) => (
										<Button onClick={open}>
											{mobile?.src ? (
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
								{mobile?.src
									? 'Change media'
									: 'Select new Media'}
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
