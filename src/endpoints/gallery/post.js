import endpoint from '../../endpoint';
import utils, { extend } from '../../utils';

const postOptions = {
    path: 'gallery',
    apiUrl: `${utils.API_URL}/${utils.API_VERSION}`
};

export default endpoint(extend({}, postOptions, {
    REASON_DOES_NOT_BELONG_ON_IMGUR: 1,
    get(hash) {
        const path = `${this.path}/${hash}`;
        const options = utils.buildOptions(this.apiUrl, path, 'get');

        return this.imgurAPICall(options);
    },
    report(hash, reason = this.REASON_DOES_NOT_BELONG_ON_IMGUR) {
        if(!hash) { throw new Error('hash must be specified'); }

        if(typeof reason !== 'number') {
            throw new Error('the reason must be an integer');
        }

        const path = `${this.path}/${hash}/report`;
        const options = utils.buildOptions(this.apiUrl, path, 'post', { reason });

        return this.imgurAPICall(options);
    },
    _handleVote(hash, voteType) {
        if(!hash) { throw new Error('hash must be specified'); }

        const path = `${this.path}/${hash}/vote/${voteType}`;
        const options = utils.buildOptions(this.apiUrl, path, 'post');

        return this.imgurAPICall(options);
    },
    upvote(hash) {
        return this._handleVote(hash, 'up');
    },
    downvote(hash) {
        return this._handleVote(hash, 'down');
    },
    favorite(hash, isAlbum) {
        if(!hash) { throw new Error('hash must be specified'); }

        if(isAlbum === undefined || typeof(isAlbum) !== 'boolean') {
            throw new Error('isAlbum with type boolean must be specified');
        }

        const postType = isAlbum ? 'album' : 'image';
        //doesn't use gallery path because it could be a non gallery item
        const path = `${postType}/${hash}/favorite`;
        const options =  utils.buildOptions(this.apiUrl, path, 'post');

        return this.imgurAPICall(options);
    },
    comments: endpoint(extend({}, postOptions, {
        get(hash, sort='best') {
            const path = `${this.path}/${hash}/comments/${sort}`;
            const options = utils.buildOptions(this.apiUrl, path, 'get');

            return this.imgurAPICall(options);
        }
    }))
}));
