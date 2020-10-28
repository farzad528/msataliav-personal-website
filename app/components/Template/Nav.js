import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../data/contact";

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img
          src="https://github.com/farzad528/msataliav-personal-website/blob/main/public/images/me_icon.jpg"
          alt=""
        />
      </Link>
      <header>
        <h2>Natalia Vornic</h2>
        <p>
          <a href="vornic.natalia@gmail.com">vornic.natalia@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Natalia. I am a powerless pawn. I am a{" "}
        <a href="https://www.uh.edu/">University of Houston</a> MBA graduate,
        supply chain technology evangelist and future CEO of *insert name of future billion dollar
        company here*
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        &copy; Natalia Vornic <Link to="/">msnataliav.tech</Link>.
      </p>
    </section>
  </section>
);

export default Nav;
