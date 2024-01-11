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

export const SelectedElementAfterBgClasses: { [key in IElementType]: string } = {
	'alkali metal': 'after:bg-lime-400 after:dark:bg-lime-800',
	metalloid: 'after:bg-yellow-400 after:dark:bg-yellow-900',
	actinide: 'after:bg-orange-400 after:dark:bg-orange-900',
	'alkali earth metal': 'after:bg-red-400 after:dark:bg-red-800',
	'reactive non-metal': 'after:bg-blue-400 after:dark:bg-blue-800',
	'unknown type':
		'before:to-gray-400 before:dark:to-gray-700 after:bg-gray-400 after:dark:bg-gray-700',
	'transition metal': 'after:bg-violet-400 after:dark:bg-violet-800',
	'noble gas': 'after:bg-fuchsia-400 after:dark:bg-fuchsia-800',
	'post-transition metal': 'after:bg-teal-400 after:dark:bg-teal-800',
	lanthanide: 'after:bg-sky-400 after:dark:bg-sky-800',
};
