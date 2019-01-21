import qs from 'qs'

export default class queryStringHelper {

  static getURL = (query, param) => {
    const url = qs.parse(query, {ignoreQueryPrefix: true});
    return url[param] || null
  };

}
