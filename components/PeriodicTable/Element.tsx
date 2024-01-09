import { Card } from '@/components/ui/card';
import { IElement, IElementType } from '@/types/elements';

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
