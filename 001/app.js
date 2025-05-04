Vue.createApp({
    data: function(){
        return{
            goals: [],
            value: '',
        };
    },

    methods: {
        addGoal(){
            this.goals.push(this.value);
        }
    }

}).mount('#app');