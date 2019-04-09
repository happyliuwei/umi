import request from '../request'

export function handle(param) {
	return request('/map/getActivatedVehicleNumber')
}