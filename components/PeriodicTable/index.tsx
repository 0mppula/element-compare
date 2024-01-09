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
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '32px repeat(18, minmax(0, 1fr))',
				gridTemplateRows: 'auto repeat(7, minmax(0, 1fr)) auto 1fr 1fr 1fr',
			}}
			className="gap-1"
		>
			<TableHeaders />

			<TableGaps />

			{reOrderedElements.map((element) => (
				<Element key={`${element.Element}`} element={element} />
			))}
		</div>
	);
};

export default PeriodicTable;
