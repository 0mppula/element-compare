import { IElementType } from '@/types/elements';

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
