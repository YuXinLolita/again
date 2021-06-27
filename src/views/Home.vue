<template>
  <div class="home">
   <newheader @enter="enter"></newheader>
   <newmain :list="list"></newmain>
   <newfooter :list="list"></newfooter>
  </div>
</template>
<script>
import { defineComponent, ref} from "vue";
import newfooter from "../components/newfooter.vue";
import newheader from "../components/newheader.vue";
import newmain from "../components/newmain.vue";
import { useStore } from "vuex";
export default defineComponent ({
  components: {
    newfooter,
    newheader,
    newmain
  },
  setup() {

        let store = useStore();
        let list = store.state.list;
      let enter = (val) => {
          store.commit("add",val)
          
          
      }

      return {

        enter,
        list
      }
  }
})
</script>
