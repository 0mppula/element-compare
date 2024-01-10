'use client';

import { ElementTypeColors, ElementTypeHighlightClasses } from '@/constants';
import useElementsStore from '@/hooks/useElementsStore';
import { IElement } from '@/types/elements';
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
