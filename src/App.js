import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./App.css";
import Article from "./pages/article";
import List from "./pages/list";

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/article/:id",
    element: <Article />,
  },
]);

function App() {
  return (
    <main className="class-one">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
