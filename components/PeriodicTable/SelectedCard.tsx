import { ElementCardBgClasses } from '@/constants';
import useElementsStore from '@/hooks/useElementsStore';
import useInspectElementModalStore from '@/hooks/useInspectElementModalStore';
import { IElementType } from '@/types/elements';
import { Atom } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface SelectedCardProps {
	index: number;
}

const SelectedCard = ({ index }: SelectedCardProps) => {
	const { selectedElements, setSelectedElements, setInspectedElement } = useElementsStore();
	const { setIsOpen } = useInspectElementModalStore();

	const selectedCount = selectedElements.reduce((acc, element) => {
		return acc + (element !== null ? 1 : 0);
	}, 0);

	const selectedElement = selectedElements[index];

	const handleInspect = () => {
		setInspectedElement(selectedElement);
		setIsOpen(true);
	};

	const ElementCard = (
		<>
			<TooltipTrigger asChild>
				<Button
					onClick={handleInspect}
					className={`text-base flex flex-col justify-between overflow-hidden p-4 h-full w-full rounded-lg border bg-card text-card-foreground ${
						ElementCardBgClasses[selectedElement?.Type as IElementType]
					}`}
				>
					<div className="w-full leading-[22px]">
						<p className="flex justify-between items-center">
							<span>{selectedElement?.AtomicNumber}</span>
							<span>{selectedElement?.AtomicMass} u</span>
						</p>

						<p className="flex justify-between items-center ">
							<span>Group: {selectedElement?.Group}</span>
							<span>Period: {selectedElement?.Period}</span>
						</p>
					</div>

					<div className="w-full leading-[22px]">
						<h2 className="text-center scroll-m-2 text-5xl font-semibold tracking-tight">
							{selectedElement?.Symbol}
						</h2>

						<h3 className="text-center text-xl">{selectedElement?.Element}</h3>
						<p className="text-center capitalize">{selectedElement?.Type}</p>
					</div>

					<div className="w-full text-left leading-[22px]">
						<p className="capitalize">Phase: {selectedElement?.Phase}</p>
						<p>Density: {selectedElement?.Density} g/cm3 </p>
						<p className="overflow-hidden text-ellipsis">
							Discovered: {selectedElement?.Year}
						</p>
					</div>
				</Button>
			</TooltipTrigger>

			<TooltipContent>
				<p>Show more details</p>
			</TooltipContent>
		</>
	);

	const EmptyCard = (
		<>
			<TooltipTrigger asChild>
				<Card className="flex flex-col items-center justify-between p-4">
					<Card className="flex justify-between h-[44px] w-full border-none">
						<Card className="h-[44px] w-[34%] bg-muted" />
						<Card className="h-[44px] w-[34%] bg-muted" />
					</Card>

					<div className="flex flex-col gap-1 items-center justify-center">
						<Atom className="w-[44px] h-[44px]" />
						<h2 className="text-center text-xl">Element #{index + 1}</h2>
					</div>

					<Card className="h-[66px] mt-[22px] w-full bg-muted" />
				</Card>
			</TooltipTrigger>

			<TooltipContent>
				{selectedCount === 1 || (selectedCount === 0 && index === 1) ? (
					<p>Select a second element to display it here</p>
				) : (
					<p>Select an element to display it here</p>
				)}
			</TooltipContent>
		</>
	);

	return <Tooltip>{selectedElements[index] !== null ? ElementCard : EmptyCard}</Tooltip>;
};

export default SelectedCard;
