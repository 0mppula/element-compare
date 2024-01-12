import { IElementType } from '@/types/elements';

export const pluralizeElement = (type: IElementType) => {
	if (type === 'alkali metal') return 'Alkali metals';
	if (type === 'metalloid') return 'Metalloids';
	if (type === 'actinide') return 'Actinides';
	if (type === 'alkali earth metal') return 'Alkali earth metals';
	if (type === 'reactive non-metal') return 'Reactive non-metals';
	if (type === 'unknown type') return 'Unknown types';
	if (type === 'transition metal') return 'Transition metals';
	if (type === 'noble gas') return 'Noble gases';
	if (type === 'post-transition metal') return 'Post-transition metals';
	if (type === 'lanthanide') return 'Lanthanides';
};
