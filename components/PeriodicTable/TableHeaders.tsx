import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { useMemo } from 'react';

function TableHeaders() {
	const PeriodHeaders = useMemo(
		() =>
			Array.from({ length: 7 }, (_, i) => (
				<Tooltip delayDuration={0} key={`period-header-${i + 1}`}>
					<TooltipTrigger
						className={`w-8 text-[12px] flex items-center justify-center col-start-1 row-start-${
							i + 2
						} p-1`}
						asChild
					>
						<div>{i + 1}</div>
					</TooltipTrigger>
					<TooltipContent>
						<p>Period {i + 1}</p>
					</TooltipContent>
				</Tooltip>
			)),
		[]
	);

	const GroupHeaders = useMemo(
		() =>
			Array.from({ length: 18 }, (_, i) => (
				<Tooltip delayDuration={0} key={`group-header-${i + 1}`}>
					<TooltipTrigger
						className={`h-8 text-[12px] flex items-center justify-center col-start-${
							i + 2
						} row-start-1 p-1`}
						asChild
					>
						<div>{i + 1}</div>
					</TooltipTrigger>
					<TooltipContent>
						<p>Group {i + 1}</p>
					</TooltipContent>
				</Tooltip>
			)),
		[]
	);

	return (
		<>
			<Tooltip>
				<TooltipTrigger
					className="h-8 text-[12px] flex flex-col items-center justify-center text-center col-start-1 row-start-1 px-1"
					asChild
				>
					<div>
						<p className="flex items-center justify-center h-1/2">
							<span className="w-3">G</span>
							<ArrowRight className="w-3 h-3" />
						</p>

						<p className="flex items-center justify-center h-1/2">
							<ArrowDown className="w-3 h-3" />
							<span className="w-3">P</span>
						</p>
					</div>
				</TooltipTrigger>
				<TooltipContent>
					<p>Group: G, Period: P</p>
				</TooltipContent>
			</Tooltip>

			{PeriodHeaders}
			{GroupHeaders}
		</>
	);
}

export default TableHeaders;
