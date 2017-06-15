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
  methods: {
    // Dedicated method to retrieve and set some data
    fetchEvents: function() {
      ver events = [
        {
          id: 1,
          name: 'TIFF',
          description: 'Toronto International Film Festival',
          date: '2015-09-10'
        },
        {
          id: 2,
          name: 'The Martian Premiere',
          description: 'The Martian comes to theatres.',
          date: '2015-10-02'
        },
        {
          id: 3,
          description: 'Music, film and interactive festival in Austin, TX.',
          date: '2016-03-11'
        }
      ];
      // $set is a convienienve method provided by Vue that is
      // cimilar to pushing data onto an array
      this.$set('events', events);
    },

    addEvent: function() {
      if(this.event.name) {
        this.events.push(this.event);
        this.event = { name: '', description: '', date: ''}
        }
      }
    }

  }
});
