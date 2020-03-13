import Creator, {ConcreteCreator1, ConcreteCreator2} from '../src/Factory_method';

function clientCode(creator: Creator){
    return creator.someOperation();
}

test('concrete product 1: ', () => {
    expect(clientCode(new ConcreteCreator1)).toBe("Creator: concrete product 1");
});

test('concrete product 2: ', () => {
    expect(clientCode(new ConcreteCreator2)).toBe("Creator: concrete product 2");
});