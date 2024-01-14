import { IElement, IElementType } from '@/types/elements';

export const ElementCardBgClasses: { [key in IElementType]: string } = {
	'alkali metal': 'bg-lime-400 dark:bg-lime-800 hover:bg-lime-400/90 hover:dark:bg-lime-800/90',
	metalloid:
		'bg-yellow-400 dark:bg-yellow-900 hover:bg-yellow-400/90 hover:dark:bg-yellow-900/90',
	actinide: 'bg-orange-400 dark:bg-orange-900 hover:bg-orange-400/90 hover:dark:bg-orange-900/90',
	'alkali earth metal': 'bg-red-400 dark:bg-red-800 hover:bg-red-400/90 hover:dark:bg-red-800/90',
	'reactive non-metal':
		'bg-blue-400 dark:bg-blue-800 hover:bg-blue-400/90 hover:dark:bg-blue-800/90',
	'unknown type': 'bg-gray-400 dark:bg-gray-700 hover:bg-gray-400/90 hover:dark:bg-gray-700/90',
	'transition metal':
		'bg-violet-400 dark:bg-violet-800 hover:bg-violet-400/90 hover:dark:bg-violet-800/90',
	'noble gas':
		'bg-fuchsia-400 dark:bg-fuchsia-800 hover:bg-fuchsia-400/90 hover:dark:bg-fuchsia-800/90',
	'post-transition metal':
		'bg-teal-400 dark:bg-teal-800 hover:bg-teal-400/90 hover:dark:bg-teal-800/90',
	lanthanide: 'bg-sky-400 dark:bg-sky-800 hover:bg-sky-400/90 hover:dark:bg-sky-800/90',
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

export const formattedElementPropertyNames: { [key in keyof IElement]: string } = {
	AtomicNumber: 'Atomic Number',
	Element: 'Element',
	Symbol: 'Symbol',
	AtomicMass: 'Atomic Mass',
	NumberofNeutrons: 'Number of Neutrons',
	NumberofProtons: 'Number of Protons',
	NumberofElectrons: 'Number of Electrons',
	Period: 'Period',
	Group: 'Group',
	Phase: 'phase at STP',
	Radioactive: 'Radioactive',
	Natural: 'Natural',
	Metal: 'Metal',
	Nonmetal: 'Nonmetal',
	Metalloid: 'Metalloid',
	Type: 'Type',
	AtomicRadius: 'Atomic Radius',
	Electronegativity: 'Electronegativity',
	FirstIonization: 'First Ionization',
	Density: 'Density',
	MeltingPoint: 'Melting Point',
	BoilingPoint: 'Boiling Point',
	NumberOfIsotopes: 'Number of Isotopes',
	Discoverer: 'Discoverer',
	Year: 'Discovery Year',
	SpecificHeat: 'Specific Heat',
	NumberofShells: 'Number of Shells',
	NumberofValence: 'Number of Valence',
};
