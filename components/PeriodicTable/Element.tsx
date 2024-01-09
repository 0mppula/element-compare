import { Card } from '@/components/ui/card';
import { actinidesAtomicNumbers, lanthanidesAtomicNumbers } from '@/constants';
import { IElement } from '@/types/elements';

interface ElementProps {
	element: IElement;
}

const Element = ({ element }: ElementProps) => {
	const isLanthanide = lanthanidesAtomicNumbers.some((an) => an === element.AtomicNumber);
	const isActinide = actinidesAtomicNumbers.some((an) => an === element.AtomicNumber);

	const HEADER_ROW_OFFSET = 1;
	const BOTTOM_ELEMENTS_SEPERATOR_ROW_OFFSET = 1;
	const elementRowStart = isActinide
		? 9 + HEADER_ROW_OFFSET + BOTTOM_ELEMENTS_SEPERATOR_ROW_OFFSET
		: isLanthanide
		? 8 + HEADER_ROW_OFFSET + BOTTOM_ELEMENTS_SEPERATOR_ROW_OFFSET
		: element.Period + HEADER_ROW_OFFSET;

	return (
		<>
			<Card
				className={`p-1 col-span-1 row-start-${elementRowStart} overflow-hidden text-[12px]`}
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
		</>
	);
};

export default Element;
