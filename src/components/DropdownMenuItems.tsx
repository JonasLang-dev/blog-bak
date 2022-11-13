import { Menu } from '@headlessui/react'
import React, { FC } from 'react'

function className(...calsses: string[]) {
  return calsses.filter(Boolean).join(' ')
}

type Props = {
  href: string
  children: React.ReactNode
}

const DropdownMenuItems: FC<Props> = ({ href, children }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={href}
          className={className(
            active ? 'bg-orange-200 dark:bg-zinc-700' : '',
            'block px-4 py-2 text-sm'
          )}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  )
}

export default DropdownMenuItems
