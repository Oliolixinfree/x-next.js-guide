'use client'

import { usePathname, useSelectedLayoutSegment } from 'next/navigation'
import { MENU } from './menu.data'
import { MenuItem } from './MenuItem'
import { match } from 'path-to-regexp'

export function Menu() {
    const pathname = usePathname()
    const segment = useSelectedLayoutSegment()
    console.log('pathname', pathname)
    console.log('first segment', segment)

    return (
        <nav className="flex gap-6 text-white/80">
            {MENU.map((menuItem) => (
                <MenuItem
                    key={menuItem.name}
                    menuItem={menuItem}
                    isActive={!!match(menuItem.href)(pathname)}
                />
            ))}
        </nav>
    )
}
