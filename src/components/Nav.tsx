
export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a className="navbar-brand js-scroll-trigger" href="#about">
        <span className="d-block d-lg-none p-2">
          <img src="./boxer.svg" className="rounded float-left" alt="avatar" width="55px" height="55px" />
          <a href="/" className="portfolio-heading">
            <b>Tyler Momoh</b>
          </a>
        </span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="https://avatars.githubusercontent.com/u/53145644?v=4"
            alt="avatars"
          />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a id="about-nav" className="nav-link js-scroll-trigger" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#experience">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#education">
              Education
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#skills">
              Skills
            </a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#projects">
              Projects
            </a>
          </li>

          <div className="hr-line"></div>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="https://dev.to/tylerjusfly" target="_blank" rel="noreferrer">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="https://github.com/tylerjusfly" target="_blank" rel="noreferrer">
              Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
