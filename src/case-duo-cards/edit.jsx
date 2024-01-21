import { __ } from '@wordpress/i18n';

import {
	TextControl,
	TextareaControl,
	Flex,
	FlexItem,
	Button,
} from '@wordpress/components';

import { useEffect, useState } from 'react';

import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
} from '@wordpress/block-editor';
import { Panel, PanelBody } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import block from './block.json';
import { DetailsControl } from './components/DetailsControl.jsx';
import { KeywordsControl } from './components/KeywordsControl.jsx';
import { SortableBlock } from '../../js/modules/Sortables.js';

export default function Edit({ attributes, setAttributes }) {
	const { card1, card2 } = attributes;
	const [tempCard1, settempCard1] = useState(card1);
	const [tempCard2, setTempCard2] = useState(card2);

	useEffect(() => {
		setAttributes({
			card1: { ...card1, ...tempCard1 },
		});
	}, [tempCard1]);

	useEffect(() => {
		setAttributes({
			card2: { ...card2, ...tempCard2 },
		});
	}, [tempCard2]);

	console.log(card2, card2);
	return (
		<>
			<InspectorControls key='setting'>
				<Panel>
					<PanelBody title='Card 1' initialOpen={true}>
						<ul>
							<li>
								<Flex>
									<FlexItem>
										<MediaUpload
											onSelect={(media) => {
												console.log(media);
												if (!media || !media.url)
													return;
												const newCard = card1;
												newCard.img = {
													id: media.id,
													src: media.url,
												};
												setAttributes({
													card1: newCard,
												});
											}}
											type='image'
											value={card1.img.id}
											render={({ open }) => (
												<Button onClick={open}>
													{card1.img ? (
														<img
															src={card1.img.src}
														/>
													) : (
														'click here'
													)}
												</Button>
											)}
										/>
									</FlexItem>
									<FlexItem>
										{card1.img
											? 'Change media'
											: 'Select new Media'}
									</FlexItem>
								</Flex>
								<br />
							</li>
							<li>
								<TextControl
									label='Title'
									value={card1.title}
									onChange={(val) =>
										setAttributes({
											card1: { ...card1, title: val },
										})
									}
								/>
							</li>
							<li>
								<TextControl
									label='Name'
									value={card1.name}
									onChange={(val) =>
										setAttributes({
											card1: { ...card1, name: val },
										})
									}
								/>
							</li>
							<li>
								<SortableBlock
									items={tempCard1.details}
									name='details'
									placeholder={{
										title: 'title',
										content: 'content',
									}}
									setAttributes={settempCard1}
									render={(props) => (
										<DetailsControl
											{...props}
											key={`details-${props.index}`}
											name='details'
										/>
									)}
								/>
							</li>
							<li>
								<TextareaControl
									label='Content'
									help='Enter some text'
									value={card1.content}
									onChange={(val) =>
										setAttributes({
											card1: { ...card1, content: val },
										})
									}
								/>
							</li>
							<li>
								<SortableBlock
									items={tempCard1.keywords}
									name='keywords'
									placeholder={'keyword'}
									setAttributes={settempCard1}
									render={(props) => (
										<KeywordsControl
											{...props}
											key={`keyword-${props.index}`}
											name='keywords'
										/>
									)}
								/>
							</li>
						</ul>
					</PanelBody>
					<PanelBody title='Card 2' initialOpen={true}>
						<ul>
							<li>
								<Flex>
									<FlexItem>
										<MediaUpload
											onSelect={(media) => {
												console.log(media);
												if (!media || !media.url)
													return;
												const newCard = card2;
												newCard.img = {
													id: media.id,
													src: media.url,
												};
												setAttributes({
													card2: newCard,
												});
											}}
											type='image'
											value={card2.img.id}
											render={({ open }) => (
												<Button onClick={open}>
													{card2.img ? (
														<img
															src={card2.img.src}
														/>
													) : (
														'click here'
													)}
												</Button>
											)}
										/>
									</FlexItem>
									<FlexItem>
										{card2.img
											? 'Change media'
											: 'Select new Media'}
									</FlexItem>
								</Flex>
								<br />
							</li>
							<li>
								<TextControl
									label='Title'
									value={card2.title}
									onChange={(val) =>
										setAttributes({
											card2: { ...card2, title: val },
										})
									}
								/>
							</li>
							<li>
								<TextControl
									label='Name'
									value={card2.name}
									onChange={(val) =>
										setAttributes({
											card2: { ...card2, name: val },
										})
									}
								/>
							</li>
							<li>
								<SortableBlock
									items={tempCard2.details}
									name='details'
									placeholder={{
										title: 'title',
										content: 'content',
									}}
									setAttributes={setTempCard2}
									render={(props) => (
										<DetailsControl
											{...props}
											key={`details-${props.index}`}
											name='details'
										/>
									)}
								/>
							</li>
							<li>
								<TextareaControl
									label='Content'
									help='Enter some text'
									value={card2.content}
									onChange={(val) =>
										setAttributes({
											card2: { ...card2, content: val },
										})
									}
								/>
							</li>
							<li>
								<SortableBlock
									items={tempCard2.keywords}
									name='keywords'
									placeholder={'keyword'}
									setAttributes={setTempCard2}
									render={(props) => (
										<KeywordsControl
											{...props}
											key={`keyword-${props.index}`}
											name='keywords'
										/>
									)}
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
