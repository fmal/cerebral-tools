import { processResponse } from '../utils';

function httpDeleteFactory(url, query = {}, options) {
  return function httpDelete({ http, path, resolve }) {
    return processResponse(
      http.delete(
        resolve.value(url),
        resolve.value(query),
        resolve.value(options)
      ),
      path
    );
  };
}

export default httpDeleteFactory;
