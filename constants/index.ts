import { IElementType } from '@/types/elements';

export const ElementColors: { [key in IElementType]: string } = {
	'alkali earth metal': 'bg-blue-200',
	'alkali metal': 'bg-blue-300',
	'noble gas': 'bg-blue-400',
	'post-transition metal': 'bg-blue-500',
	'reactive non-metal': 'bg-blue-600',
	'transition metal': 'bg-blue-700',
	'unknown type': 'bg-blue-800',
	actinide: 'bg-blue-900',
	lanthanide: 'bg-blue-100',
	metalloid: 'bg-blue-200',
};
