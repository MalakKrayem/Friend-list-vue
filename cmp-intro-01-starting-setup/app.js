const app= Vue.createApp({
	data(){
		return{
			visibals:false,
			Friends:[
			{id:'1', name:'Malak' ,phone:'0597912040', email:'malak@gmail.com'},
			{id:'2', name:'Abbod' ,phone:'0597915555', email:'abood@gmail.com'}

			]
		}
	},
	methods:{
		showDetails(){
			this.visibals= !this.visibals
		}
	}
})

app.mount('#app')