import './menu.css';
import { useState } from 'react';
import { menu as menuData} from "../../contants"

export function Menu() {
    const [menu] = useState(menuData)

    const [active, setActive] = useState('')
    return (
        <>
            {
                menu.map((item) => {
                    const {
                        name,
                        icon
                    } = item
                    return <div
                        key={icon}
                        onClick={() => setActive(name)}
                        className={`menu_item ${active === name ? "actived" : ""}`}>
                        <span className={icon} />
                        <span>{name}</span>
                    </div>
                })
            }</>
    )
}
