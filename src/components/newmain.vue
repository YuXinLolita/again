<template>
    <div>
        <div v-for="(item,index) in list" :key="index">
            <input type="checkbox" v-model="item.complete">
            {{item.title}}
            <button @click="del(index)">删除</button>
        </div>
    </div>
</template>
<script>

import { defineComponent } from 'vue'
export default defineComponent({
    name:"newmain",
    props:{
        list:{
            type:Array,
        }
    },
    setup(props,ctx) {
        
        let del = (item) => {
            ctx.emit("del",item)
        }

        return {
            del
        }
        
    },
})
</script>
