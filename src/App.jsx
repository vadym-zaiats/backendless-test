import React, { useEffect, useState, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";

const App = () => {
  const [tabs, setTabs] = useState([]);

  async function getIt() {
    const resnonse = await fetch("./collection.json");
    const data = await resnonse.json();
    data.sort((a, b) => a.order - b.order);
    setTabs([...data]);
  }

  useEffect(() => {
    getIt();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout tabs={tabs} />}>
            {tabs.map(({ id }, index) => {
              if (index === 0) {
                return (
                  <Route
                    path={`/${id}`}
                    element={<Navigate to="/" replace />}
                  ></Route>
                );
              }
            })}
            {tabs.map(({ path }, index) => {
              const LazyComponent = lazy(() => import(`${path}`));
              if (index === 0) {
                return <Route index element={<LazyComponent />}></Route>;
              }
            })}
            {tabs.map(({ path, id }) => {
              const LazyComponent = lazy(() => import(`${path}`));
              return (
                <Route key={id} path={`/${id}`} element={<LazyComponent />} />
              );
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
