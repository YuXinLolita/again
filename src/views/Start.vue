<template>
    <button @click="start">开始任务</button>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from "vue-router";

export default defineComponent({
    setup() {
        
         let router = useRouter();
        let start = () => {
            router.push({
                path: "/Home"
            })
        }

        return {
            start
        }
    },
})
</script>
