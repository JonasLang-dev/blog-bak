---
id: queue
title: Queue
sidebar_label: Queue
slug: /queue
---

# 队列

队列时遵循**先进先出**(FIFO,先来先服务)原则的一组有序的项。队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须在队列的末尾。

### 创建队列

声明类

```javascript
class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
}
```

声明 count 属性来控制队列的大小。将要从队列前端移除元素，需要一个变量来追踪第一个元素，因此声明一个 lowestCount 变量。

- enqueue(element(s)): 向队列尾部添加一个(或多个)新的项。

- dequeue(): 移除队列的第一项(即排在队列最前面的项）并返回移除的元素)。

- peek(): 返回队列中第一个元素---最先被添加。

- isEmpty(): 如果队列中不包含任何元素返回 true，否则 false。

- size(): 返回队列包含的元素个数

### 向队列添加元素

```javascript
enqueue(element) {
    this.items[this.count] = element;
    this.count++;
}
```

### 向队列移除元素

```javascript
dequeue() {
    if(this.isEmpty()) {
        return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
}
```

### 查看队列头元素

```javascript
peek() {
    if(this.isEmpty()) {
        return undefined;
    }
    return this.items[this.lowestCount];
}
```

### 检查队列是否为空并获取长度

```javascript
isEmpty() {
    return this.count - this.lowestCount === 0;
}

size() {
    return this.count - this.lowestCount;
}
//亦可
isEmpty () {
    return this.size() === 0;
}
```

### 清空队列

```javascript
clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
}
```

### 创建 toString 方法

```javascript
toString() {
    if(this.isEmpty()) {
        return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for(let i = this.lowestCount + 1; i < this.count; i++) {
        objString = `${objString},${this.items[i]}`;
    }
    return objString;
}
```

### 综合

```javascript
class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

const queue = new Queue();
queue.size(); //0
queue.isEmpty(); //true
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("v");
queue.enqueue("d");
queue.peek(); //"a"
queue.dequeue(); //"a"
queue.size(); //3;
queue.isEmpty(); //false;
queue.toString(); //("b,v,d");
```

## 双端队列数据结构

**双端队列**(deque, 或称 double-ended queue)是允许我们同时从前端和后端添加和移除元素的特殊队列。

### 创建 Deque 类

```javascript
class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
}
```

双端队列包含相同的内部属性和一下方法：isEmpty、clear、size 和 toString。

- addFront(element)

- addBack(element)

- removeFront()

- removeBack()

- peekFront()

- peekBack()

### 像双端队列的前端添加元素

```javascript
addFront(element) {
    if(this.isEmpty()) {
        this.addBack(element)
    }  else if (this.lowestCount > 0) {
        this.lowestCount--;
        this.items[this.lowestCount] = element;
    } else {
        for (let i = this.count; i>0; i--) {
            this.items[i] = this.items[i - 1];
        }
        this.count--;
        this.lowestCount = 0;
        this.items[0] = element;
    }
}
```

### 综合

```javascript
class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count--;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.count];
    delete this.items[this.count];
    this.count--;
    return result;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
```
