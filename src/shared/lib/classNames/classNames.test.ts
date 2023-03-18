import { classNames } from './classNames';

describe('classNames', () => {
    test('base class', () => {
        expect(classNames('test')).toBe('test');
    });

    test('mods class', () => {
        expect(classNames('test', { 'test-Class': true })).toBe('test test-Class');
    });

    test('additional class', () => {
        expect(classNames('test', {}, ['add'])).toBe('test add');
    });
});
