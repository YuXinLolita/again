j2<template>
    <div>
        <div>已完成{{complete}},总共{{list.length}}<button @click="clear">清除已完成</button></div>

    </div>

        
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name:"newfooter",
    props:{
        list:{
            type:Array,
        }
    },
    setup(props) {
        let complete = () => {
          let arr =  props.list.filter((item)=>{
              item.complete
            })
            return arr.length
                                }
        // let complete = ref(1);
        let clear = () => {
            console.log("clear按钮已按下");
        }
        return {
            clear,
            complete
        }
    },
})
</script>
