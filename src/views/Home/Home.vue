<template>
    <div class="home">
        <comp-featured/>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import Featured from "@/views/Home/Featured.vue";

    @Component({
        components: {
            'comp-featured':Featured
        }
    })
    export default class Home extends Vue {


    }
</script>
