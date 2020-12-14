# input 输入（框）

input 元素用于表单项的输入

## type="text" 文字

默认值

### dirname

输入文字的方向数据发送给服务器

```html
<form
  method="post"
  action="https://http-raw-body.lif3ng.repl.co"
  enctype="text/plain"
  target="result"
>
  <p>
    <input name="a" dirname="adir" />
  </p>
  <p><input name="b" dirname="bdir" dir="rtl" /></p>
  <button>submit</button>
</form>
<object type="text/html" name="result"></object>
```

### list

指定提供建议值的 datalist 元素,可以使用 HTML 原生下拉项检索能力。

option 同时包含 value 和 label 时，各个浏览器显示有差异。

```html
<input list="list" />
<datalist id="list">
  <option>v1</option>
  <option value="v2">show2</option>
  <option value="v3" label="show3"></option>
</datalist>
```

### maxlength

可输入字符最大数目

### size

**可见**字符数目（宽度），默认值为 20。实际测试结果偏宽。

```html
<p><input maxlength="5" /></p>
<p><input size="1" /></p>
<p><input size="2" /></p>
<p><input size="3" /></p>
<p><input size="4" /></p>
<p><input size="5" /></p>
<p><input maxlength="5" size="5" /></p>
```

### placeholder

值为空时占位内容

### value

初始值。表单 reset 时，表单项会重置为初始值。

```html
<form>
  <p><input value="1" /></p>
  <p><input placeholder="placeholder text" /></p>
  <button type="reset">reset</button>
</form>
```
