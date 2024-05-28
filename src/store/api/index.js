import axios from 'axios'

const api = axios.create({
	responseType: 'json'
})

api.cancelToken = axios.CancelToken
api.isCancel = axios.isCancel

export default api