'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import useCompareElementModalStore from '@/hooks/useCompareElementModalStore';
import useElementsStore from '@/hooks/useElementsStore';

const CompareElementsModal = () => {
	const { selectedElements } = useElementsStore();
	const { isOpen, setIsOpen } = useCompareElementModalStore();

	return (
		<Dialog
			open={isOpen}
			onOpenChange={() => {
				setIsOpen(false);
			}}
		>
			<DialogContent className="max-w-[656px]">
				<DialogHeader>
					<DialogTitle className="mb-2">
						Comparing {selectedElements[0]?.Symbol} ({selectedElements[0]?.Element}) VS.{' '}
						{selectedElements[1]?.Symbol} ({selectedElements[1]?.Element})
					</DialogTitle>
				</DialogHeader>

				{/* Compare table */}
			</DialogContent>
		</Dialog>
	);
};

export default CompareElementsModal;
