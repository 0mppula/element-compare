import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { formattedElementPropertyNames } from '@/constants';
import useElementsStore from '@/hooks/useElementsStore';
import { IElement } from '@/types/elements';
import { compareElementProperty, elementPropertyUnit } from '@/utils';

interface CompareTableProps {}

const CompareTable = ({}: CompareTableProps) => {
	const { selectedElements } = useElementsStore();

	return (
		<Table className="rounded-lg relative">
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Property</TableHead>
					<TableHead>{selectedElements[0]?.Element}</TableHead>
					<TableHead>{selectedElements[1]?.Element}</TableHead>
					<TableHead className="text-right">Difference</TableHead>
				</TableRow>
			</TableHeader>

			<TableBody>
				{selectedElements[0] !== null &&
					selectedElements[1] !== null &&
					(Object.keys(selectedElements[0]) as Array<keyof IElement>)
						.sort()
						.map((key: keyof IElement) => (
							<TableRow key={`row-${key}`}>
								<TableCell>{formattedElementPropertyNames[key]}</TableCell>
								<TableCell>
									{selectedElements[0]![key]} {elementPropertyUnit(key)}
								</TableCell>
								<TableCell>
									{selectedElements[1]![key]} {elementPropertyUnit(key)}
								</TableCell>
								<TableCell className="text-right">
									{compareElementProperty(
										selectedElements[0]!,
										selectedElements[1]!,
										key
									)}
								</TableCell>
							</TableRow>
						))}
			</TableBody>
		</Table>
	);
};

export default CompareTable;
