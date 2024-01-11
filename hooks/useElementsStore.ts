import { IElementType, IElement } from '@/types/elements';
import { create } from 'zustand';

interface IElementsStore {
	highlightedElementsType: IElementType | null;
	setHighlightedElementsType: (
		elementType: (IElementType | null) | ((prev: IElementType | null) => IElementType | null)
	) => void;
	selectedElements: IElement[];
	setSelectedElements: (value: IElement[] | ((prev: IElement[]) => IElement[])) => void;
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

	selectedElements: [],
	setSelectedElements: (value) =>
		set((state) => ({
			selectedElements: typeof value === 'function' ? value(state.selectedElements) : value,
		})),
}));

export default useElementsStore;
