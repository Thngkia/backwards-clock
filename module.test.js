let { clockDisplay } = require('./module')
test('clock display function which converts Date to time string', () => {
  expect(
    clockDisplay('Sat Mar 27 2021 11:09:24 GMT+0800 (Singapore Standard Time)')
  ).toBe('11:09:24')
})
