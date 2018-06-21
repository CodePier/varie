/*
|--------------------------------------------------------------------------
| App Entry
|--------------------------------------------------------------------------
| Bootstrapping the application together
|
*/

import Vue from "vue";
import App from "@views/layouts/App";

import { Application } from "varie";
import RouterInterface from "varie/lib/routing/RouterInterface";
import StateServiceInterface from "varie/lib/state/StateServiceInterface";

new Application().boot().then((app) => {
  new Vue({
    store: app.make<StateServiceInterface>("$store").getStore(),
    router: app.make<RouterInterface>("$router").getRouter(),
    render: (h) => h(App),
  }).$mount($config.get("app.mount"));
});
