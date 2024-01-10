import { IElementType } from '@/types/elements';
import { Card } from '../ui/card';

interface TableGapsProps {}

const TableGaps = ({}: TableGapsProps) => {
	// Span the empty space between the elements in the top 3 periods.
	const HydrogenHeliumGap = <div className="col-span-16 col-start-3 row-start-2" />;
	const BerylliumBoronGap = <div className="col-span-10 col-start-4 row-start-3" />;
	const MagnesiumAluminiumGap = <div className="col-span-10 col-start-4 row-start-4" />;

	const ElementTypeColors: Pick<{ [key in IElementType]: string }, 'actinide' | 'lanthanide'> = {
		actinide: 'bg-orange-400 dark:bg-orange-900',
		lanthanide: 'bg-sky-400 dark:bg-sky-800',
	};

	// Spans the empty space that is allocated for the lanthanide and actinide elements seperator.
	const LathanideSeperatorCard = (
		<Card className={`${ElementTypeColors['lanthanide']} col-start-4 row-start-7`} />
	);
	const ActinideSeperatorCard = (
		<Card className={`${ElementTypeColors['actinide']} col-start-4 row-start-8`} />
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
