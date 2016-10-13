# piet-loader
load piet image from file

# how to use

/test/images/colors25.png  
![test pattern](/test/images/colors25.png)  
codel size is 25.

```
const loader = require('piet-loader');
const codelSize = 25;

// This returns Promise.
const p = loader.load('test/images/colors25.png', 25);

// use it!
p.then((pattern) => {
  console.log(pattern);
});
```

This returns below array of array.

```
[
  ['lred', 'lyellow', 'lgreen', 'lcyan', 'lblue', 'lmagenta'],
  ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta'],
  ['dred', 'dyellow', 'dgreen', 'dcyan', 'dblue', 'dmagenta'],
  ['white', 'white', 'white', 'black', 'black', 'black'],
]
```

This corresponds [Piet 20 colors](http://www.dangermouse.net/esoteric/piet.html)
