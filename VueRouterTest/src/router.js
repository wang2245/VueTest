import Home from './components/Home.vue'
import About from './components/About.vue'

const routers = [
	{
		path:'/home',
		name:'home',
		components:Home
	},
	{
		path:'/about',
		name:'about',
		components:About
	},
	{
		path:'/',
		components:Home
	}
]

export default routers