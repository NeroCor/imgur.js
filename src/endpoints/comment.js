import endpoint from '../endpoint';
import utils from '../utils';

export default endpoint({
    path: 'comment',
    apiUrl: `${utils.API_URL}/${utils.API_VERSION}`,
    REASON_DOES_NOT_BELONG_ON_IMGUR: 1,
    get(commentId) {
        if(!commentId) { throw new Error('commentId must be specified'); }

        const path = `${this.path}/${commentId}`;
        const options = utils.buildOptions(this.apiUrl, path, 'get');

        return this.imgurAPICall(options);
    },
    downvote(commentId) {
        if(!commentId) { throw new Error('commentId must be specified'); }

        const path = `${this.path}/${commentId}/vote/down`;
        const options = utils.buildOptions(this.apiUrl, path, 'post');

        return this.imgurAPICall(options);
    },
    upvote(commentId) {
        if(!commentId) { throw new Error('commentId must be specified'); }

        const path = `${this.path}/${commentId}/vote/up`;
        const options = utils.buildOptions(this.apiUrl, path, 'post');

        return this.imgurAPICall(options);
    },
    report(commentId, reason = this.REASON_DOES_NOT_BELONG_ON_IMGUR) {
        if(!commentId) { throw new Error('commentId must be specified'); }

        if(typeof reason !== 'number') {
            throw new Error('the reason must be an integer');
        }

        const path = `${this.path}/${commentId}/report`;
        const options = utils.buildOptions(this.apiUrl, path, 'post', { reason });

        return this.imgurAPICall(options);
    },
    deleteComment(commentId) {
        if(!commentId) { throw new Error('commentId must be specified'); }

        const path = `${this.path}/${commentId}`;
        const options = utils.buildOptions(this.apiUrl, path, 'del');

        return this.imgurAPICall(options);
    },
    submitComment(params) {
        ['image_id', 'comment'].forEach(option => {
            console.log(!params[option]);
            if (!params[option]) {
                throw new Error(`${option} must be specified`);
            }
        });

        const options = utils.buildOptions(this.apiUrl, this.path, 'post', params);
        return this.imgurAPICall(options);
    },
    submitReply(params) {
        ['image_id', 'comment', 'parent_id'].forEach(option => {
            if (!params[option]) {
                throw new Error(`${option} must be specified`);
            }
        });

        const options = utils.buildOptions(this.apiUrl, this.path, 'post', params);
        return this.imgurAPICall(options);
    }
});

