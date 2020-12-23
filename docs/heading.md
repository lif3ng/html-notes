# 标题内容

> Heading content defines the header of a section (whether explicitly marked up using sectioning content elements, or implied by the heading content itself).

标题内容定义了节（节内容元素/标题内容元素）的标题。

## h1 - h6

h1 - h6 代表不同级别的标题

```html
<h1>heading level 1</h1>
<h2>heading level 2</h2>
<h3>heading level 3</h3>
<h4>heading level 4</h4>
<h5>heading level 5</h5>
<h6>heading level 6</h6>
```

## hgroup

hgroup 用于包含子标题的情况，在从 h1 到 h6 的标题体系中的位置取决于其第一个标题子元素。

```html
<hgroup>
  <h1>heading</h1>
  <h2>heading description</h2>
</hgroup>
<h2>sub heading 1</h2>
come content
<h2>sub heading 2</h2>
some content
<h2>sub heading 3</h2>
come content
```
