'use client';

import { ElementTypeColors, SelectedElementAfterBgClasses } from '@/constants';
import useElementsStore from '@/hooks/useElementsStore';
import { IElement } from '@/types/elements';
import React from 'react';
import { Card } from '../ui/card';

interface ElementCardWrapperProps extends React.ComponentProps<typeof Card> {
	element: IElement;
}

const ElementCardWrapper = ({ children, element }: ElementCardWrapperProps) => {
	const {
		highlightedElementsType,
		setHighlightedElementsType,
		selectedElements,
		setSelectedElements,
	} = useElementsStore();

	const isHighlighted = element.Type === highlightedElementsType;
	const isSelected = selectedElements.some((el) => el.AtomicNumber === element.AtomicNumber);
	const isActinide = element.Type === 'actinide';
	const isLanthanide = element.Type === 'lanthanide';

	const synchronizedAnimation =
		isSelected && selectedElements.length !== 2
			? 'before:animate-spin'
			: isSelected && selectedElements.length === 2
			? 'before:animate-spin2'
			: '';

	const isSelectedClasses = `before:absolute before:w-[36px] before:h-[134px] before:bg-neutral-950 before:dark:bg-neutral-50 before:top-[-22px] before:left-[18px] ${synchronizedAnimation} after:absolute after:inset-[1.6px] after:rounded-md ${
		SelectedElementAfterBgClasses[element.Type]
	}`;

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

	const handleSelectElement = () => {
		setHighlightedElementsType(null);

		if (selectedElements?.length < 2 && !isSelected) {
			setSelectedElements((prev) => [...prev, element]);
		}

		if (selectedElements?.length === 2) {
			setSelectedElements([element]);
		}
	};

	return (
		<Card
			onClick={handleSelectElement}
			className={`border-none p-1 col-span-1 ${ElementTypeColors[element.Type]} ${
				ElementRowStarts[elementRowStart]
			} text-[12px] overflow-hidden relative ${isSelected ? isSelectedClasses : ''} ${
				isHighlighted
					? `before:absolute before:w-[80px] before:h-[134px] before:bg-neutral-950 before:dark:bg-neutral-50 before:top-[-22px] before:left-[-3px] after:absolute after:inset-[1.6px] after:rounded-md ${
							SelectedElementAfterBgClasses[element.Type]
					  }`
					: ''
			}`}
		>
			{children}
		</Card>
	);
};

export default ElementCardWrapper;
