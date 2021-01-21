# details 详情

`details` 元素生成一个可以展开收起的区域，`open` 属性用于标识展开状态。

`details` 通常包含一个 `summary` 元素用于展示说明标签或标题，如果没有 `summary` 元素，标题将根据 lang 显示为 “details” 或 “详细信息”。

```html
<details>content</details>

<details open>content</details>

<details>
  <summary>title</summary>
  content
</details>
```

## 参考

https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element
