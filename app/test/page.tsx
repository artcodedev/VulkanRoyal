

// import Image from "next/image";
// import styles from "../style/page.module.css";

'use client'

import React from 'react'

export default function Home1() {

  const [ active, setActive ] = React.useState<Number | null>(null);

  const items = [
    {id: 1, link: "some"},
    {id: 1, link: "some"},
    {id: 1, link: "some"},
    {id: 1, link: "some"},
    {id: 1, link: "some"},
    {id: 1, link: "some"}
  ]

  function onClick(e: any) {
    const index = +e.target.dataset.index;
    setActive(active === index ? 0 : index);
  }

  return (
    <ul>
      {items.map((n, i) => (
        <li key={n.id}>
          <span data-index={i} onClick={onClick}>{n.id}</span>
          {active === i ? <div>{n.link}</div> : null}
        </li>
      ))}
    </ul>
  )
}
