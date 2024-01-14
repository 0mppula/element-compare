'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import useCompareElementModalStore from '@/hooks/useCompareElementModalStore';
import useElementsStore from '@/hooks/useElementsStore';
import CompareTable from './CompareTable';

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
			<DialogContent className="max-w-[688px] max-h-[80vh] overflow-auto rounded-lg">
				<DialogHeader>
					<DialogTitle className="mb-2">
						Comparing {selectedElements[0]?.Symbol} ({selectedElements[0]?.Element}) VS.{' '}
						{selectedElements[1]?.Symbol} ({selectedElements[1]?.Element})
					</DialogTitle>
				</DialogHeader>

				{/* Compare table */}
				<CompareTable />
			</DialogContent>
		</Dialog>
	);
};

export default CompareElementsModal;
