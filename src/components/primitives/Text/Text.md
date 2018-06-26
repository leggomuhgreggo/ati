## Serif

```js
const casual = require("casual-browserify");
Array.from({ length: 5 }).map((u, i) => (
  <Container key={i} style={{ marginTop: 20 }}>
    <Text serif size={i + 1}>
      {casual.sentences((n = 1))}
    </Text>
  </Container>
));
```

## Sans Serif

```js
const casual = require("casual-browserify");
Array.from({ length: 5 }).map((u, i) => (
  <Container sansSerif key={i} style={{ marginTop: 20 }}>
    <Text size={i + 1}>{casual.sentences((n = 1))}</Text>
  </Container>
));
```
