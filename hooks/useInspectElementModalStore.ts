import { create } from 'zustand';

interface IInspectElementModalStore {
	isOpen: boolean;
	setIsOpen: (state: boolean | ((prevState: boolean) => boolean)) => void;
}

const useInspectElementModalStore = create<IInspectElementModalStore>((set) => ({
	isOpen: false,
	setIsOpen: (value) =>
		set((state) =>
			typeof value === 'function' ? { isOpen: value(state.isOpen) } : { isOpen: value }
		),
}));

export default useInspectElementModalStore;
