import { createApp } from 'vue'
import App from './App.vue'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/800.css'

const app = createApp(App)

// install all modules under `modules/`
Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.({ app }))

app.mount('#app')
