import imgurAPICall from './imgurAPICall';
import imageEndpoint from './endpoints/image';
import albumEndpoint from './endpoints/album';
import oauth2Endpoint from './endpoints/oauth2';
import topicsEndpoint from './endpoints/topics';
import {
    gallery,
    subreddit,
    tag,
    search,
    topic,
} from './endpoints/gallery';
import commentEndpoint from './endpoints/comment';
import utils from './utils.js';

export default function(clientKey, bearerKey) {
    let setUtil = function(key, value) {
        utils[key] = value;
    };

    let getUtil = function(key) {
        return utils[key];
    };

    if (!clientKey) {
        throw new Error('Client Key required to initialize imgur client');
    }

    setUtil('CLIENT_ID', clientKey);

    if(bearerKey) {
        setUtil('bearer', bearerKey);
    }

    return {
        imgurAPICall,
        CLIENT_ID: clientKey,
        image: imageEndpoint,
        album: albumEndpoint,
        oauth2: oauth2Endpoint,
        topics: topicsEndpoint,
        gallery,
        subreddit,
        tag,
        search,
        topic,
        comment: commentEndpoint,
        setUtil,
        getUtil
    };
}

