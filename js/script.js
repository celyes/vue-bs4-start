
// Corrupt
var app = new Vue({
    el: "#container",
    data: {
        info: "Vue.js and Bootstrap 4",
        link: "https://github.com/celyes"
    },
    methods: {
        greeting: function(){
            return "This is a simple " + this.info + " starter template."
        }
    }
});

// ok