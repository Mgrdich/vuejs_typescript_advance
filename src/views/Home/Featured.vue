<template>
    <div>
        <carousel
                :per-page="1"
                :mouse-drag="true"
                :paginationEnabled="false"
        >
            <slide v-for="(item,ind) in slides" :key="ind">
                <div
                        class="slider_bck"
                        :style="{'background':`url(${item.bck})`}"
                >
                    <div class="gradient">
                        <div class="container">
                            <div class="content">
                                <app-button
                                        linkTo="#"
                                        :addClass="['hello','there']"
                                >
                                    see review
                                </app-button>
                                <div class="item">
                                    {{item.title}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </slide>
        </carousel>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {Carousel, Slide} from 'vue-carousel';
    import SlideOne from "../../assets/images/featured/1.jpg";
    import SlideTwo from "@/assets/images/featured/2.jpg";
    import SlideThree from "@/assets/images/featured/3.jpg";
    import SlideFour from "@/assets/images/featured/4.jpg";

    type slides = {
        title:string;
        bck:string;
    }
    @Component({
        components: {
            'carousel': Carousel,
            'slide': Slide
        }
    })
    export default class Featured extends Vue {
        private slides: Array<slides> = [
            {
                title: 'Red dead redemption 2',
                bck: SlideOne
            },
            {
                title: 'Watchdogs 2',
                bck: SlideTwo
            },
            {
                title: 'Rise of the tomb rider',
                bck: SlideThree
            },
            {
                title: 'Spider-man',
                bck: SlideFour
            }
        ];

    }
</script>

<style lang="scss">

</style>
