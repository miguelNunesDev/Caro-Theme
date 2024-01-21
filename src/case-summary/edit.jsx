import { __ } from '@wordpress/i18n';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

import { Panel, PanelBody, TextControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import block from './block.json';
import { SortableBlock } from '../../js/modules/Sortables';
import { TeamControl } from './components/TeamControl';
import { LinksControl } from './components/LinksControl';
import { SkillsControl } from './components/SkillsControl';
import { ToolsControl } from './components/ToolsControl';

export default function Edit({ attributes, setAttributes }) {
	const { title, skills, tools, team, when, base, links, anchor } = attributes;

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
					<PanelBody title='When' initialOpen={true}>
						<ul>
							<li>
								<TextControl
									label='When'
									value={when}
									onChange={(val) =>
										setAttributes({ when: val })
									}
								/>
							</li>
						</ul>
					</PanelBody>
					<PanelBody title='Base' initialOpen={true}>
						<ul>
							<li>
								<TextControl
									label='Base'
									value={base}
									onChange={(val) =>
										setAttributes({ base: val })
									}
								/>
							</li>
						</ul>
					</PanelBody>
					<PanelBody title='Team' initialOpen={true}>
						<SortableBlock
							items={team}
							name='team'
							placeholder={{
								name: 'John Doe',
								job: 'Designer',
							}}
							setAttributes={setAttributes}
							render={(props) => (
								<TeamControl
									{...props}
									key={`team-${props.index}`}
									name='team'
								/>
							)}
						/>
					</PanelBody>
					<PanelBody title='Skills' initialOpen={true}>
						<SortableBlock
							items={skills}
							name='skills'
							placeholder='New skill'
							setAttributes={setAttributes}
							render={(props) => (
								<SkillsControl
									{...props}
									key={`skills-${props.index}`}
									name='skills'
								/>
							)}
						/>
					</PanelBody>
					<PanelBody title='Links' initialOpen={true}>
						<SortableBlock
							items={links}
							name='links'
							placeholder={{
								name: 'Google',
								url: 'www.google.com',
							}}
							setAttributes={setAttributes}
							render={(props) => (
								<LinksControl
									{...props}
									key={`links-${props.index}`}
									name='links'
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
