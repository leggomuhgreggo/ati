Image example from dimension props

```js
<Image key={1} src="http://fillmurray.com/400/400" width={400} height={400} />
```

Image example from style prop

```js
<Image
  key={2}
  src="http://fillmurray.com/1600/900"
  style={{ width: 1600, height: 900 }}
/>
```

Image example with fallback ratio

```js
<Image key={3} src="http://fillmurray.com/400/300" />
```

```js
const NewsletterImg = require("assets/images/newsletter.png");
const { View } = require("react-native");
<View style={{ maxHeight: 100 }}>
  <Image
    // width={664}
    // height={520}
    style={[
      {
        flex: 1,
        alignSelf: "stretch",
        width: undefined,
        height: undefined,
        height: "-webkit-fill-available.",
      },
    ]}
    resizeMode="contain"
    source={{ uri: NewsletterImg }}
  />
</View>;
```
