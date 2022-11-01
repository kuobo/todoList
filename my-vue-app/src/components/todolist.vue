<script >
import { ref } from 'vue'

export default {
  data() {
    return {
      todos: [],
      inputValue: '',
      tempTodos: [],
    }
  },
  methods: {
    
    getTodos() {
      this.todos = [];
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch("http://localhost:3000/users/g", requestOptions)
        .then(response => response.text())
        .then(result => this.tempTodos.push(result))
        .catch(error => console.log('error', error));  
      if (this.tempTodos.length > 0) {
        const objtodos = JSON.parse(this.tempTodos);
      Object.values(objtodos).forEach((item) => {
        this.todos.push(item.name);
      });

      }   

      this.tempTodos = [];
    },


    addTodo: function () {
      this.todos.push(this.inputValue);
      console.log(this.todos);

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "name": this.inputValue
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:3000/users/c", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

      this.inputValue = '';

    },
    removeTodo: function (index) {

      console.log(this.todos[index]);
       var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };

      fetch("http://localhost:3000/users/d/" + this.todos[index], requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

      this.todos.splice(index, 1);
    },
    clearAll: function () {
      this.todos = [];
    },
  },



}

</script>

<template>
  <p class="read-the-docs">Totolist</p>

  <hr />

  <el-button type="primary" @click="getTodos">get</el-button>
  <hr />
  <el-input v-model="inputValue" placeholder="Input to Do" />
  <el-button type="primary" @click="addTodo">ADD</el-button>

  <hr />
  <div>
    <p v-for="(item, index) in todos">{{ index + 1 }}.{{ item }}
      <el-button type="primary" @click="removeTodo(index)">delete</el-button>
    </p>
  </div>
  <hr />
  
  <div v-if="todos.length != 0">
    Total : {{ todos.length }} todo
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
