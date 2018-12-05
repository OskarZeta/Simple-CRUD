import React, { Component } from 'react';
import Link from 'next/link';

const Header = ({ id }) => {
  return(
    <header className="menu__header">
      <ul className="menu">
        <Link href="/">
          <a className={"menu__item" + (id == 1 ? " menu__item--active" : "")}>Home</a>
        </Link>
        <Link href="/books">
          <a className={"menu__item" + (id == 2 ? " menu__item--active" : "")}>Books</a>
        </Link>
        <Link href="/authors">
          <a className={"menu__item" + (id == 3 ? " menu__item--active" : "")}>Authors</a>
        </Link>
        <Link href="/genres">
          <a className={"menu__item" + (id == 4 ? " menu__item--active" : "")}>Genres</a>
        </Link>
      </ul>
      <style jsx>{`
        .menu{
          background: linear-gradient(to right, #afbec9, #f8f9fa);
          padding: 0;
          margin: 0 0 0 40px;
        }
        .menu__item{
          text-decoration: none;
          color: black;
          display: inline-block;
          padding: 10px;
          margin-right: 10px;
          background: white;
          font-weight: bold;
        }
        .menu__item--active{
          background: #17a2b8;
          color: white;
          position: relative;
          top: 10px;
        }
        .menu__header{
          margin-bottom: 40px;
        }
      `}</style>
    </header>
  );
}

export default Header;
