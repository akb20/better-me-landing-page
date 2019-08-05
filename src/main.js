import DefaultLayout from '~/layouts/Default.vue'
import SocialSharing from "vue-social-sharing";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(SocialSharing);

}