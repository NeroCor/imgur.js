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

export function extend() {
  var key, obj, result = {}, i;
  for (i = 0; i <= arguments.length; i++) {
    obj = arguments[i];
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = obj[key];
      } else {
      }
    }
  }
  return result;
}
