import { ElementCardBgClasses } from '@/constants';
import useElementsStore from '@/hooks/useElementsStore';
import { IElementType } from '@/types/elements';
import { Atom } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface SelectedCardProps {
	index: number;
}

const SelectedCard = ({ index }: SelectedCardProps) => {
	const { selectedElements, setSelectedElements } = useElementsStore();

	const selectedCount = selectedElements.reduce((acc, element) => {
		return acc + (element !== null ? 1 : 0);
	}, 0);

	return (
		<Tooltip>
			{selectedElements[index] !== null ? (
				<>
					<TooltipTrigger asChild>
						<Button
							className={`text-base flex flex-col justify-between overflow-hidden p-4 h-full w-full rounded-lg border bg-card text-card-foreground ${
								ElementCardBgClasses[selectedElements[index]?.Type as IElementType]
							}`}
						>
							<div className="w-full leading-[22px]">
								<p className="flex justify-between items-center">
									<span>{selectedElements[index]?.AtomicNumber}</span>
									<span>{selectedElements[index]?.AtomicMass} u</span>
								</p>

								<p className="flex justify-between items-center ">
									<span>Group: {selectedElements[index]?.Group}</span>
									<span>Period: {selectedElements[index]?.Period}</span>
								</p>
							</div>

							<div className="w-full leading-[22px]">
								<h2 className="text-center scroll-m-2 text-5xl font-semibold tracking-tight">
									{selectedElements[index]?.Symbol}
								</h2>

								<h3 className="text-center text-xl">
									{selectedElements[index]?.Element}
								</h3>
							</div>

							<div className="w-full text-left leading-[22px]">
								<p className="capitalize">Type: {selectedElements[index]?.Type}</p>
								<p className="capitalize">
									Phase: {selectedElements[index]?.Phase}
								</p>
								<p>Density: {selectedElements[index]?.Density}</p>
								<p className="overflow-hidden text-ellipsis">
									Discovered: {selectedElements[index]?.Year}
								</p>
							</div>
						</Button>
					</TooltipTrigger>

					<TooltipContent>
						<p>Show more details</p>
					</TooltipContent>
				</>
			) : (
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

							<Card className="h-[88px] w-full bg-muted" />
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
			)}
		</Tooltip>
	);
};

export default SelectedCard;
