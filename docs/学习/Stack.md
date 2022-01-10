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

创建一个 Stack 类最简单的方式是使用一个数组来存储元素。在处理大量数据的时候，在使用数组时，大部分方法的时间复杂度是 O<sub>(n)</sub>

O<sub>(n)</sub>的意思是，我们需要迭代整个数组直到找到要找到的那个元素，最坏的情况下需要迭代曾哥数组的所有位置，其中的 n 代表数组的长度。数组元素越多，所需时间更长。另外数组是元素的一个有序集合，为保证元素排序有序，它会占用更多的内存空间。

### 声明 stack 类

```javascript
class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  // 方法
}
```

在这个版本的 Stack 中使用 count 属性来记录栈的大小

### 向栈中插入元素

由于是使用的是一个对象，push 方法只允许一次插入一个元素

```javascript
push(element) {
    this.items[this.count] = element;
    this.count++;
}
```

在**JavaScript**中，对象是一系列**键值对**的集合。向栈中添加元素，我们将使用 count 变量作为 items 对象的键名，插入的元素则是它的值。在向栈插入元素后，递增 count 变量。

```javascript
const stack = new Stack();
stack.push(5);
stack.push(8);

// items
items = {
  0: 5,
  1: 8,
};
count = 2;
```

### 验证一个栈是否为空和它的大小

通过 count 判断

```javascript
size() {
    return this.count;
}

isEmpty() {
    return this.count === 0;
}
```

### 从栈弹出元素

```javascript
pop() {
    if(this.isEmpty()) {
    return undefined
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
}
```

首先判空，其次移除后 count 属性减 1,并保存栈顶的值，然后 delete 删除该元素，最后返回保存栈顶的值。

### 查看栈顶的值并将栈顶清空

```javascript
peek() {
    if (this.isEmpty()) {
        return undefined;
    } else {
    return this.items[this.count - 1];
    }
}


//清空，只需要将它的值恢复为构造函数中使用的值即可
clear() {
    this.items = {};
    this.count = 0;
}

//也可以遵循LIFO原则删除
while (!this.isEmpty()) {
    this.pop();
}
```

### 创建 toString 方法

在数组中不需要 toString 方式的实现，因为数组结构可以直接使用数组已经提供的 toString 方法。

```javascript
toString() {
    if (this.isEmpty()) {
        return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
        objString = `${objString},${this.items[i]}`;
    }
    return objString;
}
```

### 完整代码

```javascript
class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      return this.items[this.count - 1];
    }
  }
  clear() {
    this.items = {};
    this.count = 0;
    /** 
        while (!this.isEmpty()) {
            this.pop();        
        }
        **/
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
```

除了 toString 方法，其他创建的方法复杂度均为 0<sub>(1)</sub>

### 保护数据机构内部元素

我们希望保护内部元素，只有暴露出的方法才能修改内部结构。

```javascript
const stack = new Stack();
console.log(Object.getOwnPropertyNames(stack)); //Array [ "count", "items" ]
console.log(Object.keys(stack)); //Array [ "count", "items" ]
console.log(stack.items); //Object {  }
```

ES2015(ES6)语法创建了 stack 类。是基于原型的。尽管基于原型的类能节省内存空间，并在拓展方面由于基于函数的类，但这种方式不能声明私有属性(变量)或方法

#### 下划线命名约定

```javascript
class Stack {
  constructor() {
    this._count = 0;
    this._items = {};
  }
}
```

只是一种约定，并不能保护数据，而且只能依赖于使用我们代码开发者所具备的常识。

#### 用 ES2015 的限定作用域 Symbol 实现类

ES2015 新增了一种叫做 Symbol 的基本类型，他是不可变的，可以用作对象的属性。

```javascript
const _itmes = Symbol("stackItems");
class Stack {
  constructor() {
    this[_items] = [];
  }
}
```

这种方法创建了一个假的私有属性，因为 ES2015 新增的 Object.getOwnProperySymbols 方法能够取到类里面声明的所有 Symbols 属性。

访问 stack[Obejct.getOwnPropertySymbols(stack)[0]]可以得到\_\_items,所以这个方法不可行。

#### 用 ES2015 的 WeakMap 实现类

一种数据类型可以确保属性是私有的,WeakMap 键值对。

```javascript
const items = new WeakMap();
// 声明一个WeakMap类型的变量items.

class Stack {
  constructor() {
    items.set(this, []);
    // 以this（Stack类自己的引用）为键，把代表栈的数组存入items。
  }
  push(element) {
    const s = items.get(this);
    // 以this为键从items中取值
    s.push(element);
  }
  pop() {
    const s = items.get(this);
    const r = s.pop();
    return r;
  }
  // ...
}
```

items 在 Stack 类里是真正的私有属性。采用这种方法，代码可读性不强，而且在拓展类时无法继承私有属性

#### ECMAScript 类属性提案

TypeScript 提供了一个给属性和方法使用的 private 修饰符，该修饰符只在编译时有用。在代码被转移完成后，属性同样是公开的

```javascript
class Stack {
  #count = 0;
  #items = 0;
}
```

使用#来声明私有属性，在此了解[tc39/建议类字段：公共和私有字段建议的正交通知组合 (github.com)](https://github.com/tc39/proposal-class-fields)。

### 引用

#### 十进制到二进制
