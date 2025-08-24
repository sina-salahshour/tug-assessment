export interface GenericResponse<T> {
	data?: T;
	status: number;
	message?: string;
}
