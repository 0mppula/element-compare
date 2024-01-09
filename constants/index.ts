import { IElementType } from '@/types/elements';

export const ElementColorsDark: { [key in IElementType]: string } = {
	'alkali metal': 'dark:bg-cyan-950',
	metalloid: 'dark:bg-yellow-950',
	actinide: 'dark:bg-orange-950', //
	'alkali earth metal': 'dark:bg-red-950',
	'reactive non-metal': 'dark:bg-blue-950',
	'unknown type': 'dark:bg-gray-950',
	'transition metal': 'dark:bg-violet-950',
	'noble gas': 'dark:bg-fuchsia-950',
	'post-transition metal': 'dark:bg-green-950',
	lanthanide: 'dark:bg-sky-950',
};

export const ElementColorsLight: { [key in IElementType]: string } = {
	'alkali metal': 'bg-cyan-100',
	metalloid: 'bg-yellow-100',
	actinide: 'bg-orange-100', //
	'alkali earth metal': 'bg-red-100',
	'reactive non-metal': 'bg-blue-100',
	'unknown type': 'bg-gray-100',
	'transition metal': 'bg-violet-100',
	'noble gas': 'bg-fuchsia-100',
	'post-transition metal': 'bg-green-100',
	lanthanide: 'bg-sky-100',
};
