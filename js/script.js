var zapp = new Vue({
    el: "#container", 
    data: {
        name: "Ilyes",
        age: 23,
        message: "Hello from vue"
    },
    methods: {
        hello: function(){
            return "Hello, i'm "+ this.name + ", i'm " + this.age + " years old and i say : " + this.message
        }
    }
});