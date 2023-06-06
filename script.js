const {createApp} = Vue 

createApp({
    data(){
        return{
            todoList: [
                'mangiare',
                'dormire',
                'andare al supermercato',
                'visitare la luna',
                'uscire il cane',
                'scrivo ai tuti che esco',
                'scendi la valigia',
                'distruggere il capitalismo',
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