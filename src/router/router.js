import Home from '../components/Home.vue';
import Order from '../components/Order.vue';
import Personal from '../components/Personal.vue';
import Lazyload from '../components/Lazyload.vue';
import Details from '../components/Details.vue';
export default [{
        path: '/home',
        component: Home
    },{
        path: '/order',
        component: Order
    },{
        path: '/lazyload',
        component:Lazyload
    },{
        path: '/personal',
        component: Personal
    },{
        path: '/details/:detailsId',
        name: 'details',
        component: Details
    }
    ,{
        path: '/',
        redirect: '/home'
    }
]