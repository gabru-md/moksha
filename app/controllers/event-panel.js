import Controller from '@ember/controller';

export default Controller.extend({
    actions : {
        createEvent(event) {
            var newEvent = this.store.createRecord('events', event);
            newEvent.save();
            this.store.findAll('events')
                .then(function(events) {
                    console.log(events);
            });
        }
    }
});
