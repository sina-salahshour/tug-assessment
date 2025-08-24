import { baseApi } from '@/core/store/slices/api';
import type { GenericResponse } from '@/core/types/response';

import type {
	DriverData,
	DueDatesData,
	RecentSubmissionsData,
	RecentSubmissionsResponse,
	VehicleData,
} from './types';

const dashboardApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		driverStatistics: build.query<DriverData, void>({
			query: () => 'https://sg-api.mylorry.ai/api/org/57/driver/statistics',
			transformResponse: (data: GenericResponse<DriverData>) => {
				if (data.data == null) {
					throw new Error('error fetching drivers');
				}
				return data.data;
			},
		}),
		vehicleStatistics: build.query<VehicleData, void>({
			query: () => 'https://sg-api.mylorry.ai/api/org/57/vehicle/statistics',
			transformResponse: (data: GenericResponse<VehicleData>) => {
				if (data.data == null) {
					throw new Error('error fetching vehicles');
				}
				return data.data;
			},
		}),
		dueDatesStatistics: build.query<DueDatesData[], void>({
			query: () =>
				'https://sg-api.mylorry.ai/api/org/57/vehicle/due-dates/statistics',
			transformResponse: (data: GenericResponse<DueDatesData[]>) => {
				if (data.data == null) {
					throw new Error('error fetching due dates');
				}
				return data.data;
			},
		}),
		driverRecentSubmissions: build.query<RecentSubmissionsData[], void>({
			query: () =>
				'https://sg-api.mylorry.ai/api/org/57/driver/submitted-forms',
			transformResponse: (data: GenericResponse<RecentSubmissionsResponse>) => {
				if (data.data?.forms == null) {
					throw new Error('error fetching submissions');
				}
				return data.data.forms;
			},
		}),
	}),
	overrideExisting: false,
});

export const {
	useDriverStatisticsQuery,
	useVehicleStatisticsQuery,
	useDueDatesStatisticsQuery,
	useDriverRecentSubmissionsQuery,
} = dashboardApi;
