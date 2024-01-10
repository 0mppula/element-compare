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

export const ElementTypeHighlightClasses: { [key in IElementType]: string } = {
	'alkali metal':
		'before:to-lime-400 before:dark:to-lime-800 after:bg-lime-400 after:dark:bg-lime-800',
	metalloid:
		'before:to-yellow-400 before:dark:to-yellow-900 after:bg-yellow-400 after:dark:bg-yellow-900',
	actinide:
		'before:to-orange-400 before:dark:to-orange-900 after:bg-orange-400 after:dark:bg-orange-900',
	'alkali earth metal':
		'before:to-red-400 before:dark:to-red-800 after:bg-red-400 after:dark:bg-red-800',
	'reactive non-metal':
		'before:to-blue-400 before:dark:to-blue-800 after:bg-blue-400 after:dark:bg-blue-800',
	'unknown type':
		'before:to-gray-400 before:dark:to-gray-700 after:bg-gray-400 after:dark:bg-gray-700',
	'transition metal':
		'before:to-violet-400 before:dark:to-violet-800 after:bg-violet-400 after:dark:bg-violet-800',
	'noble gas':
		'before:to-fuchsia-400 before:dark:to-fuchsia-800 after:bg-fuchsia-400 after:dark:bg-fuchsia-800',
	'post-transition metal':
		'before:to-teal-400 before:dark:to-teal-800 after:bg-teal-400 after:dark:bg-teal-800',
	lanthanide: 'before:to-sky-400 before:dark:to-sky-800 after:bg-sky-400 after:dark:bg-sky-800',
};
