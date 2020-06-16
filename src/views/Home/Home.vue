<template>
    <div class="home">
        <comp-featured/>
        <comp-content/>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import Featured from "@/views/Home/Featured.vue";
    import Content from "@/views/Home/Content.vue";

    @Component({
        components: {
            'comp-featured':Featured,
            'comp-content':Content
        }
    })
    export default class Home extends Vue {


    }
</script>
