'use client';

import useElementsStore from '@/hooks/useElementsStore';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import SelectedCard from './SelectedCard';

function DashBoard() {
	const { selectedElements, setSelectedElements } = useElementsStore();

	const handleCompare = () => {};

	const selectedCard1 = selectedElements.length > 0 && <SelectedCard index={0} />;
	const selectedCard2 = selectedElements.length > 1 && <SelectedCard index={1} />;

	return (
		<Card className="border p-2 grid grid-cols-[4fr_2fr_4fr] grid-rows-[262px] gap-2 row-start-2 row-span-3 col-start-4 col-span-10">
			{selectedCard1}

			<div className="flex flex-col justify-center gap-2">
				<Button
					className="font-semibold"
					variant="secondary"
					disabled={selectedElements.length === 0}
					onClick={() => setSelectedElements((prev) => prev.map((_) => null))}
				>
					Clear
				</Button>

				<Button
					className="font-semibold"
					disabled={selectedElements.length < 2}
					onClick={handleCompare}
				>
					Compare
				</Button>
			</div>

			{selectedCard2}
		</Card>
	);
}

export default DashBoard;
