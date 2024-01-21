import { __ } from '@wordpress/i18n';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

import { Panel, PanelBody } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import block from './block.json';
import { SortableBlock } from '../../js/modules/Sortables';
import { EducationControl } from '../profile-details/components/EducationControl';
import { ExperienceControl } from '../profile-details/components/ExperienceControl';
import { LanguagesControl } from '../profile-details/components/LanguagesControl';
import { SkillsControl } from '../profile-details/components/SkillsControl';
import { ToolsControl } from '../profile-details/components/ToolsControl';

export default function Edit({ attributes, setAttributes }) {
	const { education, skills, tools, languages, experience } = attributes;

	console.log(education);
	return (
		<>
			<InspectorControls key='setting'>
				<Panel>
					<PanelBody title='Education' initialOpen={true}>
						<SortableBlock
							items={education}
							name='education'
							placeholder={{
								title: 'Title',
								content: 'Graduated in X',
							}}
							setAttributes={setAttributes}
							render={(props) => (
								<EducationControl
									{...props}
									key={`education-${props.index}`}
									name='education'
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
					<PanelBody title='Languages' initialOpen={true}>
						<SortableBlock
							items={languages}
							name='languages'
							placeholder={{ name: 'Spanish', level: 'Beginner' }}
							setAttributes={setAttributes}
							render={(props) => (
								<LanguagesControl
									{...props}
									key={`languages-${props.index}`}
									name='languages'
								/>
							)}
						/>
					</PanelBody>
					<PanelBody title='Experience' initialOpen={true}>
						<SortableBlock
							items={experience}
							name='experience'
							placeholder={{
								title: 'Designer',
								comany: 'Company Name',
								details: 'details',
							}}
							setAttributes={setAttributes}
							render={(props) => (
								<ExperienceControl
									{...props}
									key={`experience-${props.index}`}
									name='experience'
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
