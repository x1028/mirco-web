import { registerMicroApps, start } from "qiankun";

export function initQK() {
  registerMicroApps([
    {
      name: "react-vite",
      entry: "//localhost:5174",
      container: "#slave-wrapper",
      activeRule: "/react-vite",
    },
    {
      name: "vue-vite",
      entry: "//localhost:5175",
      container: "#slave-wrapper",
      activeRule: "/vue-vite",
    },
  ]);

  start();
}
