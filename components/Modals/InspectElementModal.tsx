'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import useElementsStore from '@/hooks/useElementsStore';
import useInspectElementModalStore from '@/hooks/useInspectElementModalStore';
import InspectTable from './InspectTable';

const InspectElementModal = () => {
	const { inspectedElement, setInspectedElement } = useElementsStore();
	const { isOpen, setIsOpen } = useInspectElementModalStore();

	return (
		<Dialog
			open={isOpen}
			onOpenChange={() => {
				setIsOpen(false);
				setInspectedElement(null);
			}}
		>
			<DialogContent className="max-w-[688px] max-h-[80vh] overflow-auto rounded-lg">
				<DialogHeader>
					<DialogTitle className="mb-2">
						{inspectedElement?.Symbol} ({inspectedElement?.Element})
					</DialogTitle>
				</DialogHeader>

				{/* Inspect table */}
				<InspectTable />
			</DialogContent>
		</Dialog>
	);
};

export default InspectElementModal;
