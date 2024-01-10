import { IElementType } from '@/types/elements';
import { create } from 'zustand';

interface IElementsStore {
	highlightedElementsType: IElementType | null;
	setHighlightedElementsType: (elementType: IElementType | null) => void;
}

const useElementsStore = create<IElementsStore>((set) => ({
	highlightedElementsType: null,
	setHighlightedElementsType: (elementType) => set({ highlightedElementsType: elementType }),
}));

export default useElementsStore;
