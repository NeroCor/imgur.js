export default {
    API_URL: 'https://api.imgur.com',
    API_VERSION: '3',
    CLIENT_ID: '',
    buildOptions: (apiUrl, path, method, body = {}) => {
        return { apiUrl, path, method, body };
    },
    bearer: '',
    additionalHeaders: {}
};
