import { create } from 'zustand';

interface ICompareElementModalStore {
	isOpen: boolean;
	setIsOpen: (state: boolean | ((prevState: boolean) => boolean)) => void;
}

const useCompareElementModalStore = create<ICompareElementModalStore>((set) => ({
	isOpen: false,
	setIsOpen: (value) =>
		set((state) =>
			typeof value === 'function' ? { isOpen: value(state.isOpen) } : { isOpen: value }
		),
}));

export default useCompareElementModalStore;
