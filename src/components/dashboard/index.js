import React from "react";
import "./styles/index.css";

export default function Dashboard() {
  return (
    <div className="wrapper">
      <nav className="nav">
        <ul className="nav__list" role="menubar">
          <li className="nav__item nav__item--isActive">
            <a
              href="#home"
              className="nav__link focus--box-shadow"
              role="menuitem"
              aria-label="Home"
            >
              <svg
                className="nav__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="presentation"
              >
                <path
                  fill="#6563ff"
                  d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"
                />
              </svg>
            </a>
          </li>
          
          <li className="nav__item">
            <a
              href="#home"
              className="nav__link focus--box-shadow"
              role="menuitem"
              aria-label="Informational messages"
            >
              <svg
                className="nav__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="presentation"
              >
                <path d="M12,11a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V12A1,1,0,0,0,12,11Zm0-3a1,1,0,1,0,1,1A1,1,0,0,0,12,8Zm0-6A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20Z" />
              </svg>
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#home"
              className="nav__link focus--box-shadow"
              role="menuitem"
              aria-label="Collections"
            >
              <svg
                className="nav__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="presentation"
              >
                <path d="M2.5,10.56l9,5.2a1,1,0,0,0,1,0l9-5.2a1,1,0,0,0,0-1.73l-9-5.2a1,1,0,0,0-1,0l-9,5.2a1,1,0,0,0,0,1.73ZM12,5.65l7,4-7,4.05L5,9.69Zm8.5,7.79L12,18.35,3.5,13.44a1,1,0,0,0-1.37.36,1,1,0,0,0,.37,1.37l9,5.2a1,1,0,0,0,1,0l9-5.2a1,1,0,0,0,.37-1.37A1,1,0,0,0,20.5,13.44Z" />
              </svg>
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#home"
              className="nav__link focus--box-shadow"
              role="menuitem"
              aria-label="Analytics"
            >
              <svg
                className="nav__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="presentation"
              >
                <path d="M6,13H2a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H6a1,1,0,0,0,1-1V14A1,1,0,0,0,6,13ZM5,21H3V15H5ZM22,9H18a1,1,0,0,0-1,1V22a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V10A1,1,0,0,0,22,9ZM21,21H19V11h2ZM14,1H10A1,1,0,0,0,9,2V22a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V2A1,1,0,0,0,14,1ZM13,21H11V3h2Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      <main className="main">
        <header className="header">
          <div className="header__wrapper">
            <div className="profile">
              <button className="profile__button">
                <span className="profile__name">Jessica</span>
                <img
                  className="profile__img"
                  src="/images/img/julian-wan-WNoLnJo7tS8-unsplash.jpg"
                  alt="Profile picture"
                  
                />
              </button>
            </div>
          </div>
        </header>
        <section className="wrapper_section">
          <header className="section__header">
            <h2 className="section__title">Statistics</h2>
           
          </header>
          <ul className="team">
            <li className="team__item">
              <a className="team__link focus--box-shadow" href="#home">
                <div className="team__header">
                  <ul className="photo">
                    <li className="photo__item">
                      <span className="photo__substrate">+2</span>
                    </li>
                    <li className="photo__item">
                      <img
                        src="/images/img/julian-wan-WNoLnJo7tS8-unsplash.jpg"
                        alt="Jack's photo"
                      />
                    </li>
                    <li className="photo__item">
                      <img
                        src="/images/img/seth-doyle-uJ8LNVCBjFQ-unsplash.jpg"
                        alt="Jessica's photo"
                      />
                    </li>
                  </ul>
                  
                </div>
                <div className="team__inform">
                  <p className="team__name">No of Reviews Posted</p>
                  <time className="date" datetime="2020-05-05T10:00:00">
                    55
                  </time>
                </div>
              </a>
            </li>
            <li className="team__item">
              <a className="team__link focus--box-shadow" href="#home">
                <div className="team__header">
                  <ul className="photo">
                    <li className="photo__item">
                      <span className="photo__substrate">+6</span>
                    </li>
                    <li className="photo__item">
                      <img
                        src="/images/img/raychan-9UkAHVs5y7Y-unsplash.jpg"
                        alt="Yulia's photo"
                      />
                    </li>
                    <li className="photo__item">
                      <img
                        src="/images/img/seth-doyle-uJ8LNVCBjFQ-unsplash.jpg"
                        alt="Jessica's photo"
                      />
                    </li>
                  </ul>
                  
                </div>
                <div className="team__inform">
                  <p className="team__name">No of Favourite Places</p>
                  <time className="date" datetime="2020-05-01T10:00:00">
                    20
                  </time>
                </div>
              </a>
            </li>
            <li className="team__item">
              <a className="team__link focus--box-shadow" href="#home">
                <div className="team__header">
                  <ul className="photo">
                    <li className="photo__item">
                      <img
                        src="/images/img/seth-doyle-uJ8LNVCBjFQ-unsplash.jpg"
                        alt="Jessica's photo"
                      />
                    </li>
                  </ul>
                  
                </div>
                <div className="team__inform">
                  <p className="team__name">Design development</p>
                  <time className="date" datetime="2020-01-10T10:00:00">
                    10 January, 2020
                  </time>
                </div>
              </a>
            </li>
          </ul>
        </section>
        <section className="wrapper_section">
          <header className="section__header">
            <h2 className="section__title">Favourite Places</h2>
            <div className="section__control">
              <button
                className="section__button focus--box-shadow"
                type="button"
                aria-label="Filter projects"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  role="presentation"
                >
                  <path d="M20,8.18V3a1,1,0,0,0-2,0V8.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V13.82a3,3,0,0,0,0-5.64ZM19,12a1,1,0,1,1,1-1A1,1,0,0,1,19,12Zm-6,2.18V3a1,1,0,0,0-2,0V14.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V19.82a3,3,0,0,0,0-5.64ZM12,18a1,1,0,1,1,1-1A1,1,0,0,1,12,18ZM6,6.18V3A1,1,0,0,0,4,3V6.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V11.82A3,3,0,0,0,6,6.18ZM5,10A1,1,0,1,1,6,9,1,1,0,0,1,5,10Z" />
                </svg>
              </button>
              <button
                className="section__button section__button--painted focus--box-shadow"
                type="button"
                aria-label="Add New project"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  role="presentation"
                >
                  <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" />
                </svg>
              </button>
            </div>
          </header>
          <ul className="project">
            <li className="project__item">
              <a href="#home" className="project__link focus--box-shadow">
                <div className="project__wrapper">
                  <div className="project__element project__icon">
                    <div
                      className="icon icon--viking"
                      aria-label="Icon of the 'Showcase Design' project"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        role="presentation"
                      >
                        <path d="M7,10H9A1,1,0,0,0,9,8H7a1,1,0,0,0,0,2ZM21,4H13V3a1,1,0,0,0-2,0V4H3A1,1,0,0,0,2,5V15a3,3,0,0,0,3,3H9.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L11,19.41V21a1,1,0,0,0,2,0V19.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L14.41,18H19a3,3,0,0,0,3-3V5A1,1,0,0,0,21,4ZM20,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V6H20ZM7,14h6a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="project__element project__inform">
                  <h6 className="project__inform-name">
                   Location Name
                  </h6>
                </div>
                  <div className="project__element project__photo">
                    <h6 style={{fontSize:'1rem',paddingTop:'.5rem'}}>Rating </h6>
                  </div>
                  <div className="project__element project__date">
                    Location
                  </div>
                  <div className="project__element project__status">
                    <span className="status status--published">View Details</span>
                  </div>
                  <div className="project__element project__setting">
                   
                  </div>
                </div>
              </a>
            </li>
            <li className="project__item">
              <a href="#home" className="project__link focus--box-shadow">
                <div className="project__wrapper">
                  <div className="project__element project__icon">
                    <div
                      className="icon icon--rajah"
                      aria-label="Icon for the project 'Book cover design'"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        role="presentation"
                      >
                        <path d="M15,6H9A1,1,0,0,0,8,7v4a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V7A1,1,0,0,0,15,6Zm-1,4H10V8h4Zm3-8H5A1,1,0,0,0,4,3V21a1,1,0,0,0,1,1H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Zm1,17a1,1,0,0,1-1,1H6V4H17a1,1,0,0,1,1,1Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="project__element project__inform">
                    <h6 className="project__inform-name">
                     Location Name
                    </h6>
                  </div>
                  <div className="project__element project__photo">
                    <h6 style={{fontSize:'1rem',paddingTop:'.5rem'}}>Rating </h6>
                  </div>
                  <div className="project__element project__date">
                    Location
                  </div>
                  <div className="project__element project__status">
                    <span className="status status--published">View Details</span>
                  </div>
                  <div className="project__element project__setting">
                   
                  </div>
                </div>
              </a>
            </li>
            <li className="project__item">
              <a href="#home" className="project__link focus--box-shadow">
                <div className="project__wrapper">
                  <div className="project__element project__icon">
                    <div
                      className="icon icon--viking"
                      aria-label="Icon for the project 'Book cover design'"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        role="presentation"
                      >
                        <path d="M14,18a1,1,0,0,0,1-1V15a1,1,0,0,0-2,0v2A1,1,0,0,0,14,18Zm-4,0a1,1,0,0,0,1-1V15a1,1,0,0,0-2,0v2A1,1,0,0,0,10,18ZM19,6H17.62L15.89,2.55a1,1,0,1,0-1.78.9L15.38,6H8.62L9.89,3.45a1,1,0,0,0-1.78-.9L6.38,6H5a3,3,0,0,0-.92,5.84l.74,7.46a3,3,0,0,0,3,2.7h8.38a3,3,0,0,0,3-2.7l.74-7.46A3,3,0,0,0,19,6ZM17.19,19.1a1,1,0,0,1-1,.9H7.81a1,1,0,0,1-1-.9L6.1,12H17.9ZM19,10H5A1,1,0,0,1,5,8H19a1,1,0,0,1,0,2Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="project__element project__inform">
                    <h6 className="project__inform-name">
                     Location Name
                    </h6>
                  </div>
                  <div className="project__element project__photo">
                    <h6 style={{fontSize:'1rem',paddingTop:'.5rem'}}>Rating </h6>
                  </div>
                  <div className="project__element project__date">
                    Location
                  </div>
                  <div className="project__element project__status">
                    <span className="status status--published">View Details</span>
                  </div>
                  <div className="project__element project__setting">
                   
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </section>
      </main>
      <aside className="aside">
        <section className="wrapper_section">
          <div className="aside__control">
            <button
              className="aside__button focus--box-shadow"
              type="button"
              aria-label="Close profile settings"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="presentation"
              >
                <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
              </svg>
            </button>
            <button
              className="aside__button aside__button--notification focus--box-shadow"
              type="button"
              aria-label="You have new feedback"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="presentation"
              >
                <path d="M18,13.18V10a6,6,0,0,0-5-5.91V3a1,1,0,0,0-2,0V4.09A6,6,0,0,0,6,10v3.18A3,3,0,0,0,4,16v2a1,1,0,0,0,1,1H8.14a4,4,0,0,0,7.72,0H19a1,1,0,0,0,1-1V16A3,3,0,0,0,18,13.18ZM8,10a4,4,0,0,1,8,0v3H8Zm4,10a2,2,0,0,1-1.72-1h3.44A2,2,0,0,1,12,20Zm6-3H6V16a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" />
              </svg>
            </button>
          </div>
          <div className="profile-main">
            <button
              className="profile-main__setting focus--box-shadow"
              type="button"
            >
              <img
                className="profile-main__photo"
                src="/images/img/seth-doyle-uJ8LNVCBjFQ-unsplash.jpg"
                alt="Profile pic"
              />
            </button>
            <h1 className="profile-main__name">Jessica</h1>
          </div>
          <ul className="statistics">
            <li className="statistics__entry">
              <h6 className="statistics__entry-description" href="#home">
                Username
              </h6>
              <span className="statistics__entry-quantity">Ibad Ahmad</span>
            </li>
            <li className="statistics__entry">
              <h6 className="statistics__entry-description" href="#home">
              Email
              </h6>
              <span className="statistics__entry-quantity"> ibad@gmail.com</span>
            </li>
            <li className="statistics__entry">
              <h6 className="statistics__entry-description" href="#home">
                Created At
              </h6>
              <span className="statistics__entry-quantity"> <time className="date" datetime="2020-05-05T10:00:00">
              05 May, 2020
            </time></span>
            </li>
          </ul>
          <div className="banner">
            <h3 className="banner__title">Premium access</h3>
            <p className="banner__description">Search places without limits</p>
            <button className="banner__button" type="button">
              Start Doing Now
            </button>
          </div>
        </section>
      </aside>
    </div>
  );
}
