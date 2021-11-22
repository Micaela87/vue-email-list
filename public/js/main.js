const myApp = new Vue({
    el: '#app',
    data: {
       mailingList: []
    },
    mounted() {
       let self = this;

       for (let i = 0; i < 10; i++) {
         axios
         .get('https://flynn.boolean.careers/exercises/api/random/mail')
         .then((response) => {
            if (response.data.success) {
                 self.mailingList.push(response.data.response);
            }
         });
       }

      //  console.log(self.mailingList);
    }
});