Reguler Post:

```js
const getPostArray = require("../../../../data.js").getPostArray;

const post = getPostArray(1)[0];
<Post {...post} containerStyle={{ width: 300 }} />;
```

Overlay Post:

```js
const getPostArray = require("../../../../data.js").getPostArray;

const post = getPostArray(1)[0];
<Post layoutVariant="overlay" {...post} containerStyle={{ width: 300 }} />;
```

Reduced Post:

```js
const getPostArray = require("../../../../data.js").getPostArray;

const post = getPostArray(1)[0];
<Post layoutVariant="reduced" {...post} containerStyle={{ width: 300 }} />;
```
