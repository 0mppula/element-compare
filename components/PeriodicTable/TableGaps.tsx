'use client';

import { IElementType } from '@/types/elements';
import { Card } from '../ui/card';
import useElementsStore from '@/hooks/useElementsStore';

interface TableGapsProps {}

const TableGaps = ({}: TableGapsProps) => {
	const { highlightedElementsType } = useElementsStore();

	// Span the empty space between the elements in the top 3 periods.
	const HydrogenHeliumGap = <div className="col-span-16 col-start-3 row-start-2" />;
	const BerylliumBoronGap = <div className="col-span-10 col-start-4 row-start-3" />;
	const MagnesiumAluminiumGap = <div className="col-span-10 col-start-4 row-start-4" />;

	const ElementTypeColors: Pick<{ [key in IElementType]: string }, 'actinide' | 'lanthanide'> = {
		actinide: 'bg-orange-400 dark:bg-orange-900',
		lanthanide: 'bg-sky-400 dark:bg-sky-800',
	};

	const ElementTypeHighlightClasses: Pick<
		{ [key in IElementType]: string },
		'actinide' | 'lanthanide'
	> = {
		actinide:
			'before:to-orange-400 before:dark:to-orange-900 after:bg-orange-400 after:dark:bg-orange-900',
		lanthanide:
			'before:to-sky-400 before:dark:to-sky-800 after:bg-sky-400 after:dark:bg-sky-800',
	};

	// Spans the empty space that is allocated for the lanthanide and actinide elements seperator.
	const LathanideSeperatorCard = (
		<Card
			className={`overflow-hidden ${ElementTypeColors['lanthanide']} ${
				highlightedElementsType === 'lanthanide'
					? `relative before:absolute before:w-[120px] before:h-[120px] before:bg-gradient-to-r before:from-neutral-950 before:dark:from-neutral-50 before:inset-y-[-10px] before:inset-x-[-25px] before:animate-spin after:absolute after:inset-[2px] after:rounded-md ${ElementTypeHighlightClasses['lanthanide']}`
					: ''
			} col-start-4 row-start-7`}
		/>
	);

	const ActinideSeperatorCard = (
		<Card
			className={`overflow-hidden ${ElementTypeColors['actinide']} ${
				highlightedElementsType === 'actinide'
					? `relative before:absolute before:w-[120px] before:h-[120px] before:bg-gradient-to-r before:from-neutral-950 before:dark:from-neutral-50 before:inset-y-[-10px] before:inset-x-[-25px] before:animate-spin after:absolute after:inset-[2px] after:rounded-md ${ElementTypeHighlightClasses['actinide']}`
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
			{HydrogenHeliumGap}
			{BerylliumBoronGap}
			{MagnesiumAluminiumGap}

			{LathanideSeperatorCard}
			{ActinideSeperatorCard}

			{LanthanideRightGap}
			{ActinideRightGap}
			{BottomElementsGap}
		</>
	);
};

export default TableGaps;
