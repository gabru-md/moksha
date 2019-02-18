import Controller from '@ember/controller';

export default Controller.extend({
    displayEvent : '',
    eventType : '',
    actions : {
        changeEventController(event) {
            console.log(event.target.value);
            console.log(event);
            if(event.path){
                console.log('chrome');
                var val = event.path[5].value;
                var typ = event.path[5].attributes.type.value;
                this.set('displayEvent',val);
                this.set('eventType', typ);
            }else{
                console.log('not chrome');
                this.set('displayEvent',event.target.value);
                this.set('eventType', event.target.type);
            }
        }
    }
});
