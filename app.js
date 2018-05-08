var app = new Vue({
  el: '#app',
  data: {
    todos:[
     "My first Item",
     "My second Item"
    ],
    item:"to do item"
  },
  methods: {
     addTodo(){
       this.todos.push(this.item)
       this.item="";


     }
  }
})