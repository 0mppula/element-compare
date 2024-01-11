import { IElementType } from '@/types/elements';
import { create } from 'zustand';

interface IElementsStore {
	highlightedElementsType: IElementType | null;
	setHighlightedElementsType: (elementType: IElementType | null) => void;
	selectedElementAtomicNumber: number | null;
	setSelectedElementAtomicNumber: (atomicNumber: number | null) => void;
}

const useElementsStore = create<IElementsStore>((set) => ({
	highlightedElementsType: null,
	setHighlightedElementsType: (elementType) => set({ highlightedElementsType: elementType }),
	selectedElementAtomicNumber: null,
	setSelectedElementAtomicNumber: (atomicNumber) =>
		set({ selectedElementAtomicNumber: atomicNumber }),
}));

export default useElementsStore;
