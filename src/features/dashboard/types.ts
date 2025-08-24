export interface DriverData {
	driverCount: number;
	onDutyCount: number;
	offDutyCount: number;
}

export interface VehicleData {
	vehicleCount: number;
	vehicleOnDutyCount: number;
	vehicleOffDutyCount: number;
}

export interface DueDatesData {
	situation: 'overdue' | 'upcoming' | 'scheduled';
	status: 'expired' | 'active';
	type:
		| 'road-tax'
		| 'insurance'
		| 'puspakom-service'
		| 'truck-permit'
		| 'general';
	tag: null;
	count: string;
}

export interface RecentSubmissionsData {
	id: number;
	lineNo: string;
	session: {
		driver: {
			firstname: string;
			lastname: string;
		};
		vehicle: {
			plateNo: string;
		};
		startMileage: number;
		endMileage: number;
		startTime: number;
	};
}

export interface RecentSubmissionsResponse {
	count: number;
	forms: RecentSubmissionsData[];
	filter: unknown;
}
