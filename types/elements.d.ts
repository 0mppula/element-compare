export interface IElement {
	AtomicNumber: number;
	Element: string;
	Symbol: string;
	AtomicMass: number;
	NumberofNeutrons: number;
	NumberofProtons: number;
	NumberofElectrons: number;
	Period: number;
	Group: number | string;
	Phase: string;
	Radioactive: string;
	Natural: string;
	Metal: string;
	Nonmetal: string;
	Metalloid: string;
	Type: IElementType;
	AtomicRadius: number | string;
	Electronegativity: number | string;
	FirstIonization: number | string;
	Density: number | string;
	MeltingPoint: number | string;
	BoilingPoint: number | string;
	NumberOfIsotopes: number | string;
	Discoverer: string;
	Year: number | string;
	SpecificHeat: number | string;
	NumberofShells: number;
	NumberofValence: number | string;
}

export type IElementType =
	| 'alkali metal'
	| 'metalloid'
	| 'actinide'
	| 'alkali earth metal'
	| 'reactive non-metal'
	| 'unknown type'
	| 'transition metal'
	| 'noble gas'
	| 'post-transition metal'
	| 'lanthanide';
