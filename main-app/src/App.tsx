import { useEffect } from "react";

import { initQK } from "./initQK";

function App() {
  useEffect(() => {
    initQK();
  }, []);

  return (
    <>
      <div>header</div>
      <section>
        <div id="slave-wrapper" />
      </section>
    </>
  );
}

export default App;
