---
layout: '../../layouts/BlogPost.astro'
title: 'Add Script Tags in React'
description: 'Use the useEffect to add the script tag to take effect? How to solve it?'
pubDate: 'June 7, 2023'
heroImage: '/react-add-script-error.png'
tags: ['Blog']
---

## Add script with useEffect

There are many suggestions to use 'useEffect' to add script tags in React. But there are always various reasons for errors when calling script functions.

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

Errors may still occur here because the script may not have finished loading yet. You will get an error because the script has not finished loading, but you called the script function.
![script-error](/react-add-script-error.png)

1. You can use "useLayoutEffect" instead of "useEffect". 'useLayoutEffect' is called after a DOM update. Therefore, scripts are available when rendering components.
2. Check that the script is loaded to ensure that the script loads successfully, and you can also load it only once.
3. Add a setTimeout call function to ensure that the script is loaded.

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

Of course, there are other ways to add script tags in React. But this is the way I use it in my project. Hope it helps you.

It is still recommended to add script tags to the index .html if it is not necessary.

```html

<!-- ... -->

<script src="xxx" async defer></script>

<!-- ... -->

```
