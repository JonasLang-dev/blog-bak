---
id: array
title: 栈
sidebar_label: 栈
slug: /stack
---

[TOC]

# 栈 Stack

**栈**是一种遵从**先进先出(LIFO)**原则的有序集合。新添加或待删除的元素都保存在栈的同一端，称为栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，就元素都接近栈底。例如一摞书或叠盘子。

栈也被用在编程语言的编译器和内存中保存变量、方法调用等，也被用于浏览器历史记录

## 创建一个基于数组的栈

创建一个类来表示栈。简单地从创建一个 stack-array.js 文件并声明 Stack 类开始

```js
class Stack {
  constructor() {
    this.items = [];
  }
}
```

- push(element(s)); 添加一个（或几个）新元素到栈顶。
- pop(); 移除栈顶的元素，同时返回被移除的元素。
- peek(); 返回栈顶的元素，不对栈顶做任何修改（该方法不会移除栈顶的元素，仅仅返回它。
- isEmpty(); 如果栈里没有任何元素就返回为 true,否则返回 false。
- clear(); 移除栈里的所有元素
- size(); 返回栈里的元素个数。该方法和数组的 length 属性很类似

### 向栈添加元素

实现 push，该方法负责往栈里添加新元素，该方法织田家元素到栈顶，也就是栈的末尾。

```js
push(element) {
  this.items.push(element);
}
```

### 从栈移除元素

实现 pop 方法，该方法主要用来移除栈里的元素。栈遵从 LIFO 原则。

```js
pop() {
  return this.items.pop()
}
```

### 查看栈顶元素

实现额外的辅助方法

```js
peek() {
  return this.items[this.items.length - 1];
}
```

因为是用数组来保存元素，所以访问最后一个元素可以用 length - 1

### 检查栈是否为空

实现 isEmpty，如果栈为空的话返回为 true,否则返回 false。

```js
isEmpty() {
  return this.items.length === 0;
}
```

使用 isEmpty 方法，简单地判断内部数组的长度是否为 0。

类似于素组的 length 属性，我们也能实现栈的 length。对于集合，最好使用 size 代替 length。因为栈的内部使用数组保存元素，所以能简单返回栈的长度。

```js
size() {
  return this.items.length;
}
```

### 清空栈元素

实现 clear()来移除栈里的所有元素

```js
clear() {
  this.items = [];
}
```

### 综合

```js
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
  clear() {
    this.items = [];
  }
}
const stack = new Stack();
```

## 创建一个基于 JavaScript 对象的 Stack 类
