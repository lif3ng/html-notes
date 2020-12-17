# 表单校验

## 禁用验证

form 设置`novalidate`属性或使用 button/input(type="submit")设置`formnovalidate`禁用验证。

```html
<form
  method="post"
  action="https://http-raw-body.lif3ng.repl.co"
  enctype="text/plain"
  target="result"
>
  <p><input name="field1" required /></p>
  <p><button>submit</button></p>
  <p><button formnovalidate>novalidate submit</button></p>
</form>
<object name="result" type="text/html" />
```

## 验证属性

在 form submit 事件触发前进行验证

### required 必填

可用于 textarea、select、input 元素，文本框必须输入，下拉必须选择，复选框必须勾选（如用户协议）。

```html
<form
  method="post"
  action="https://http-raw-body.lif3ng.repl.co"
  enctype="text/plain"
  target="result"
>
  <p><input name="field1" required /></p>
  <p><button>submit</button></p>
  <p><button formnovalidate>novalidate submit</button></p>
</form>
<object name="result" type="text/html" />
```
