import endpoint from '../endpoint';
import utils from '../utils';
import galleryPostEndpoint from '../endpoints/gallery/post';
const SEARCH = 'search';
const RANDOM = 'random/random';

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

function galleryEndpoint(windowType, endpointPath) {
    return endpoint({
        path: `gallery/${endpointPath}`,
        apiUrl: `${utils.API_URL}/${utils.API_VERSION}`,
        get(topic, sort, page, window = windowType) {
            let requestPath;

            switch (endpointPath) {
                case SEARCH:
                    requestPath = `${this.path}/${sort}/${window}/${page}?q_all=${topic}`;
                    break;
                case RANDOM:
                    requestPath = `${this.path}/${page}`;
                    break;
                default:
                    requestPath = `${this.path}/${topic}/${sort}/${window}/${page}`;
                    break;
            }

            const options = utils.buildOptions(this.apiUrl, requestPath, 'get');

            return this.imgurAPICall(options);
        },
        post: galleryPostEndpoint,
    });
}

const WEEK = 'week';
const ALL = 'all';
export const subreddit = galleryEndpoint(WEEK, 'r');
export const tag = galleryEndpoint(WEEK, 't');
export const search = galleryEndpoint(ALL, SEARCH);
export const topic = galleryEndpoint(ALL, 'topic');
export const random = galleryEndpoint(null, RANDOM);

