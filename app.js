
Vue.component("messages", {
    template: "<div style='border: solid; margin-top: 20px; width:400px;' v-show='isVisible'><h4>Message</h4> <p><slot></slot></p> <button @click=\"$emit('delete')\">Delete</button> <button @click='isVisible = false;'>hide</button></div>",
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
        showMsg : false,
        aantalMsg : "",

    },
    methods: {
        active() {
            console.log("activate");
            this.disabled = false;
        },
        sumbit() {
            this.messages.push({task :this.message, complete : false});
            this.aantalMsg = this.messages.length;
            this.disabled = true;
            this.message = "";
            setTimeout(this.active, 1000);
        },
        complete(message){
            let index = this.messages.indexOf(message);
            console.log(index);
            this.messages[index] = {task : message.task , complete : true};
            console.log(this.messages[index]);
            this.refresh();
        },
        showMessages()
        {
            if(this.showMsg === true)
            {
                this.showMsg = false;
            }
            else
            {
                this.showMsg = true;
            }
            
            console.log(this.showMsg);
        },
        delete(message)
        {

        },
        refresh()
        {
            this.showMsg = false;
            this.showMsg = true;
        }

    },
})