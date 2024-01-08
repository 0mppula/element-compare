export interface IElement {
	AtomicNumber: number;
	Element: string;
	Symbol: string;
	AtomicMass: number;
	NumberofNeutrons: number;
	NumberofProtons: number;
	NumberofElectrons: number;
	Period: number;
	Group: number;
	Phase: 'gas' | 'solid' | 'liquid';
	Radioactive: '' | 'yes'; // Assuming Radioactive can only be '' or 'yes'
	Natural: 'yes' | ''; // Assuming Natural can only be '' or 'yes'
	Metal: '' | 'yes'; // Assuming Metal can only be '' or 'yes'
	Nonmetal: 'yes' | ''; // Assuming Nonmetal can only be '' or 'yes'
	Metalloid: '' | 'yes'; // Assuming Metalloid can only be '' or 'yes'
	Type: string;
	AtomicRadius: number;
	Electronegativity: number;
	FirstIonization: number;
	Density: number;
	MeltingPoint: number;
	BoilingPoint: number;
	NumberOfIsotopes: number;
	Discoverer: string;
	Year: number;
	SpecificHeat: number;
	NumberofShells: number;
	NumberofValence: number;
}
