```jsx
<Grid>
  {Array.from({ length: 4 }).map((u, i) => (
    <Image
      key={i}
      style={{
        height: 100,
        width: 100,
      }}
      source={{
        uri: "http://via.placeholder.com/100x100",
      }}
    />
  ))}
</Grid>
```
