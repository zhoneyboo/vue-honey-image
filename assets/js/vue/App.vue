<template>
    <div>
       <!-- <div class="gov-message">
            Maligayang pagdating sa pamahalaang panlalawigan ng Oriental Mindoro!
            Ang kapitolyo ay para sa mamamayan kaya kasiyahan naming kayo ay paglingkuran. Ang ating mga tanggapan ay bukas upang tugunan ang inyong pangangailangan. Huwag po kayong mag-atubili na ipaabot sa amin ang inyong mga suhestiyon at komento hinggil sa mga serbisyong inyong matatanggap. Ito ang magbibigay-daan para sa mas maayos, mas maagap at mas mabilis na serbisyo publiko. Sa pamamagitan ng ating pagtutulungan, mas madaling maihahatid ang Galing at Serbisyo para sa Mindoreno.  
            Sana’y maging makabuluhan ang inyong pagdalaw. 
            Maraming salamat at mabuhay po kayo!
            Governor Bonz Dolor   
        </div>  -->
        
        <div class="navigation">
            <ul>
                <li>
                    <router-link :to="{name: 'maps'}">
                        <font-awesome-icon size="lg" icon="map-marked-alt"/>
                        Capitol Map
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'office'}">
                        <font-awesome-icon size="lg" icon="photo-video"/>
                        Management Committee
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'telephone'}">
                        <font-awesome-icon size="lg" icon="book"/>
                        Telephone Directory
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'facts_and_figure'}">
                        <font-awesome-icon size="lg" icon="book"/>
                        Facts and Figure
                    </router-link>
                </li>
                
                <li>
                     <router-link :to="{name: 'about'}">
                        <font-awesome-icon size="lg" icon="info-circle"/>
                        About
                     </router-link>
                </li>
            </ul>
        </div>
        <template>
            <router-view></router-view>
        </template>
        <v-video></v-video>
    </div>
</template>