import CompareElementsModal from '@/components/Modals/CompareElementsModal';
import PeriodicTable from '@/components/PeriodicTable';

export default function Home() {
	return (
		<section className="pb-8 pt-4">
			<CompareElementsModal />

			<PeriodicTable />
		</section>
	);
}
