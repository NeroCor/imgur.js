import endpoint from '../endpoint';
import utils from '../utils';
import galleryPostEndpoint from '../endpoints/gallery/post';

export const galleryEndpoint = endpoint({
    path: 'gallery',
    apiUrl: `${utils.API_URL}/${utils.API_VERSION}`,
    get(section='hot', sort='viral', page=0, showViral=true) {
        const requestPath = `${this.path}/${section}/${sort}/${page}?showViral=${showViral}`;
        const options = utils.buildOptions(this.apiUrl, requestPath, 'get');

        return this.imgurAPICall(options);
    },
    post: galleryPostEndpoint
});

export const subredditEndpoint = endpoint({
    path: 'gallery/r',
    apiUrl: `${utils.API_URL}/${utils.API_VERSION}`,
    get(subreddit, sort, page, window='week') {
        const requestPath = `${this.path}/${subreddit}/${sort}/${window}/${page}`;
        const options = utils.buildOptions(this.apiUrl, requestPath, 'get');

        return this.imgurAPICall(options);
    },
    post: galleryPostEndpoint,
});

export const tagEndpoint = endpoint({
    path: 'gallery/t',
    apiUrl: `${utils.API_URL}/${utils.API_VERSION}`,
    get(tag, sort, page, window='week') {
        const requestPath = `${this.path}/${tag}/${sort}/${window}/${page}`;
        const options = utils.buildOptions(this.apiUrl, requestPath, 'get');

        return this.imgurAPICall(options);
    },
    post: galleryPostEndpoint,
});

export const searchEndpoint = endpoint({
    path: 'gallery/search',
    apiUrl: `${utils.API_URL}/${utils.API_VERSION}`,
    get(search, sort, page, window='all') {
        const requestPath = `${this.path}/${sort}/${window}/${page}?q=${search}`;
        const options = utils.buildOptions(this.apiUrl, requestPath, 'get');

        return this.imgurAPICall(options);
    },
    post: galleryPostEndpoint
});

export const topicEndpoint = endpoint({
    path: 'gallery/topic',
    apiUrl: `${utils.API_URL}/${utils.API_VERSION}`,
    get(topic, sort, page, window='all') {
        const requestPath = `${this.path}/${topic}/${sort}/${window}/${page}`;
        const options = utils.buildOptions(this.apiUrl, requestPath, 'get');

        return this.imgurAPICall(options);
    },
    post: galleryPostEndpoint
});

