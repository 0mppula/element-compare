import { IElementType } from '@/types/elements';

export const ElementTypeColors: { [key in IElementType]: string } = {
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
