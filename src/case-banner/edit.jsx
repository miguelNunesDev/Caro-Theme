import { __ } from '@wordpress/i18n';
import './view.js';

import { Button, Flex, FlexItem } from '@wordpress/components';

import { MediaUpload } from '@wordpress/block-editor';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import block from './block.json';
import { ToolsControl } from './components/ToolsControl.jsx';
import { MenuControl } from './components/MenuControl.jsx';
import { SortableBlock } from '../../js/modules/Sortables.js';


export default function Edit({ attributes, setAttributes }) {
	const { tools, bg, menu } = attributes;

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
											bg: {
												id: media.id,
												src: media.url,
											},
										});
									}}
									type='image'
									value={bg.id}
									className='p-3 bg-slate-300'
									render={({ open }) => (
										<Button onClick={open}>
											{bg ? (
												<img src={bg.src} />
											) : (
												'click here'
											)}
										</Button>
									)}
								/>
							</FlexItem>
							<FlexItem>
								{bg ? 'Change media' : 'Select new Media'}
							</FlexItem>
						</Flex>
					</PanelBody>
					<PanelBody title='Tools' initialOpen={true}>
						<SortableBlock
							items={tools}
							name='tools'
							setAttributes={setAttributes}
							render={(props) => (
								<ToolsControl
									{...props}
									key={`tools-${props.index}`}
									name='tools'
								/>
							)}
						/>
					</PanelBody>
					<PanelBody title='Menu' initialOpen={true}>
						<SortableBlock
							items={menu}
							name='menu'
							setAttributes={setAttributes}
							placeholder={{ text: 'menu', url: '#section' }}
							render={(props) => (
								<MenuControl
									{...props}
									key={`menu-${props.index}`}
									name='menu'
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
