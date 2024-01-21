import React from 'react'
import Image from 'next/image'
// TODO: CTA layout
export const Header = (): JSX.Element => {
  return (
    <header
      className={`
        w-full h-[60dvh] flex flex-row items-center gap-10 px-7 py-4 bg-gray-300 justify-between
      `}
    >
      <article
        className={`
          flex flex-col items-center justify-around gap-4 text-left bg-stone-600 w-[50%]  h-96 p-4
        `}
      >
        <h1
          className={`w-full text-left`}
        >
          Title
        </h1>
        <p
          className={`
            text-left
          `}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae molestiae, totam quo id voluptatibus! Illum vero commodi natus ea incidunt eum, molestias fugit quos maiores necessitatibus voluptas sed minus.
        </p>
        <menu
          className={``}
        >
          <li
            className={``}
          >
            <button
              className={`bg-orange-400 p-2 rounded-md`}
            >
              Apply Today
            </button>
          </li>
        </menu>
      </article>
      <picture
        className={`

        `}
      >
        <div className={`size-96 bg-slate-600 rounded-lg`}/>
      </picture>
    </header>
  )
}