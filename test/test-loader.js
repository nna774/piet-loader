const assert = require('assert');

const loader = require('../lib/loader.js');

const pattern20 = [
  ['lred', 'lyellow', 'lgreen', 'lcyan', 'lblue', 'lmagenta'],
  ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta'],
  ['dred', 'dyellow', 'dgreen', 'dcyan', 'dblue', 'dmagenta'],
  ['white', 'white', 'white', 'black', 'black', 'black'],
];

describe('loader', () => {
  it('load test pattern', () =>
    loader.load('test/images/colors.png', 1).then((v) => {
      assert.deepEqual(pattern20, v);
    })
  );
  it('load test pattern(codel: 25)', () =>
    loader.load('test/images/colors25.png', 25).then((v) => {
      assert.deepEqual(pattern20, v);
    })
  );
  it('load 10 codel image', () =>
    loader.load('test/images/devide_by_2.10cs.11x4.png', 10).then((v) => {
      const pattern = [
        ['lred', 'dblue', 'dgreen', 'lyellow', 'lmagenta', 'dyellow', 'cyan', 'dred', 'black', 'white', 'dred'],
        ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'dred', 'dred', 'white', 'dred'],
        ['white', 'dcyan', 'white', 'white', 'white', 'black', 'white', 'yellow', 'black', 'white', 'dred'],
        ['white', 'dcyan', 'dcyan', 'dcyan', 'dcyan', 'dcyan', 'dyellow', 'yellow', 'white', 'black', 'dred'],
      ];
      assert.deepEqual(pattern, v);
    })
  );
});
