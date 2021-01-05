Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    observe: jest.fn(() => 'Mocking works'),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  })),
});

// Works
console.log(new ResizeObserver().observe());

// Broken
test('mocking works', () => {
  console.log(new ResizeObserver().observe());
});
