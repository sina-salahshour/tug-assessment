import { Box } from '@mui/material';
import type { GridRenderCellParams } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';

import { useDriverRecentSubmissionsQuery } from '../api';
import { RowHeading } from '../dashboard.styles';
const DRIVER_TABLE_FIELDS = [
	{
		field: 'lineNo',
		headerName: 'No.',
		renderCell: (row: GridRenderCellParams) =>
			row.api.getAllRowIds().indexOf(row.id) + 1, // note that because the we didn't have pagination in usage, i didn't take pagination into account
		width: 20,
	},
	{ field: 'driver', headerName: 'Driver', width: 180 },
	{ field: 'vehicle', headerName: 'Vehicle', width: 120 },
	{
		field: 'mileage',
		headerName: 'Mileage (km)',
		width: 220,
	},
	{ field: 'date', headerName: 'Date', width: 180 },
	{ field: 'endorse', headerName: '', width: 160 },
];
export function RecentSubmissionsSection() {
	const { data, isLoading } = useDriverRecentSubmissionsQuery();

	return (
		<Box>
			<RowHeading>Recent Submissions</RowHeading>
			<DataGrid
				columns={DRIVER_TABLE_FIELDS}
				hideFooter
				disableColumnSorting
				disableColumnFilter
				rows={data?.map((item) => ({
					id: item.id,
					lineNo: item.lineNo,
					driver:
						item.session.driver.firstname + ' ' + item.session.driver.lastname,
					vehicle: item.session.vehicle.plateNo,
					mileage: item.session.endMileage - item.session.startMileage,
					date: Intl.DateTimeFormat().format(+item.session.startTime * 1000),
				}))}
				loading={isLoading}
			></DataGrid>
		</Box>
	);
}
