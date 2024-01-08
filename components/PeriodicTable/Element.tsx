import { Card } from '@/components/ui/card';
import { actinidesAtomicNumbers, lanthanidesAtomicNumbers } from '@/constants';
import { IElement } from '@/types/elements';

interface ElementProps {
	element: IElement;
	nextElement: IElement | undefined;
}

const Element = ({ element, nextElement }: ElementProps) => {
	// Element period refers to its row in the periodic table.
	// Element group refers to its column in the periodic table.

	const isLanthanide = lanthanidesAtomicNumbers.some((an) => an === element.AtomicNumber);
	const isActinide = actinidesAtomicNumbers.some((an) => an === element.AtomicNumber);

	const isFirstLanthanide = element.AtomicNumber === lanthanidesAtomicNumbers[0];
	const isFirstActinide = element.AtomicNumber === actinidesAtomicNumbers[0];

	const isLastBeforeLanthanide = element.AtomicNumber === lanthanidesAtomicNumbers[0] - 1;
	const isLastBeforeActinide = element.AtomicNumber === actinidesAtomicNumbers[0] - 1;

	const elementRowStart = isActinide ? 9 : isLanthanide ? 8 : element.Period;

	const emptyColSpan =
		nextElement && +element.Group < 18 ? +(+nextElement.Group - +element.Group - 1) : null;

	// Tailwind CSS doesnt allow props to be used to build class names dynamically.
	const colSpanVariants: { [key: number]: string } = {
		10: 'col-span-10',
		11: 'col-span-11',
		12: 'col-span-12',
		13: 'col-span-13',
		14: 'col-span-14',
		15: 'col-span-15',
		16: 'col-span-16',
	};

	return (
		<>
			{/* The following div spans the empty space before the first element in either the 
      lanthanide or actinide elements. */}
			<div className={isFirstLanthanide || isFirstActinide ? 'col-span-3' : 'hidden'} />

			<Card
				className={`p-1 col-span-1 row-start-${elementRowStart} w-[74px] text-wrap text-[12px]`}
			>
				<div>
					<p className="flex justify-between items-center">{element.AtomicNumber}</p>
				</div>

				<h2 className="text-center scroll-m-2 text-xl font-semibold tracking-tight">
					{element.Symbol}
				</h2>

				<p className="text-center text-ellipsis overflow-hidden">{element.Element}</p>

				<p className="text-center">{element.AtomicMass}</p>
			</Card>

			{/* The following div spans the empty space that is allocated for the lanthanide and actinide elements seperator. */}
			{isLastBeforeLanthanide && <Card className="bg-green-500 min-w-[74px]" />}
			{isLastBeforeActinide && <Card className="bg-blue-500 min-w-[74px]" />}

			{/* The following div spans the empty space between the elements in the top 3 periods. */}
			{element.AtomicNumber <= 56 && (
				<div
					className={`${emptyColSpan ? `${colSpanVariants[emptyColSpan]}` : 'hidden'}`}
				/>
			)}
		</>
	);
};

export default Element;
