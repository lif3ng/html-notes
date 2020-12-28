# iframe

## src

资源 URL

## srcdoc

文档完整代码。

在 vue/react 模版或 jsx 代码中，可使用模版字符串直接拼接（会自动转义）。

```html
<iframe
  srcdoc="<html>
<body>
    <h1>heading</h1>
    <style>body{background:yellow}</style>
</body>"
/>
```

## name

## allow

## allowfullscreen — Whether to allow the iframe's contents to use requestFullscreen()

## width — Horizontal dimension

## height — Vertical dimension

## referrerpolicy — Referrer policy for fetches initiated by the element

## loading — Used when determining loading deferral

## 参考

- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe
- https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element
