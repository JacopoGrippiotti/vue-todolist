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
                text: 'portare a spasso il cane',
                done: false
            }, 
            {
                text: 'comprare il regalo per la festa di compleanno',
                done: false
            },  
            {
                text: 'fare benzina',
                done: false
            }, 
            {
                text: 'dare da mangiare al criceto',
                done: false
            }, 
            {
                text: 'comprare le carte per il draft di magic',
                done: false
            }, 
            {
                text: 'vedere la parte finale di attack on titans su netflix',
                done: false
            }, 
            {
                text: 'andare alla festa di compleanno ',
                done: false
            }
            ],
            newElement: { text:'',
                          done: false }
        }
    },
    methods: {
        addNewToDoElement(todoElement){
            this.todoList.push(todoElement)
            this.newElement = { text: ''}
        },
        doneNotDone(todoElementindex){
           this.todoList[todoElementindex].done = !this.todoList[todoElementindex].done
        },
        removeItem(index){
            this.todoList.splice(index, 1)
        },
    }
}).mount("#app")