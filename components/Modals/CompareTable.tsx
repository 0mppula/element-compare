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
import { compareElementProperty, formatElementProperty } from '@/utils';

const CompareTable = () => {
	const { selectedElements } = useElementsStore();

	return (
		<Table className="rounded-lg">
			<TableHeader>
				<TableRow>
					<TableHead>Property</TableHead>
					<TableHead>{selectedElements[0]?.Element}</TableHead>
					<TableHead>{selectedElements[1]?.Element}</TableHead>
					<TableHead className="text-right">Difference</TableHead>
				</TableRow>
			</TableHeader>

			<TableBody>
				{selectedElements[0] !== null &&
					selectedElements[1] !== null &&
					(Object.keys(selectedElements[0]) as Array<keyof IElement>)
						.filter((key) => key !== 'Element' && key !== 'Symbol')
						.sort()
						.map((key: keyof IElement) => (
							<TableRow key={`row-${key}`}>
								<TableCell>{formattedElementPropertyNames[key]}</TableCell>

								<TableCell>
									{formatElementProperty(key, selectedElements[0]![key])}
								</TableCell>

								<TableCell>
									{formatElementProperty(key, selectedElements[1]![key])}
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
