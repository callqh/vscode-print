# rust-print README

一个可以用来**一键打印选中变量的小工具**

目前支持 `Rust` ，以及前端相关的各种文件`ts(x)`、`js(x)`、`vue`。

## 快捷键

- window: `ctrl+shift+L`
- Mac: `cmd+shift+L`

🌈 注意点：

> 当文件为`vue`或者`jsx`，`tsx`时打印出的信息会附带额外的 icon 和[中国色](http://zhongguose.com/)。
>
> 普通 js 文件则不会携带这些额外的信息，因为 js 文件可能会在 node 环境端（控制台中打印），所以不会携带 icon 和颜色。如果携带的话会干扰正常的打印信息

> [插件源码地址](https://github.com/liuqh0609/vscode-print) 欢迎提供 issue，贡献源码
>
> [作者博客: http://www.liuqh.cn](http://www.liuqh.cn/)
> 会时长更新自己的技术积累，以及一些工作中的实践，欢迎关注。

## 示例

### Rust

```rust
fn main() {
    let num = 1;
    let v = vec![1, 2, 3, 4];
    // 以下为当前打印的格式
    println!("【 v 】==> {:?}", v);
    println!("【 v 】==>: {:?}", v);
}

```

### JavaScript

```js
let a = 1;
console.log("【 a 】==>", a);
```

### TypeScript/Vue

```ts
console.log(
  "%c 🦋 1:",
  "font-size:22px;background-color:rgb(75, 30, 47);color:#fff;",
  1
);
```

## todo

- [x] Rust-> println!()
- [x] JavaScript/TypeScript-> console.log()
- [ ] 支持批量删除打印语句
- [ ] 支持自定义打印格式
- [ ] 支持更多文件格式
