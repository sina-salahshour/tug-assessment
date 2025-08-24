import { baseApi } from '@/core/store/slices/api';
import type { GenericResponse } from '@/core/types/response';

import type { DriverData, VehicleData } from './types';

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
	}),
	overrideExisting: false,
});

export const { useDriverStatisticsQuery, useVehicleStatisticsQuery } =
	dashboardApi;
