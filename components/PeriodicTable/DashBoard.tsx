'use client';

import useElementsStore from '@/hooks/useElementsStore';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ElementTypeColors } from '@/constants';

function DashBoard() {
	const { selectedElements, setSelectedElements } = useElementsStore();

	const handleCompare = () => {};

	const selectedCard1 =
		selectedElements.length > 0 ? (
			<Card className={`p-4 ${ElementTypeColors[selectedElements[0].Type]}`}>
				{selectedElements[0].Element}
			</Card>
		) : (
			<div></div>
		);

	const selectedCard2 =
		selectedElements.length > 1 ? (
			<Card className={`p-4 ${ElementTypeColors[selectedElements[1].Type]}`}>
				{selectedElements[1].Element}
			</Card>
		) : (
			<div></div>
		);

	return (
		<Card className="border-none grid grid-cols-[4fr_2fr_4fr] gap-1 row-start-2 row-span-3 col-start-4 col-span-10">
			{selectedCard1}

			<div className="flex flex-col justify-center gap-1">
				<Button onClick={handleCompare}>Compare</Button>
				<Button onClick={() => setSelectedElements([])}>Clear</Button>
			</div>

			{selectedCard2}
		</Card>
	);
}

export default DashBoard;
