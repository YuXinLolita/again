<template>
    <div>
        <div v-for="(item,index) in list" :key="index">
            <input type="checkbox" v-model="item.complete">
            {{item.title}}
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
    setup() {
        
        

        return {
            
        }
        
    },
})
</script>
