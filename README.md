# rust-print README

一个可以用来**一键打印选中变量的小工具**

目前仅支持 `Rust`、`JavaScript`、`TypeScript` 文件。

> [github](https://github.com/liuqh0609/vscode-print)

## 快捷键

- window: `ctrl+shift+L`
- Mac: `cmd+shift+L`

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

### JavaScript/TypeScript

```js
let a = 1;
console.log("【 a 】==>", a);
```

## todo

- [x] Rust-> println!()
- [x] JavaScript/TypeScript-> console.log()
- [ ] 支持批量删除打印语句
- [ ] 支持自定义打印格式
- [ ] 支持更多文件格式
