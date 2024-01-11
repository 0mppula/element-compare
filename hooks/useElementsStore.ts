import { IElementType } from '@/types/elements';
import { create } from 'zustand';

interface IElementsStore {
	highlightedElementsType: IElementType | null;
	setHighlightedElementsType: (
		elementType: (IElementType | null) | ((prev: IElementType | null) => IElementType | null)
	) => void;
	selectedElementAtomicNumbers: number[];
	setSelectedElementAtomicNumbers: (value: number[] | ((prev: number[]) => number[])) => void;
}

const useElementsStore = create<IElementsStore>((set) => ({
	highlightedElementsType: null,
	setHighlightedElementsType: (elementType) =>
		set((state) => ({
			highlightedElementsType:
				typeof elementType === 'function'
					? elementType(state.highlightedElementsType)
					: elementType,
		})),

	selectedElementAtomicNumbers: [],
	setSelectedElementAtomicNumbers: (value) =>
		set((state) => ({
			selectedElementAtomicNumbers:
				typeof value === 'function' ? value(state.selectedElementAtomicNumbers) : value,
		})),
}));

export default useElementsStore;
