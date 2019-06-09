
Vue.component("messages", {
    template: "<div style='border: solid; margin-top: 20px; width:400px;' v-show='isVisible'><h4>Message</h4> <p><slot></slot></p> <button @click='isVisible = false;'>hide</button></div>",
    data(){
        return {
            isVisible : true
        }
    },

})

new Vue({
    el: "#app",
    data: {
        message: "",
        disabled: false,
        messages : [],

    },
    methods: {
        active() {
            console.log("activate");
            this.disabled = false;
        },
        complete(message){
            let index = this.messages.indexOf(message);
            console.log(index);
            this.messages[index] = {task : message.task , complete : true}
        },
        sumbit() {
            this.messages.push({task :this.message, complete : false});
            this.disabled = true;
            this.message = "";
            setTimeout(this.active, 5000);
        },

    },
})