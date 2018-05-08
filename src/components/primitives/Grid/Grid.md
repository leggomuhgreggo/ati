```jsx
const { Image } = require("react-native");
<Grid>
  {Array.from({ length: 4 }).map((u, i) => (
    <Image
      style={{
        height: 100,
        width: 100,
      }}
      source={{
        uri: "http://via.placeholder.com/100x100",
        height: 100,
        width: 100,
      }}
    />
  ))}
</Grid>;
```
