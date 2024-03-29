import CompareElementsModal from '@/components/Modals/CompareElementsModal';
import InspectElementModal from '@/components/Modals/InspectElementModal';
import PeriodicTable from '@/components/PeriodicTable';

export default function Home() {
	return (
		<section className="pb-8 pt-6 overflow-auto min-w-[1200px] max-w-[calc(1448px)]">
			<CompareElementsModal />
			<InspectElementModal />

			<PeriodicTable />
		</section>
	);
}
