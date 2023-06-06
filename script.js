const {createApp} = Vue 

createApp({
    data(){
        return{
            todoList: [
            {}, 
            {}, 
            {}, 
            {}, 
            {}, 
            {}, 
            {}, 
            {}, 
            ],
            newElement:''
        }
    },
    methods: {
        addNewToDoElement(todoElement){
            this.todoList.push(todoElement)
            this.newElement = ' '
        }
    }
}).mount('#app')