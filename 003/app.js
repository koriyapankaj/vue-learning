let app = Vue.createApp({
    data: function(){
        return{
            courseGoal: 'Test goal',
            link: 'https://vuejs.org'
        };
    },
});

app.mount('#app');