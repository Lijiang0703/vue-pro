import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
import RecommendDetail from 'components/recommend_detail/recommend_detail'
import SingerDetail from 'components/singer_detail/singer_detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend,
      children:[
      {
        path:':id',
        name:'recommend_detail',
        component: RecommendDetail
      }
      ]
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer,
      children:[
      {
        path:':id',
        name:'singer_detail',
        component: SingerDetail
      }
      ]
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
