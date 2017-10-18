import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'src/components/recommend/recommend'
import Singer from 'src/components/singer/singer'
import Rank from 'src/components/rank/rank'
import Search from 'src/components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
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
