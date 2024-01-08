import React from 'react';
import elements from '@/assets/data/elements.json';
import Element from './Element';
import { actinidesAtomicNumbers, lanthanidesAtomicNumbers } from '@/constants';

const PeriodicTable = () => {
	const nonLanthanideActinideElements = elements.filter(
		(el) =>
			!lanthanidesAtomicNumbers.some((an) => an === el.AtomicNumber) &&
			!actinidesAtomicNumbers.some((an) => an === el.AtomicNumber)
	);

	const lanthadineAndActinideElements = elements.filter(
		(el) =>
			lanthanidesAtomicNumbers.some((an) => an === el.AtomicNumber) ||
			actinidesAtomicNumbers.some((an) => an === el.AtomicNumber)
	);

	const reOrderedElements = [...nonLanthanideActinideElements, ...lanthadineAndActinideElements];

	return (
		<div className="grid grid-cols-18 grid-rows-9 gap-1 overflow-x-auto min-w-[1400px]">
			{reOrderedElements.map((element, i) => (
				<Element
					key={`${element.Element}`}
					element={element}
					nextElement={elements[i + 1]}
				/>
			))}
		</div>
	);
};

export default PeriodicTable;
