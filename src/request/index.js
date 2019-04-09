import fetch from 'dva/fetch'

function checkStatus(res) {
	if (res.status === 200) {
		return res
	}
	const err = new Error(res.statusText)
	err.response = res
	throw err
}

export default async function request(url, options={}) {
	options.headers = {
		'Content-type': 'application/json'
	}
	const res = await fetch(url, options)
	checkStatus(res)
	const results = res.json()
	return results
}