import { ElementCardBgClasses } from '@/constants';
import useElementsStore from '@/hooks/useElementsStore';
import { Button } from '../ui/button';

interface SelectedCardProps {
	index: number;
}

const SelectedCard = ({ index }: SelectedCardProps) => {
	const { selectedElements, setSelectedElements } = useElementsStore();

	return (
		<Button
			className={`text-base flex flex-col justify-between overflow-hidden p-4 h-full w-full rounded-lg border bg-card text-card-foreground shadow-sm ${
				ElementCardBgClasses[selectedElements[index].Type]
			}`}
		>
			<div className="w-full leading-[22px]">
				<p className="flex justify-between items-center">
					<span>{selectedElements[index].AtomicNumber}</span>
					<span>{selectedElements[index].AtomicMass} u</span>
				</p>

				<p className="flex justify-between items-center ">
					<span>Group: {selectedElements[index].Group}</span>
					<span>Period: {selectedElements[index].Period}</span>
				</p>
			</div>

			<div className="w-full leading-[22px]">
				<h2 className="text-center scroll-m-2 text-5xl font-semibold tracking-tight">
					{selectedElements[index].Symbol}
				</h2>

				<h3 className="text-center text-xl"> {selectedElements[index].Element}</h3>
			</div>

			<div className="w-full text-left leading-[22px]">
				<p className="capitalize">Type: {selectedElements[index].Type}</p>
				<p className="capitalize">Phase: {selectedElements[index].Phase}</p>
				<p>Density: {selectedElements[index].Density}</p>
				<p className="overflow-hidden text-ellipsis">
					Discovered: {selectedElements[index].Year}
				</p>
			</div>
		</Button>
	);
};

export default SelectedCard;
