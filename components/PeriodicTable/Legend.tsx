'use client';
import { IElementType } from '@/types/elements';
import { Button } from '../ui/button';
import { Squircle } from 'lucide-react';
import useElementsStore from '@/hooks/useElementsStore';

const Legend = () => {
	const { highlightedElementsType, setHighlightedElementsType } = useElementsStore();

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
		'alkali metal': 'fill-lime-400 dark:fill-lime-800 text-lime-400 dark:text-lime-800',
		metalloid: 'fill-yellow-400 dark:fill-yellow-900 text-yellow-400 dark:text-yellow-900',
		actinide: 'fill-orange-400 dark:fill-orange-900 text-orange-400 dark:text-orange-900',
		'alkali earth metal': 'fill-red-400 dark:fill-red-800 text-red-400 dark:text-red-800',
		'reactive non-metal': 'fill-blue-400 dark:fill-blue-800 text-blue-400 dark:text-blue-800',
		'unknown type': 'fill-gray-400 dark:fill-gray-700 text-gray-400 dark:text-gray-700',
		'transition metal':
			'fill-violet-400 dark:fill-violet-800 text-violet-400 dark:text-violet-800',
		'noble gas':
			'fill-fuchsia-400 dark:fill-fuchsia-800 text-fuchsia-400 dark:text-fuchsia-800',
		'post-transition metal':
			'fill-teal-400 dark:fill-teal-800 text-teal-400 dark:text-teal-800',
		lanthanide: 'fill-sky-400 dark:fill-sky-800 text-sky-400 dark:text-sky-800',
	};

	const handleHighLightToggle = (type: IElementType) => {
		setHighlightedElementsType(type);
	};

	return (
		<div className="row-start-10 row-span-2 col-start-1 col-span-4 flex gap-1 flex-wrap p-1">
			{elementTypes.map((type: IElementType) => (
				<Button
					key={`element-toggle-${type}`}
					onClick={() => handleHighLightToggle(type)}
					className={`text-[12px] flex justify-center items-center gap-1 leading-3 hover:underline capitalize ${
						type === highlightedElementsType ? 'font-extrabold' : ''
					}`}
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
