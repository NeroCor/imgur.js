import endpoint from '../endpoint';
import utils from '../utils';
import galleryPostEndpoint from '../endpoints/gallery/post';

export const gallery = endpoint({
    path: 'gallery',
    apiUrl: `${utils.API_URL}/${utils.API_VERSION}`,
    get(section='hot', sort='viral', page=0, showViral=true) {
        const requestPath = `${this.path}/${section}/${sort}/${page}?showViral=${showViral}`;
        const options = utils.buildOptions(this.apiUrl, requestPath, 'get');

        return this.imgurAPICall(options);
    },
    post: galleryPostEndpoint
});

function galleryEndpoint(windowType, endpoint) {
    return {
        path: `gallery/${endpoint}`,
        apiUrl: `${utils.API_URL}/${utils.API_VERSION}`,
        get(topic, sort, page, window = windowType) {
            const requestPath = `${this.path}/${topic}/${sort}/${window}/${page}`;
            const options = utils.buildOptions(this.apiUrl, requestPath, 'get');

            return this.imgurAPICall(options);
        },
        post: galleryPostEndpoint,
    };
}

const WEEK = 'week';
const ALL = 'all';
export const subreddit = endpoint(galleryEndpoint(WEEK, 'r'));
export const tag = endpoint(galleryEndpoint(WEEK, 't'));
export const search = endpoint(galleryEndpoint(ALL, 'search'));
export const topic = endpoint(galleryEndpoint(ALL, 'topic'));

