const {createApp} = Vue 

createApp({
    data(){
        return{
            todoList: [
            {
                text: 'Fare la spesa',
                done: false
                
            }, 
            {
                text: 'Fare la spesa',
                done: false
            }, 
            {
                text: 'Fare la spesa',
                done: false
            },  
            {
                text: 'Fare la spesa',
                done: false
            }, 
            {
                text: 'Fare la spesa',
                done: false
            }, 
            {
                text: 'Fare la spesa',
                done: false
            }, 
            {
                text: 'Fare la spesa',
                done: false
            }, 
            {
                text: 'Fare la spesa',
                done: false
            }
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