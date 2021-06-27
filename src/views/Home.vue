<template>
  <div >
    <newheader @enter="enter"></newheader>

   <div v-if="list.length > 0">
   <newmain :list="list" @del="del"></newmain>
   <newfooter :list="list" @clear="clear"></newfooter>
  </div>
  <div v-else>
    暂无任务  
    <p><button @click="start">上一页</button></p>
  </div>
  </div>
</template>
<script>
import { defineComponent, computed} from "vue";
import newfooter from "../components/newfooter.vue";
import newheader from "../components/newheader.vue";
import newmain from "../components/newmain.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default defineComponent ({
  components: {
    newfooter,
    newheader,
    newmain
  },
  setup() {
        let router = useRouter();
        let start = () => {
          router.back();
        }
        let store = useStore();
        let list = computed( () => {
          return store.state.list
        })

        

        let enter = (val) => {
          let flag = true
          let nullvoid = true
          list.value.map( (item) => {
            if(item.title === val) {
              flag = false;
            }
            if(val === ""){
              nullvoid = false  
               
            }
          })
            if(!nullvoid ){
              alert("空任务不合法，请重新输入");
            }

          if(!flag) {
            alert("任务已存在");

          }
          if(flag && nullvoid){
              store.commit("add",{
                title:val,
                complete:false
              })
          }
        }
        // let enter = (val) => {
        //   store.commit("add",{
        //     title:val,
        //     complete:false
        //   });
          
          
        // }
        let del = (item) => {
          store.commit("del",item);
        }
        let clear = (val) => {
          store.commit("clear",val);
        }
      return {

        enter,
        list,
        del,
        clear,
        start
      }
  }
})
</script>
