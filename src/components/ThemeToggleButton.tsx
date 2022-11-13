import React, { useEffect, useLayoutEffect, useState } from 'react'
import { IoSunny, IoMoon } from 'react-icons/io5/index'

const themes = ['light', 'dark']

const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined
    }
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
    return 'light'
  })
  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  useLayoutEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  useLayoutEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? (
    <div className="inline-flex items-center p-[1px] rounded-3xl bg-orange-300 dark:bg-zinc-600">
      {themes.map(t => {
        const checked = t === theme
        return (
          <button
            key={t}
            className={`${
              checked ? 'bg-white ' : ''
            } cursor-pointer rounded-3xl p-2`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {t === 'light' ? <IoSunny /> : <IoMoon color="black" />}
          </button>
        )
      })}
    </div>
  ) : (
    <div></div>
  )
}

export default ThemeToggle
