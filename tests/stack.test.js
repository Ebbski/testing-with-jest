const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

test('pop removes top element', () => {
    stack.push("One");
    stack.push("Two");
    stack.push("Three");
    expect(stack.pop()).toBe('Three'); 
    expect(stack.peek()).toBe('Two'); 
});

test('peek on stack after popping two elements', () => {
    stack.push("One");
    stack.push("Two");
    stack.push("Three");
    stack.pop();
    expect(stack.pop()).toBe('Two'); 
    expect(stack.peek()).toBe('One'); 
});