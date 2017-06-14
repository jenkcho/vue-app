// app.js

new Vue({
// We want to target the div with an in of 'events'
  el: '#events',

// Here we register any values or collections that hold data
// for the application
data: {
  event: { name: '', description: '', date: '' },
  events: []
},

// Anything within the ready function will run when the application loads
ready: function(){
  // When the application loads, we want to call the method that initializes
  // some data
  this.fetchEvents();

},

// Methods we want to use in our application are registered Here
methods: {}

});
