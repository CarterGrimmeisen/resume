// @ts-expect-error No type defs for click-outside-vue3
import vClickOutside from 'click-outside-vue3'
import { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.use(vClickOutside)
}
