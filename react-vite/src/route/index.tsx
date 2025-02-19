import { createHashRouter, Link } from "react-router-dom";

import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

import Layout from "../pages/layout";
import ErrorPage from "../pages/error";
import Home from "../pages/Home";
import About from "../pages/About";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />, // 获取子路由，应用在渲染、加载数据或执行数据突变时抛出错误
          children: [
            {
              // path: "home",
              index: true, // 默认加载的子路由 使用 index 代替 path
              element: <Home />,
              handle: {
                crumb: () => <Link to="/">home</Link>,
              },
            },
            {
              path: "about",
              element: <About />,
              handle: {
                crumb: () => <Link to="/about">about</Link>,
              },
            },
          ],
        },
        { path: "*", element: <ErrorPage /> }, // 路由匹配404
      ],
    },
  ],
  {
    basename: qiankunWindow.__POWERED_BY_QIANKUN__ ? "/react-vite" : "/",
  }
);

export default router;
