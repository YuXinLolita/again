j2<template>
    <div>
        <div>
            <div v-if="list.length > 0">
                已完成{{complete}},总共{{list.length}}

                <button v-if="complete> 0" @click="clear">清除已完成</button>
            </div>
        </div>

    </div>

        
</template>

<script>
import { defineComponent,computed } from 'vue'

export default defineComponent({
    name:"newfooter",
    props:{
        list:{
            type:Array,
        }
    },
    setup(props, ctx) {
        let complete = computed(() => {
          let arr =  props.list.filter((item)=>{
            return  item.complete 
          })
            return arr.length
                                })
        // let complete = ref(1);
        // let complete = ref(1);
        let clear = () => {
            let arr = props.list.filter((item)=>{
                return  item.complete === false
            })
            
            ctx.emit("clear",arr);  
            
        }
        return {
            clear,
            complete
        }
    },
})
</script>
