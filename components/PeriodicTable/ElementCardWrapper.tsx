'use client';

import { ElementCardBgClasses, SelectedElementAfterBgClasses } from '@/constants';
import useElementsStore from '@/hooks/useElementsStore';
import { IElement } from '@/types/elements';
import React from 'react';
import { Button } from '../ui/button';
import { TooltipTrigger } from '../ui/tooltip';

interface ElementCardWrapperProps extends React.ComponentProps<typeof TooltipTrigger> {
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
	const isSelected = selectedElements.some((el) => el?.AtomicNumber === element.AtomicNumber);
	const isActinide = element.Type === 'actinide';
	const isLanthanide = element.Type === 'lanthanide';

	const selectedCount = selectedElements.reduce((acc, element) => {
		return acc + (element !== null ? 1 : 0);
	}, 0);

	const synchronizedAnimation =
		isSelected && selectedCount !== 2
			? 'before:animate-spin'
			: isSelected && selectedCount === 2
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

		const bothSelected = selectedElements.every((el) => el !== null);

		// If element is already selected, deselect it by replacing it with null.
		if (isSelected) {
			setSelectedElements((prev) =>
				prev.map((el) => (el?.AtomicNumber === element.AtomicNumber ? null : el))
			);
		}

		// If element is not yet selected, select it by replacing the first null element in the array.
		if (!isSelected && !bothSelected) {
			setSelectedElements((prev) => {
				const nullIndex = prev.findIndex((el) => el === null);
				const newSelectedElements = [...prev];

				newSelectedElements[nullIndex] = element;
				return newSelectedElements;
			});
		}

		// If both elements are selected and a third element is selected, reset the selected elements
		// array and select the new element.
		if (bothSelected && !isSelected) {
			const newEmptySelectedElements: (IElement | null)[] = [...selectedElements].map(
				(_) => null
			);

			newEmptySelectedElements[0] = element;

			setSelectedElements(newEmptySelectedElements);
		}
	};

	return (
		<TooltipTrigger asChild>
			<Button
				onClick={handleSelectElement}
				className={`rounded-lg text-card-foreground  block h-full w-full cursor-pointer border-none p-1 col-span-1 ${
					ElementCardBgClasses[element.Type]
				} ${ElementRowStarts[elementRowStart]} text-[12px] overflow-hidden relative ${
					isSelected ? isSelectedClasses : ''
				} ${
					isHighlighted
						? `before:absolute before:w-[80px] before:h-[134px] before:bg-neutral-950 before:dark:bg-neutral-50 before:top-[-22px] before:left-[-3px] after:absolute after:inset-[1.6px] after:rounded-md ${
								SelectedElementAfterBgClasses[element.Type]
						  }`
						: ''
				}`}
			>
				{children}
			</Button>
		</TooltipTrigger>
	);
};

export default ElementCardWrapper;
