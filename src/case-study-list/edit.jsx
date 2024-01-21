import { __ } from '@wordpress/i18n';
import { useEffect, useState } from 'react';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import block from './block.json';

import { CaseStudiesControl } from './components/CaseStudyControl.jsx';
import { SortableBlock } from '../../js/modules/Sortables.js';

export default function Edit({ attributes, setAttributes }) {
	const { cases } = attributes;
	const [caseStudies, setCaseStudies] = useState([]);

	useEffect(() => {
		let origin = window.location.origin;
		origin = origin.includes('localhost') ? origin + '/caro' : origin;
		fetch(`${origin}/wp-json/wp/v2/case-study`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setCaseStudies(data);
			});
	}, []);

	return (
		<>
			<InspectorControls key='setting'>
				<Panel>
					<PanelBody title='Case studies' initialOpen={true}>
						{caseStudies.length ? (
							<SortableBlock
								items={cases}
								name='cases'
								placeholder={caseStudies[0].id}
								setAttributes={setAttributes}
								render={(props) => (
									<CaseStudiesControl
										{...props}
										options={caseStudies.map(
											(caseStudy) => ({
												id: caseStudy.id,
												label: caseStudy.title.rendered,
											})
										)}
										name='cases'
										key={`case-${props.index}`}
									/>
								)}
							/>
						) : (
							<p>Loading</p>
						)}
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...useBlockProps()}>
				<ServerSideRender block={block.name} attributes={attributes} />
			</div>
		</>
	);
}
