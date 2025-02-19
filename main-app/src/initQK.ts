import {
  initGlobalState,
  registerMicroApps,
  start,
  runAfterFirstMounted,
  setDefaultMountApp,
} from "qiankun";

export function initQK() {
  console.log("initQK");
  
  registerMicroApps(
    [
      {
        name: "react-vite",
        entry: "//localhost:5171",
        container: "#slave-wrapper",
        activeRule: "#/react-vite",
      },
      {
        name: "vue-vite",
        entry: "//localhost:5172",
        container: "#slave-wrapper",
        activeRule: "#/vue-vite",
      },
    ],
    {
      beforeLoad: [
        async (app) => {
          console.log("before load", app.name);
          return Promise.resolve();
        },
      ],
      beforeMount: [
        async (app) => {
          console.log("before mount", app.name);
          return Promise.resolve();
        },
      ],
      afterUnmount: [
        async (app) => {
          console.log("after unmount", app.name);
          return Promise.resolve();
        },
      ],
    }
  );

  start();

  const { onGlobalStateChange, setGlobalState } = initGlobalState({
    user: {
      name: "x1028",
      age: 26,
      sex: "male",
    },
  });

  onGlobalStateChange((value, prev) => {
    console.log("onGlobalStateChange", value, prev);
  });

  setGlobalState({
    user: {
      name: "xf",
      age: 20,
      sex: "femail",
    },
  });

  // setDefaultMountApp("/react-vite");

  runAfterFirstMounted(() => {
    console.log("runAfterFirstMounted");
  });
}
