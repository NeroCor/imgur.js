import { extend } from '../../src/utils';


describe('Utils', () => {
    describe('extend', () => {
        it('should return modified objects', () => {
            const obj = { foo: 'bar' };
            const nextObj = { bar: 'foo' };
            expect(extend(obj, nextObj)).to.deep.equal({ foo: 'bar', bar: 'foo' });
        });

        it('should modify duplicate properties', () => {
            const obj = { foo: 'bar', mod: 'hi' };
            const nextObj = { bar: 'foo', mod: 'goodbye' };
            expect(extend(obj, nextObj)).to.deep.equal({ foo: 'bar', bar: 'foo', mod: 'goodbye' });
        });
    });
});
