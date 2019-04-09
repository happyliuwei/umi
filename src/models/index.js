import * as Api from '../services'
export default {
	state: {
		data: ''
	},
	effects: {
    *handle({ payload: param }, { put, call }) {
      // 调用 saveTodoToServer，成功后触发 `add` action 保存到 state
			const res = yield call(Api.handle, param);
      yield put({ type: 'add', payload: res });
    },
  },
  reducers: {
    add(state, { payload: data }) {
      // 保存数据到 state
      return {...state, data}
    },
  },
}