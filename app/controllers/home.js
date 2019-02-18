import Controller from '@ember/controller';

export default Controller.extend({
    displayEvent : '',
    eventType : '',
    actions : {
        changeEventController(eventHandler) {
<<<<<<< HEAD
            console.log(eventHandler);
=======
>>>>>>> 7eb7ae06a7d3600fb9741eb9596473b4ed4c827f
            this.set('displayEvent',eventHandler.target.value);
            this.set('eventType', eventHandler.target.type);
        }
    }
});
