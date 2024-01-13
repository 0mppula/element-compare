'use client';

import { ElementCardBgClasses, SelectedElementAfterBgClasses } from '@/constants';
import useElementsStore from '@/hooks/useElementsStore';
import { Card } from '../ui/card';

const TableGaps = () => {
	const { highlightedElementsType } = useElementsStore();

	// Span the empty space between the elements in the top 3 periods.
	const HydrogenHeliumLeftGap = <div className="col-start-3 row-start-2" />;
	const HydrogenHeliumRightGap = <div className="col-start-14 col-span-5 row-start-2" />;

	// Spans the empty space that is allocated for the lanthanide and actinide elements seperator.
	const LathanideSeperatorCard = (
		<Card
			className={`pointer-events-none overflow-hidden relative ${
				ElementCardBgClasses['lanthanide']
			} ${
				highlightedElementsType === 'lanthanide'
					? `before:absolute before:w-[80px] before:h-[134px] before:bg-neutral-950 before:dark:bg-neutral-50 before:top-[-22px] before:left-[-3px] after:absolute after:inset-[1.6px] after:rounded-md ${SelectedElementAfterBgClasses['lanthanide']}`
					: ''
			} col-start-4 row-start-7`}
		/>
	);

	const ActinideSeperatorCard = (
		<Card
			className={`pointer-events-none overflow-hidden relative ${
				ElementCardBgClasses['actinide']
			} ${
				highlightedElementsType === 'actinide'
					? `before:absolute before:w-[80px] before:h-[134px] before:bg-neutral-950 before:dark:bg-neutral-50 before:top-[-22px] before:left-[-3px] after:absolute after:inset-[1.6px] after:rounded-md ${SelectedElementAfterBgClasses['actinide']}`
					: ''
			} col-start-4 row-start-8`}
		/>
	);

	// Creates a small gap between the bottom 2 rows of the elements.
	const BottomElementsGap = <div className="row-start-9 col-span-19 h-1" />;

	// Spans the cap on the left side of lanthanide elements.
	const LanthanideRightGap = <div className="col-span-4 row-start-10 col-start-1" />;
	// Spans the cap on the left side of actinide elements.
	const ActinideRightGap = <div className="col-span-4 row-start-11 col-start-1" />;

	return (
		<>
			{HydrogenHeliumLeftGap}
			{HydrogenHeliumRightGap}

			{LathanideSeperatorCard}
			{ActinideSeperatorCard}

			{LanthanideRightGap}
			{ActinideRightGap}
			{BottomElementsGap}
		</>
	);
};

export default TableGaps;
