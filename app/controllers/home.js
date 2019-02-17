import Controller from '@ember/controller';

export default Controller.extend({
    displayEvent : '',
    eventType : '',
    actions : {
        changeEventController(eventHandler) {
            this.set('displayEvent',eventHandler.target.value);
            this.set('eventType', eventHandler.target.type);
        }
    }
});
