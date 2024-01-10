'use client';

import useElementsStore from '@/hooks/useElementsStore';
import { IElement, IElementType } from '@/types/elements';
import React from 'react';
import { Card } from '../ui/card';

interface ElementCardWrapperProps extends React.ComponentProps<typeof Card> {
	element: IElement;
}

const ElementCardWrapper = ({ children, element }: ElementCardWrapperProps) => {
	const { highlightedElementsType } = useElementsStore();

	const isHighlighted = element.Type === highlightedElementsType;
	const isActinide = element.Type === 'actinide';
	const isLanthanide = element.Type === 'lanthanide';

	const HEADER_ROW_OFFSET = 1;
	const BOTTOM_ELEMENTS_SEPERATOR_ROW_OFFSET = 1;
	const elementRowStart = isActinide
		? 9 + HEADER_ROW_OFFSET + BOTTOM_ELEMENTS_SEPERATOR_ROW_OFFSET
		: isLanthanide
		? 8 + HEADER_ROW_OFFSET + BOTTOM_ELEMENTS_SEPERATOR_ROW_OFFSET
		: element.Period + HEADER_ROW_OFFSET;

	// Tailwind CSS classes cannot be dynamically generated, so a map is used to map the row start
	// value to the appropriate class.
	const ElementTypeColors: { [key in IElementType]: string } = {
		'alkali metal': 'bg-lime-400 dark:bg-lime-800',
		metalloid: 'bg-yellow-400 dark:bg-yellow-900',
		actinide: 'bg-orange-400 dark:bg-orange-900',
		'alkali earth metal': 'bg-red-400 dark:bg-red-800',
		'reactive non-metal': 'bg-blue-400 dark:bg-blue-800',
		'unknown type': 'bg-gray-400 dark:bg-gray-700',
		'transition metal': 'bg-violet-400 dark:bg-violet-800',
		'noble gas': 'bg-fuchsia-400 dark:bg-fuchsia-800',
		'post-transition metal': 'bg-teal-400 dark:bg-teal-800',
		lanthanide: 'bg-sky-400 dark:bg-sky-800',
	};

	const ElementTypeHighlightClasses: { [key in IElementType]: string } = {
		'alkali metal':
			'before:to-lime-400 before:dark:to-lime-800 after:bg-lime-400 after:dark:bg-lime-800',
		metalloid:
			'before:to-yellow-400 before:dark:to-yellow-900 after:bg-yellow-400 after:dark:bg-yellow-900',
		actinide:
			'before:to-orange-400 before:dark:to-orange-900 after:bg-orange-400 after:dark:bg-orange-900',
		'alkali earth metal':
			'before:to-red-400 before:dark:to-red-800 after:bg-red-400 after:dark:bg-red-800',
		'reactive non-metal':
			'before:to-blue-400 before:dark:to-blue-800 after:bg-blue-400 after:dark:bg-blue-800',
		'unknown type':
			'before:to-gray-400 before:dark:to-gray-700 after:bg-gray-400 after:dark:bg-gray-700',
		'transition metal':
			'before:to-violet-400 before:dark:to-violet-800 after:bg-violet-400 after:dark:bg-violet-800',
		'noble gas':
			'before:to-fuchsia-400 before:dark:to-fuchsia-800 after:bg-fuchsia-400 after:dark:bg-fuchsia-800',
		'post-transition metal':
			'before:to-teal-400 before:dark:to-teal-800 after:bg-teal-400 after:dark:bg-teal-800',
		lanthanide:
			'before:to-sky-400 before:dark:to-sky-800 after:bg-sky-400 after:dark:bg-sky-800',
	};

	const ElementRowStarts: { [key: number]: string } = {
		2: 'row-start-2',
		3: 'row-start-3',
		4: 'row-start-4',
		5: 'row-start-5',
		6: 'row-start-6',
		7: 'row-start-7',
		8: 'row-start-8',
		10: 'row-start-10',
		11: 'row-start-11',
	};

	return (
		<Card
			className={`border-none p-1 col-span-1 ${ElementTypeColors[element.Type]} ${
				ElementRowStarts[elementRowStart]
			} text-[12px] overflow-hidden ${
				isHighlighted
					? `relative before:absolute before:w-[120px] before:h-[120px] before:bg-gradient-to-r before:from-neutral-950 before:dark:from-neutral-50 before:inset-y-[-10px] before:inset-x-[-25px] before:animate-spin after:absolute after:inset-[2px] after:rounded-md ${
							ElementTypeHighlightClasses[element.Type]
					  }`
					: ''
			}`}
		>
			{children}
		</Card>
	);
};

export default ElementCardWrapper;
