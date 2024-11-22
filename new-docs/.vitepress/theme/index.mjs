import { VPCarbon } from 'vitepress-carbon'
import NotFound from './NotFound.vue'
// Uncomment to use custom css
// import './override.css'

export default {
  ...VPCarbon,
  Layout: {
    ...VPCarbon.Layout,
    slots: {
      ...VPCarbon.Layout.slots,
      'not-found': NotFound
    }
  }
}
