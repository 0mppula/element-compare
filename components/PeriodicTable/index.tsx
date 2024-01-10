import { elements } from '@/assets/data/elements';
import { useMemo } from 'react';
import Element from './Element';
import TableGaps from './TableGaps';
import TableHeaders from './TableHeaders';
import Legend from './Legend';

const PeriodicTable = () => {
	// Element period refers to its row in the periodic table.
	// Element group refers to its column in the periodic table.

	const nonLanthanideActinideElements = useMemo(
		() => elements.filter((el) => el.Type !== 'lanthanide' && el.Type !== 'actinide'),
		[elements]
	);

	const lanthanideAndActinideElements = useMemo(
		() => elements.filter((el) => el.Type === 'lanthanide' || el.Type === 'actinide'),
		[elements]
	);

	const reOrderedElements = [...nonLanthanideActinideElements, ...lanthanideAndActinideElements];

	return (
		<div className="gap-1 grid grid-cols-[32px_repeat(18,_minmax(0,_1fr))] grid-rows-[auto_repeat(7,_minmax(0,_1fr))_auto_1fr_1fr]">
			<TableHeaders />

			<TableGaps />

			{reOrderedElements.map((element) => (
				<Element key={`element-card-${element.Element}`} element={element} />
			))}

			<Legend />
		</div>
	);
};

export default PeriodicTable;
