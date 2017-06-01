import endpoint from '../../endpoint';
import utils, { extend } from '../../utils';

const postOptions = {
    path: 'gallery/r',
    apiUrl: `${utils.API_URL}/${utils.API_VERSION}`
};

export default endpoint(extend({}, postOptions, {
    get(hash, subreddit) {
        if(!hash) { throw new Error('hash must be specified'); }
        if(!subreddit) { throw new Error('subreddit must be specified'); }
        const path = `${this.path}/${subreddit}/${hash}`;
        const options = utils.buildOptions(this.apiUrl, path, 'get');

        return this.imgurAPICall(options);
    }
}));
