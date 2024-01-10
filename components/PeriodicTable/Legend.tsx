import { IElementType } from '@/types/elements';
import { Button } from '../ui/button';
import { Squircle } from 'lucide-react';

const Legend = () => {
	const elementTypes: IElementType[] = [
		'alkali metal',
		'metalloid',
		'actinide',
		'alkali earth metal',
		'reactive non-metal',
		'unknown type',
		'transition metal',
		'noble gas',
		'post-transition metal',
		'lanthanide',
	];

	const ElementTypeColors: { [key in IElementType]: string } = {
		'alkali metal': 'fill-lime-200 dark:fill-lime-950 text-lime-200 dark:text-lime-950',
		metalloid: 'fill-yellow-200 dark:fill-yellow-950 text-yellow-200 dark:text-yellow-950',
		actinide: 'fill-orange-200 dark:fill-orange-950 text-orange-200 dark:text-orange-950',
		'alkali earth metal': 'fill-red-200 dark:fill-red-950 text-red-200 dark:text-red-950',
		'reactive non-metal': 'fill-blue-200 dark:fill-blue-950 text-blue-200 dark:text-blue-950',
		'unknown type': 'fill-gray-200 dark:fill-gray-800 text-gray-200 dark:text-gray-800',
		'transition metal':
			'fill-violet-200 dark:fill-violet-950 text-violet-200 dark:text-violet-950',
		'noble gas':
			'fill-fuchsia-200 dark:fill-fuchsia-950 text-fuchsia-200 dark:text-fuchsia-950',
		'post-transition metal':
			'fill-teal-200 dark:fill-teal-950 text-teal-200 dark:text-teal-950',
		lanthanide: 'fill-sky-200 dark:fill-sky-950 text-sky-200 dark:text-sky-950',
	};

	return (
		<div className="row-start-10 row-span-2 col-start-1 col-span-4 flex gap-1 flex-wrap p-1">
			{elementTypes.map((type: IElementType) => (
				<Button
					key={`element-toggle-${type}`}
					className="text-[12px] flex justify-center items-center gap-1 leading-3"
					variant="ghost"
					size="xs"
				>
					<span>{type}</span>
					<Squircle className={`w-3 h-3 ${ElementTypeColors[type]} text-red-500`} />
				</Button>
			))}
		</div>
	);
};

export default Legend;
