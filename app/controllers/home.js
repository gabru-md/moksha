import Controller from '@ember/controller';

export default Controller.extend({
    displayEvent : '',
    eventType : '',
    disp_eve : false,
    disp_cat : true,
    actions : {
        changeEventController(event) {
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
            this.set('disp_cat', false);
            this.set('disp_eve', true);
            
        },
        changeEventControllerMinimal() {
            this.set('displayEvent', '');
            this.set('disp_eve', false);
            this.set('disp_cat', true);
        }
    }
});
