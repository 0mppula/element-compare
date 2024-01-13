import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { IElement } from '@/types/elements';
import ElementCardWrapper from './ElementCardWrapper';

interface ElementProps {
	element: IElement;
}

const Element = ({ element }: ElementProps) => {
	return (
		<Tooltip>
			<ElementCardWrapper element={element}>
				<div className="z-20 relative">
					<div>
						<p className="flex justify-between items-center">{element.AtomicNumber}</p>
					</div>

					<h2 className="text-center scroll-m-2 leading-6 text-2xl font-semibold tracking-tight mb-1">
						{element.Symbol}
					</h2>

					<p className="text-center text-ellipsis overflow-hidden">{element.Element}</p>

					<p className="text-center">{element.AtomicMass}</p>
				</div>
			</ElementCardWrapper>

			<TooltipContent>
				<p>{element.Element}</p>
			</TooltipContent>
		</Tooltip>
	);
};

export default Element;
