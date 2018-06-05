Reguler Post:

```js
const getPostArray = require("../../../../data.js").getPostArray;

const post = getPostArray(1)[0];
<Post {...post} key={1} containerStyle={{ width: 300 }} />;
```

Overlay Post:

```js
const getPostArray = require("../../../../data.js").getPostArray;

const post = getPostArray(1)[0];
<Post
  key={2}
  layoutVariant="overlay"
  {...post}
  containerStyle={{ width: 300 }}
/>;
```

Reduced Post:

```js
const getPostArray = require("../../../../data.js").getPostArray;

const post = getPostArray(1)[0];
<Post
  key={3}
  layoutVariant="reduced"
  {...post}
  containerStyle={{ width: 300 }}
/>;
```
