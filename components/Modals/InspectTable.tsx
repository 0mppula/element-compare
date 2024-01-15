import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { formattedElementPropertyNames } from '@/constants';
import useElementsStore from '@/hooks/useElementsStore';
import { IElement } from '@/types/elements';
import { formatElementProperty } from '@/utils';

const InspectTable = () => {
	const { inspectedElement } = useElementsStore();

	return (
		<Table className="rounded-lg">
			<TableHeader>
				<TableRow>
					<TableHead>Property</TableHead>
					<TableHead>Value</TableHead>
				</TableRow>
			</TableHeader>

			<TableBody>
				{inspectedElement !== null &&
					(Object.keys(inspectedElement) as Array<keyof IElement>)
						.sort()
						.map((key: keyof IElement) => (
							<TableRow key={`row-${key}`}>
								<TableCell>{formattedElementPropertyNames[key]}</TableCell>

								<TableCell>
									{formatElementProperty(key, inspectedElement[key])}
								</TableCell>
							</TableRow>
						))}
			</TableBody>
		</Table>
	);
};

export default InspectTable;
