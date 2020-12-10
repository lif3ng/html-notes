# 表单

form 元素属性

## action 表单提交路径

指向提交地址，支持绝对路径和相对路径。可通过 base 元素修改相对路径。

## method 表单提交方法

GET 请求用于安全交互，POST 请求用于非安全交互

## enctype 指定数据编码

- `application/x-www-form-urlencoded` 默认值。不能上传文件
- `multipart/form-data` 能上传文件
- `text/plain` 各浏览器实现有差异，应避免使用

```html
<base href="https://untitled-su9syzlte725.runkit.sh/" />
<form method="post" action="/" enctype="multipart/form-data" target="result">
  <p>
    <input name="field1" value="value1" />
  </p>
  <p><input name="field2" value="value2" /></p>
  <button>submit</button>
</form>
<object type="text/html" name="result" width="300" height="100"></object>
```

## autocomplete 自动补全

取值为 `on`, `off`. 默认值为 `on`.设置后内部 input 上的`autocomplete`属性可以覆盖这个行为。

## target 提交后目标显示位置

与 a 元素`target` 属性一样

- `_self` 默认值。当前窗口
- `_blank` 新窗口
- `_parent` 父窗窗框(窗口或 frame)
- `_top` 顶层窗口
- `<frame>` 指定窗框

## name 设置表单名称

用于在使用 DOM 时区分各个表单
