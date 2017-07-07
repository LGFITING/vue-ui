import Home from '../components/Home.vue';
import Order from '../components/Order.vue';
import Personal from '../components/Personal.vue';
import Lazyload from '../components/Lazyload.vue';
import Details from '../components/Details.vue';
import Navigation from '../components/Navigation.vue';
import Container from '../components/emit/Container.vue'
import Props from '../components/props/propsHome.vue'
import mainRouter from '../components/secondGradeRouter/mainRouter.vue'
import sonRouter1 from '../components/secondGradeRouter/sonRouter1.vue'
import sonRouter2 from '../components/secondGradeRouter/sonRouter2.vue'

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
        path: '/mainrouter',
        component: mainRouter,
        children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/mainrouter/sonrouter1',
          component: sonRouter1
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: '/mainrouter/sonrouter2',
          component: sonRouter2
        }
      ]
    },{
        path: '/props',
        component: Props
    },{
        path: '/container',
        component: Container
    },{
        path: '/navigation',
        component:Navigation
    },{
        path: '/details/:detailsId',
        name: 'details',
        component: Details
    },{
        path: '/',
        redirect: '/home'
    }
]
