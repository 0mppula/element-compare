import CompareElementsModal from '@/components/Modals/CompareElementsModal';
import PeriodicTable from '@/components/PeriodicTable';

export default function Home() {
	return (
		<section className="py-8">
			<CompareElementsModal />

			<PeriodicTable />
		</section>
	);
}
