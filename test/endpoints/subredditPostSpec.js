import Imgur from '../../build/imgur';
import request from 'superagent-bluebird-promise';
const imgur = Imgur('testKey');

describe('Subreddit Post Endpoint', () => {
    describe('GET', () => {
        const hash = 2;
        const subreddit = 'funny';
        let promise;

        describe('synchronous GET function', () => {
            beforeEach(() => {
                stub(imgur.subreddit.post, 'get');
                promise = imgur.subreddit.post.get(hash, subreddit);
            });

            afterEach(() => {
                imgur.subreddit.post.get.restore();
            });

            it('should have been run once', () => {
                expect(imgur.subreddit.post.get).to.have.been.calledOnce;
            });

            it('should have been run with the correct arguments', () => {
                expect(imgur.subreddit.post.get).to.have.been.calledWith(hash, subreddit);
            });

        });

        describe('synchronous GET function call to imgurAPICall', () => {
            beforeEach(() => {
                stub(imgur.subreddit.post, 'imgurAPICall');
                promise = imgur.subreddit.post.get(hash, subreddit);
            });

            afterEach(() => {
                imgur.subreddit.post.imgurAPICall.restore();
            });


            it('should call imgurAPICall', () => {
                expect(imgur.subreddit.post.imgurAPICall).to.have.been.calledOnce;
            });

            it('should call imgurAPICall', () => {
                expect(imgur.subreddit.post.imgurAPICall).to.have.been.calledWith({
                    apiUrl: "https://api.imgur.com/3",
                    path: `gallery/r/${subreddit}/${hash}`,
                    method: "get",
                    body: {}
                });
            });
        });
    });
});
