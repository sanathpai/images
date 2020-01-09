
import qs from 'qs';


const CLIENT_ID = '19cc8303a7ff39b';
const ROOT_URL = 'https://api.imgur.com'

export default {
    login: function () {
        const querystring = {//eventually appended to root url by qs library
            client_id: CLIENT_ID,
            response_type: 'token'
        };



        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    }
}