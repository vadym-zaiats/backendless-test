import React, { Suspense } from "react";
import PropTypes from "prop-types";
import styles from "./layout.module.scss";
import { NavLink, Outlet } from "react-router-dom";

const Layout = ({ tabs }) => {
  return (
    <>
      <header className={styles.header}>
        {tabs.map((tab) => {
          return (
            <NavLink key={tab.order} to={tab.id}>
              {tab.title}
            </NavLink>
          );
        })}
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

Layout.propTypes = {
  tabs: PropTypes.array,
};
Layout.defaultProps = {
  tabs: [],
};
export default Layout;
