import { IElement, IElementType } from '@/types/elements';
import { create } from 'zustand';

interface IElementsStore {
	highlightedElementsType: IElementType | null;
	setHighlightedElementsType: (
		elementType: (IElementType | null) | ((prev: IElementType | null) => IElementType | null)
	) => void;

	selectedElements: (IElement | null)[];
	setSelectedElements: (
		value: (IElement | null)[] | ((prev: (IElement | null)[]) => (IElement | null)[])
	) => void;

	inspectedElement: IElement | null;
	setInspectedElement: (
		value: (IElement | null) | ((prev: IElement | null) => IElement | null)
	) => void;
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

	selectedElements: [null, null],
	setSelectedElements: (value) =>
		set((state) => ({
			selectedElements: typeof value === 'function' ? value(state.selectedElements) : value,
		})),

	inspectedElement: null,
	setInspectedElement: (value) =>
		set((state) => ({
			inspectedElement: typeof value === 'function' ? value(state.inspectedElement) : value,
		})),
}));

export default useElementsStore;
