import { StrictMode } from "react";
import { Root } from "react-dom/client";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

let root: Root | null = null;

function render(props) {
  console.log("render", props);
  const { container } = props;

  const rootDom = container
    ? container.querySelector("#root")
    : document.querySelector("#root");

  root = ReactDOM.createRoot(rootDom!);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

renderWithQiankun({
  mount(props) {
    console.log("mount", props);
    render(props);
  },
  bootstrap() {
    console.log("bootstrap");
  },
  update(props) {
    console.log("update", props);
  },
  unmount(props) {
    console.log("umount", props);
    if (root) {
      root.unmount();
    }
  },
});
// export async function bootstrap() {}

// export async function mount(props) {
//   render(props);
// }

// export async function unmount(props) {
//   console.log("umount", props);
//   if (root) {
//     root.unmount();
//   }
// }

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  console.log("qiankunWindow", qiankunWindow.__POWERED_BY_QIANKUN__);

  render({});
}
