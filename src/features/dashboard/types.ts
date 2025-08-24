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
