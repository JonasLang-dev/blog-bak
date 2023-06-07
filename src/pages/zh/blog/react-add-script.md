---
layout: '../../../layouts/BlogPost.astro'
title: '在 React 中添加script标签'
description: '使用useEffect添加的脚本标签为生效? 如何解决?'
pubDate: 'June 7, 2023'
heroImage: '/react-add-script-error.png'
tags: ['Blog']
---

## Add script with useEffect

有很多人建议使用 'useEffect' 在 React 中添加脚本标签。但是总会有各种原因导致调用脚本函数时出现错误。

```tsx
import React, { useEffect } from 'react';
const Component = () => {
 useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://xxxx/api.js';
  script.async = true;
  document.body.appendChild(script);
  return () => {
   document.body.removeChild(script);
  }
 }, []);
 return (
  <div>
   <h1>Component</h1>
  </div>
 );

}

export default Component;
```

这里任然可能会出现错误，因为脚本可能还没有加载完成。你便会得到一个错误，因为脚本还没有加载完成，但是你却调用了脚本函数。
![script-error](/react-add-script-error.png)

1. 可以使用“useLayoutEffect”而不是“useEffect”。'useLayoutEffect' 是在 DOM 更新后调用的。因此，在渲染组件时，脚本可用。
2. 检查脚本是否已加载用来确保脚本成功加载，同时也可以做到只加载一次。
3. 添加setTimeout调用函数以确保加载脚本。

```tsx
import React, { useLayoutEffect } from 'react';
const Component = () => {

 function GetMap() {
// some code
 }

  useLayoutEffect(() => {
    if (!window.Microsoft) {
      const script = document.createElement('script')
      script.src =
        'https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=[YOUR_KEY]]'
      script.async = true
      script.defer = true
      script.type = 'text/javascript'
      document.body.appendChild(script)
    } else { 
   setTimeout(GetMap(), 500)
 }
    GetMap()
  }, [window.Microsoft])
 return (
 <div>
  <h1>Component</h1>
 </div>
 );
}

export default Component;
```

当然，还有其他方法可以在 React 中添加脚本标签。但这是我在项目中使用的方式。希望它能帮助你。

非必要条件任然推荐在index.html中添加脚本标签。

```html
<!-- ... -->

<script src="xxx" async defer></script>

<!-- ... -->

```
