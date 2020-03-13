import Singleton from '../src/Singleton';

const s1 = Singleton.getInstance(); //create first object of class Singleton
const s2 = Singleton.getInstance(); //create second object of class Singleton
s1.setField(999); // set name for field of first object

test('Equal s1 == 999', () => {
    expect(s1.getField()).toBe(999);
});
test('Equal s2 == 999', () => {
    expect(s2.getField()).toBe(999);
});
test('Equal variables', () => {
    expect(s1.getField() === s2.getField()).toBe(true);
});