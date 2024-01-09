import { Card } from '@/components/ui/card';
import { ElementColors } from '@/constants';
import { IElement } from '@/types/elements';

interface ElementProps {
	element: IElement;
}

const Element = ({ element }: ElementProps) => {
	const isActinide = element.Type === 'actinide';
	const isLanthanide = element.Type === 'lanthanide';

	const HEADER_ROW_OFFSET = 1;
	const BOTTOM_ELEMENTS_SEPERATOR_ROW_OFFSET = 1;
	const elementRowStart = isActinide
		? 9 + HEADER_ROW_OFFSET + BOTTOM_ELEMENTS_SEPERATOR_ROW_OFFSET
		: isLanthanide
		? 8 + HEADER_ROW_OFFSET + BOTTOM_ELEMENTS_SEPERATOR_ROW_OFFSET
		: element.Period + HEADER_ROW_OFFSET;

	// Tailwind CSS classes cannot be dynamically generated, so a map is used to map the row start
	// value to the appropriate class.
	const ElementRowStarts: { [key: number]: string } = {
		2: 'row-start-2',
		3: 'row-start-3',
		4: 'row-start-4',
		5: 'row-start-5',
		6: 'row-start-6',
		7: 'row-start-7',
		8: 'row-start-8',
		10: 'row-start-10',
		11: 'row-start-11',
	};

	return (
		<Card
			className={`p-1 col-span-1 ${ElementColors[element.Type]} ${
				ElementRowStarts[elementRowStart]
			} overflow-hidden text-[12px]`}
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
	);
};

export default Element;
