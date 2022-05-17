// import { createApp } from 'vue'
import App from "./App.vue";

import { game } from "./game/index";

import { createApp } from "./runtime-canvans/index";

createApp(App).mount(game.stage);
