import { useState } from "react";

import { RouterProvider } from "react-router-dom";

import router from "./route";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      react-vite
      <RouterProvider router={router} />
    </>
  );
}

export default App;
