import axios from 'axios'
const service = axios.create({
    timeout: 6000 //超时时间
})
// Add a request interceptor
service
    .interceptors
    .request
    .use(
    // Do something before request is sent
    config => {
        // Toast.loading('Loading...', 30, () => {
        //     console.log('Load complete !!!')
        // })
        config.headers.token="maasdhj"
        console.log(config.headers.token)
        return config
    },
    // Do something with request error
    error => Promise.reject(error))

// Add a response interceptor
service
    .interceptors
    .response
    .use(
    // Do something with response data
    response => {
        // Toast.hide()
        if (response.data) {
            return Promise.resolve(response.data)
        } else {
            return Promise.reject(response)
        }
        return Promise.resolve(response.data)
    },
    // Do something with response error
    error => {
        return Promise.reject(error)
    })

export default service