import { IElement, IElementType } from '@/types/elements';

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

export const compareElementProperty = (
	element1: IElement,
	element2: IElement,
	property: keyof IElement
) => {
	const incompatibleProperties: Array<keyof IElement> = [
		'Element',
		'Symbol',
		'Phase',
		'Radioactive',
		'Natural',
		'Metal',
		'Nonmetal',
		'Metalloid',
		'Type',
		'Discoverer',
	];

	const noFractionDigitProperties: Array<keyof IElement> = [
		'AtomicNumber',
		'NumberofNeutrons',
		'NumberofProtons',
		'NumberofElectrons',
		'Period',
		'Group',
		'NumberOfIsotopes',
		'NumberofShells',
		'NumberofValence',
	];

	if (element1[property] === '' || element2[property] === '') return 'N/A';

	if (incompatibleProperties.includes(property)) return 'N/A';

	const fractionDigits = noFractionDigitProperties.includes(property) ? 0 : 2;

	return formatElementProperty(
		property,
		(Number(element1[property]) - Number(element2[property])).toFixed(fractionDigits)
	);
};

export const formatElementProperty = (property: keyof IElement, value: string | number) => {
	if (value === '') return 'No data';

	const unit = elementPropertyUnit(property);

	return `${value} ${unit}`;
};

export const elementPropertyUnit = (property: keyof IElement) => {
	const formats: { [key: string]: string } = {
		AtomicMass: 'g/mol',
		AtomicRadius: 'Å',
		Electronegativity: 'Pauling',
		FirstIonization: 'eV',
		Density: 'g/cm³',
		MeltingPoint: 'K',
		BoilingPoint: 'K',
		SpecificHeat: 'J/(g·K)',
	};

	const unit = formats[property] || '';

	return `${unit}`.trim();
};
