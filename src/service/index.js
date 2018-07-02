import $ from 'jquery'

export default {
    post(url, data) {
        console.log('post request url', url)
        return $.ajax({
            url: url,
            params: data,
            type: 'post',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        })
    },
    get(url, data) {
        console.log('get request url', url)
        return $.ajax({
            url: url,
            params: data,
            type: 'get',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        })
    }
}