import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
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

	const ElementTypeColors: { [key in IElementType]: string } = {
		'alkali metal': 'bg-lime-400 dark:bg-lime-800',
		metalloid: 'bg-yellow-400 dark:bg-yellow-900',
		actinide: 'bg-orange-400 dark:bg-orange-900',
		'alkali earth metal': 'bg-red-400 dark:bg-red-800',
		'reactive non-metal': 'bg-blue-400 dark:bg-blue-800',
		'unknown type': 'bg-gray-400 dark:bg-gray-700',
		'transition metal': 'bg-violet-400 dark:bg-violet-800',
		'noble gas': 'bg-fuchsia-400 dark:bg-fuchsia-800',
		'post-transition metal': 'bg-teal-400 dark:bg-teal-800',
		lanthanide: 'bg-sky-400 dark:bg-sky-800',
	};

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Card
					className={`border-transparent p-1 col-span-1 ${
						ElementTypeColors[element.Type]
					} ${ElementRowStarts[elementRowStart]} overflow-hidden text-[12px] `}
				>
					<div>
						<p className="flex justify-between items-center">{element.AtomicNumber}</p>
					</div>

					<h2 className="text-center scroll-m-2 leading-6 text-2xl font-semibold tracking-tight mb-1">
						{element.Symbol}
					</h2>

					<p className="text-center text-ellipsis overflow-hidden">{element.Element}</p>

					<p className="text-center">{element.AtomicMass}</p>
				</Card>
			</TooltipTrigger>
			<TooltipContent>
				<p>{element.Element}</p>
			</TooltipContent>
		</Tooltip>
	);
};

export default Element;
