import elements from '@/assets/data/elements.json';
import { actinidesAtomicNumbers, lanthanidesAtomicNumbers } from '@/constants';
import { useMemo } from 'react';
import Element from './Element';
import TableGaps from './TableGaps';
import TableHeaders from './TableHeaders';

const PeriodicTable = () => {
	// Element period refers to its row in the periodic table.
	// Element group refers to its column in the periodic table.

	const nonLanthanideActinideElements = useMemo(
		() =>
			elements.filter(
				(el) =>
					!lanthanidesAtomicNumbers.some((an) => an === el.AtomicNumber) &&
					!actinidesAtomicNumbers.some((an) => an === el.AtomicNumber)
			),
		[elements, lanthanidesAtomicNumbers, actinidesAtomicNumbers]
	);

	const lanthanideAndActinideElements = useMemo(
		() =>
			elements.filter(
				(el) =>
					lanthanidesAtomicNumbers.some((an) => an === el.AtomicNumber) ||
					actinidesAtomicNumbers.some((an) => an === el.AtomicNumber)
			),
		[elements, lanthanidesAtomicNumbers, actinidesAtomicNumbers]
	);

	const reOrderedElements = [...nonLanthanideActinideElements, ...lanthanideAndActinideElements];

	return (
		<div className="gap-1 grid grid-cols-[32px_repeat(18,_minmax(0,_1fr))] grid-rows-[auto_repeat(7,_minmax(0,_1fr))_auto_1fr_1fr]">
			<TableHeaders />

			<TableGaps />

			{reOrderedElements.map((element) => (
				<Element key={`${element.Element}`} element={element} />
			))}
		</div>
	);
};

export default PeriodicTable;
