import { ArrowDown, ArrowRight } from 'lucide-react';
import { useMemo } from 'react';

function TableHeaders() {
	const PeriodHeaders = useMemo(
		() =>
			Array.from({ length: 7 }, (_, i) => (
				<div
					key={`period-header-${i + 1}`}
					className={`w-8 text-[12px] flex items-center justify-center col-start-1 row-start-${
						i + 2
					} p-1`}
				>
					{i + 1}
				</div>
			)),
		[]
	);

	const GroupHeaders = useMemo(
		() =>
			Array.from({ length: 18 }, (_, i) => (
				<div
					key={`group-header-${i + 1}`}
					className={`h-8 text-[12px] flex items-center justify-center col-start-${
						i + 2
					} row-start-1 p-1`}
				>
					{i + 1}
				</div>
			)),
		[]
	);

	return (
		<>
			<div className="h-8 text-[12px] flex flex-col items-center justify-center text-center col-start-1 row-start-1 px-1">
				<p className="flex items-center justify-center h-1/2">
					<span className="w-3">G</span>
					<ArrowRight className="w-3 h-3" />
				</p>

				<p className="flex items-center justify-center h-1/2">
					<ArrowDown className="w-3 h-3" />
					<span className="w-3">P</span>
				</p>
			</div>

			{PeriodHeaders}
			{GroupHeaders}
		</>
	);
}

export default TableHeaders;
