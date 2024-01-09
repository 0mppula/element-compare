import { IElementType } from '@/types/elements';
import { Card } from '../ui/card';

interface TableGapsProps {}

const TableGaps = ({}: TableGapsProps) => {
	// Span the empty space between the elements in the top 3 periods.
	const HydrogenHeliumGap = <div className="col-span-16 col-start-3 row-start-2" />;
	const BerylliumBoronGap = <div className="col-span-10 col-start-4 row-start-3" />;
	const MagnesiumAluminiumGap = <div className="col-span-10 col-start-4 row-start-4" />;

	const ElementColors: { [key in IElementType]: string } = {
		'alkali metal': 'bg-lime-200 dark:bg-lime-950 ',
		metalloid: 'bg-yellow-200 dark:bg-yellow-950 ',
		actinide: 'bg-orange-200 dark:bg-orange-950 ',
		'alkali earth metal': 'bg-red-200 dark:bg-red-950 ',
		'reactive non-metal': 'bg-blue-200 dark:bg-blue-950 ',
		'unknown type': 'bg-gray-200 dark:bg-gray-800 ',
		'transition metal': 'bg-violet-200 dark:bg-violet-950 ',
		'noble gas': 'bg-fuchsia-200 dark:bg-fuchsia-950 ',
		'post-transition metal': 'bg-teal-200 dark:bg-teal-950 ',
		lanthanide: 'bg-sky-200 dark:bg-sky-950 ',
	};

	// Spans the empty space that is allocated for the lanthanide and actinide elements seperator.
	const LathanideSeperatorCard = (
		<Card className={`${ElementColors['lanthanide']} col-start-4 row-start-7`} />
	);
	const ActinideSeperatorCard = (
		<Card className={`${ElementColors['actinide']} col-start-4 row-start-8`} />
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
