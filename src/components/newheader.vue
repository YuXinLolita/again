<template>
    <div>
      <div>
          <input type="text" placeholder="请输入任务" v-model="value" @keydown.enter="enter">
      </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name:"newheader",
    setup(props, ctx) {
      let value = ref("");
      let enter = () => {
         ctx.emit("enter",value.value);
         value.value = ("");
      }
      
      return {
          value,
          enter
      }
    },
})
</script>
