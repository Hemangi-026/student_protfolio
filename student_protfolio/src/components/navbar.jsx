import { useEffect, useState } from "react";

const SECTIONS = ["about", "skills", "footer"];

function NavBar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight / 3;

      let current = SECTIONS[0];
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="navbar">
      <span className="navbar__brand">~/portfolio</span>
      <ul className="navbar__links">
        {SECTIONS.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? "navbar__link navbar__link--active" : "navbar__link"}
            >
              {id}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;