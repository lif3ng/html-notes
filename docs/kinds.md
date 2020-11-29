# 元素归类和索引

> HTML5 规范将元素分为三大类：元数据元素（metadata element）、流元素（flow element）和短语元素（phrasing element）。
>
> > ——[《HTML5 权威指南》](https://www.ituring.com.cn/book/931)[《The Definitive Guide to HTML5》(2011.12)](https://www.amazon.com/Definitive-Guide-HTML5-Adam-Freeman/dp/1430239603)
>
> > 现行标准中没找到这种说法

<object data="/content-venn.svg" />

上图出自 [Kinds of content](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content)（看不清请使用浏览器缩放查看），内容主要共分为以下几类（也有元素属于没提到其他类别）：

- Metadata 元数据
- Flow 流
- Sectioning 分节
- Heading 标题
- Phrasing 短语
- Embedded 嵌入
- Interactive 交互

分节内容，标题内容，措辞内容，嵌入内容和交互式内容都是流内容的类型。 元数据有时是流内容。 元数据和交互式内容有时是措辞内容。 嵌入式内容也是短语内容的一种，有时是交互式内容。

## 元数据内容

> **Metadata content** is content that sets up the presentation or behavior of the rest of the content, or that sets up the relationship of the document with other documents, or that conveys other "out of band" information.

## 流内容

> Most elements that are used in the body of documents and applications are categorized as **flow content**.

## 分节内容

> Sectioning content is content that defines the scope of headings and footers.

## 标题内容

> **Heading content** defines the header of a section (whether explicitly marked up using sectioning content elements, or implied by the heading content itself).
