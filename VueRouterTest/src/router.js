import Home from './components/Home.vue'
import About from './components/About.vue'

const routers = [
	{
		path:'/home',
		name:'home',
		component:Home
	},
	{
		path:'/about',
		name:'about',
		component:About
	},
	{
		path:'/',
		component:Home
	}
]

export default routers