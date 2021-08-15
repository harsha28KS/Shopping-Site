

Vue.component('navbar',{
    template:`
    <div>
        <!--navbar-->
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light fixed-top d-flex">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a href="#" class="navbar-brand"><img :src="image" alt="Logo" width="180px"></a>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul class="navbar-nav offset-lg-1">
                        <li class="nav-item" v-for="navlink in navlinks">
                            <a class="nav-link" href="#">
                                {{navlink}}
                            </a>
                        </li>
                    </ul>
                    <form class="d-flex offset-lg-2">
                        <input class="form-control" type="search" placeholder="Search here.." aria-label="Search">
                        <button class="btn btn-dark" type="submit"><i class="fas fa-search"></i></button>
                    </form>
                </div>
                <div class="d-flex offset-lg-1 text-center">
                    <div class="me-4 me-lg-5">
                        <div><i class="fas fa-user"></i></div>
                        <div class="i-title">Profile</div>
                    </div>
                    <div class="me-4 me-lg-5">
                        <div><i class="fas fa-heart"></i></div>
                        <div class="i-title">Wishlist</div>
                    </div>
                    <div class="me-4 me-lg-5">
                        <div><i class="fas fa-shopping-bag"></i></div>
                        <div class="i-title">Bag</div>
                    </div>
                </div>
            </nav>
        </div>

    </div>
    `,
    data() {
        return{
            image:'./logo.png',
            navlinks:["Home","Men","Women","Kids","Beauty"],
            icontitle:["Profile","Wishlist","Bag"]
        }
    }
})


Vue.component('carousel',{
    template:`
    <!--carousel-->
    <div>

    </div>
    `,
    data() {
        return{
            images:["women.png","Cuteness.jpg","men.png"],
        }
    }
})

Vue.component('dealsofthedaycard',{
    template:`
    <!--Deals of the Day-->
    <div>
        <div class="container-fluid margin deals">
            <h1 class="text-center heading mb-5">Deals of the day</h1>
            <div class="row gx-0 justify-content-around padding">
                <div class="card col-sm-10 col-md-5 col-lg-2" v-for="image in images">
                    <img :src="image" alt="">
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return{
            images:["https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/13/d87cf776-caf7-40d0-9fee-af4043c4bc001628856063554-HRX.jpg",
                    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/13/b4231e88-93b0-4b72-87b0-8d38273dc6d61628856063539-Indian-wear.jpg",
                    // "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/13/4fd4a60e-2072-4a59-b4a1-98e5f45d3e8a1628856063580-sports---casual-shoes.jpg",
                    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/13/48799ddc-c089-4a32-bbcd-9f56172b5d431628856063547-Beauty-Combos.jpg",
                    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/14/74504a76-eabd-4cc1-a9de-e39a6d2a33b41628931581800-Extra20.jpg"],
        }
    }
})


Vue.component('biggestdealsoftopbrands',{
    template:`
    <!--Biggest Deals of top brands-->
    <div>
        <div class="container-fluid margin">
            <h1 class="text-center heading mb-5">Biggest Deals of Top Brands</h1>
            <div class="row gx-0 justify-content-around padding">
                <div class="card col-sm-10 col-md-5 col-lg-2" v-for="image in images">
                    <img :src="image" alt="">
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return{
            images:["https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/6e0a9fa0-9e8d-4c29-9250-995c9f1ba9331605363273176-Home---U.S.-Polo-Assn..jpghttps://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/6e0a9fa0-9e8d-4c29-9250-995c9f1ba9331605363273176-Home---U.S.-Polo-Assn..jpg",
                    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/e72c82f2-cfd5-4f9a-b1b0-ba9e2b3e51251598892519506-W.jpg",
                    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/0524cbd5-f034-4155-9e3b-336c4e530ee41605363272658-Home---Levis.jpg",
                    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/64ecc170-58af-473f-8144-b1639895a8291598892519457-Veromodo.jpg",
                    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg",
                    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/4/e6c7a718-acc0-4aa6-b04c-470ab139d66c1599230080722-F21--4-.jpg",
                    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/d5c17859-f366-4a65-ab42-5a066254feaa1605363272474-Home---GAP.jpg",
                    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/5544cd64-d95b-461d-802a-8025fdfeb3331605363272844-Home---Nike.jpg",
                    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/581e2bf6-6d47-4a4b-a11f-43200dc9c6791598892519362-Puma.jpg",
                    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8d5afb84-a464-40af-9971-2e9f0827e9b71598892377591-UCB.jpg"],
        }
    }
})


Vue.component('bottomfooter',{
    template:`
    <!--footer-->
    <div>
        <div class="container-fluid bg-light p-3 margin">
            <div class=" text-center text-md-left row padding">
                <div class="col-md-4 margin">
                    <h5 class="text-uppercase">Online Shopping</h5>
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="navlink in navlinks1">
                            <a href="#" class="nav-link">{{navlink}}</a>
                        </li>
                    </ul>
                </div>     
                <br>
                <div class="col-md-4 margin">
                    <h5 class="text-uppercase">Usefull Links</h5>
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="navlink in navlinks2">
                            <a href="#" class="nav-link">{{navlink}}</a>
                        </li>
                    </ul>
                </div>   
                <br>
                <div class="offset-lg-1 col-md-2 margin mb-5 ">
                    <h5 class="text-uppercase mb-4">Keep in Touch</h5>
                    <div class="footericons justify-content-around">
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-twitter"></i>
                    </div>
                </div>                           
            </div>
        </div>
        <div class="container-fluid text-center p-4 copyright">
            © 2021 Copyright:
            <a href="https://fossfreaks.com/">{{company_name}}</a>
         </div>
    </div>
    `,
    data() {
        return{
            navlinks1:["Men","Women","Kids","Beauty"],
            navlinks2:["Contact Us","FAQ","T&C","Track Orders","Shipping","Cancellation","Returns"],
            company_name:"FossFreaks"
        }
    }
})

var app = new Vue({
    el: '#app',
})
