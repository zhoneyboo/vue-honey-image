<style lang="css">
    .path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 5s linear alternate infinite;
    }

    @keyframes dash {
    from {
        stroke-dashoffset: 1000;
    }
    to {
        stroke-dashoffset: 0;
    }
    }
</style>
<template>
    <div class="directory">
        <div class="sidenav">

            <div class="controls">
               <div class="container">
                    <div class="row justify-content-center">
                        <div class="col p-3">
                            <input type="text" class="form-control rounded-pill p-3" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
                        </div>
                    </div>
               </div>
            </div>


            <ul class="nav-column">
                <navlist img="assets/images/rabbit.jpg" office_name="Office of the Governor" contact_number="09460404404" department_head="Gov. Humerlito A. Dolor"/>
                <navlist img="assets/images/rabbit.jpg" office_name="Provincial Administrator" contact_number="09460404404" department_head="Gov. Humerlito A. Dolor"/>
                <navlist img="assets/images/rabbit.jpg" office_name="Provincial Budget Office" contact_number="09460404404" department_head="Gov. Humerlito A. Dolor"/>
                <navlist img="assets/images/rabbit.jpg" office_name="Provincial Human Resource Management Office" contact_number="09460404404" department_head="Gov. Humerlito A. Dolor"/>
            </ul>
        </div>
        <div class="content">
             <SvgPanZoom 
            style="width: 500px; height: 500px; border:1px solid black;"
            :zoomEnabled="true"
            :controlIconsEnabled="true"
            :fit="false"
            :center="true"
        >
             <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="960px"
                    height="560px" viewBox="0 0 960 560" enable-background="new 0 0 960 560" xml:space="preserve">
                <g id="samplebox3">
                    <rect x="137.5" y="49.5" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" width="116" height="69"/>
                    <g>
                        <path  id="walkwaysample3" opacity="0" d="M438.864,514.247c-4.577-32.396-6.535-65.085-6.244-97.796c0.277-31.169,2.114-61.818-3.281-92.703
                        c-4.833-27.663-8.374-57.803-21.859-82.889c-10.85-20.185-30.415-36.22-51.442-44.75c-33.73-13.683-71.633-9.65-106.923-15.566
                        c-15.786-2.646-34.453-6.947-46.072-18.744c-11.224-11.396-10.328-29.24-10.328-43.989c0-1.935-3-1.935-3,0
                        c0,18.733,0.106,38.255,16.365,50.593c8.733,6.627,20.153,10.013,30.63,12.637c11.699,2.931,23.762,4.3,35.754,5.344
                        c24.974,2.174,50.388,2.341,74.564,9.718c24.009,7.326,45.58,24.281,57.862,46.271c10.315,18.468,14.14,40.972,17.93,61.521
                        c4.363,23.658,7.716,46.848,7.639,70.957c-0.076,23.627-1.228,47.182-0.504,70.817c0.71,23.221,2.767,46.375,6.017,69.375
                        C436.241,516.953,439.132,516.138,438.864,514.247L438.864,514.247z"/>
                        </path>
                    </g>
                </g>
                <g id="samplebox2">
                    <rect x="137.5" y="232.5" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" width="116" height="69"/>
                        <g>
                            <path id="walkwaysample2" opacity="0"  d="M188.449,301.987c-0.081,12.48-1.038,24.549,7.951,34.382c6.722,7.353,17,10.737,26.433,12.837
                                c26.02,5.794,53.951,5.202,80.374,3.834c32.379-1.676,64.417-7.789,96.79-9.041c10.005-0.387,24.374-2.16,27.464,9.972
                                c1.705,6.692,1.922,14.05,2.722,20.9c0.973,8.332,1.802,16.679,2.41,25.045c1.263,17.388,0.886,34.872,1.715,52.289
                                c0.86,18.063,1.967,36.121,1.611,54.213c-0.038,1.936,2.962,1.932,3,0c0.317-16.131-0.515-32.241-1.322-48.346
                                c-0.811-16.185-0.83-32.365-1.46-48.549c-0.625-16.078-2.591-32.085-4.576-48.041c-0.87-6.997-1.469-15.556-9.044-18.565
                                c-4.098-1.629-8.59-1.849-12.949-1.98c-8.345-0.253-16.709,0.341-25.015,1.096c-16.175,1.47-32.275,3.731-48.432,5.389
                                c-30.652,3.145-61.658,4.751-92.383,1.748c-12.1-1.183-24.594-2.639-35.653-8.028c-5.89-2.87-10.655-7.194-13.871-12.9
                                c-4.311-7.647-2.818-17.858-2.764-26.253C191.462,300.052,188.462,300.054,188.449,301.987L188.449,301.987z"/>
                        </g>
                </g>
                <g id="samplebox1">
                    <rect x="647.5" y="232.5" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" width="116" height="69"/>
                    <g>
                        <path  id="walkwaysample1" opacity="0" d="M646.278,268.209c-29.744-1.446-59.06,6.453-87.024,15.796c-29.242,9.77-57.916,20.837-88.046,27.765
                            c-5.374,1.235-10.632,2.271-15.424,5.126c-4.841,2.887-7.996,8.058-10.27,13.039c-2.323,5.087-3.756,10.56-5.345,15.904
                            c-2.112,7.103-4.275,13.985-5.583,21.307c-2.518,14.095-2.852,28.52-2.952,42.8c-0.107,15.099-0.363,30.207-0.347,45.305
                            c0.022,20.065,1.544,40.072,5.317,59.794c0.363,1.899,3.254,1.093,2.893-0.797c-5.951-31.104-4.889-62.163-4.883-93.638
                            c0.002-14.822,0.022-29.655,1.675-44.404c1.571-14.015,5.686-27.625,10.307-40.906c2.311-6.641,5.747-12.858,11.942-16.552
                            c5.684-3.388,13.396-4.056,19.732-5.651c15.33-3.857,30.482-8.398,45.469-13.419c28.956-9.7,57.172-21.06,87.436-26.219
                            c11.587-1.976,23.36-2.819,35.104-2.249C648.213,271.303,648.204,268.303,646.278,268.209L646.278,268.209z"/>
                    </g>
                </g>

                
                    <ellipse id="marker" style="stroke:#000000;stroke-miterlimit:10;"  rx="18.987" ry="17.089">
                        <animateMotion dur="6s" repeatCount="indefinite"  >
                            <mpath xlink:href="#walkwaysample3"/>
                        </animateMotion>
                    </ellipse>
             </svg>
             </SvgPanZoom>

             <div class="pan-zoom-action">
                 <button>show marker</button>
                 <button>detailed direction</button>
                 <button>show cr</button>
             </div>
        </div>
    </div>
</template>

<script>

    import SvgPanZoom from 'vue-svg-pan-zoom';
    export default {
        components: {SvgPanZoom}
    }
</script>