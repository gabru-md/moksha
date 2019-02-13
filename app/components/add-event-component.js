import Component from '@ember/component';

export default Component.extend({
    eventName : '',
    eventEmail : '',
    eventHead : '',
    eventHeadContact : '',
    eventHeadEmail : '',
    society : '',
    eventDescription : '',
    eventVenue : '',
    eventType : '',
    eventRegLink : '',
    actions : {
        createEvent() {
            var event = {};
            let normalizeType = (str) => {
                return str.toLowerCase().toUpperCase()
            }
            event.eventName = this.eventName;
            event.eventEmail = this.eventEmail;
            event.eventHead = this.eventHead;
            event.eventHeadContact = this.eventHeadContact;
            event.eventHeadEmail = this.eventHeadEmail;
            event.society = this.society;
            event.eventDescription = this.eventDescription;
            event.eventVenue = this.eventVenue;
            event.eventType = normalizeType(this.eventType);
            event.eventRegLink = this.eventRegLink;

            this.get('addEvent')(event);
        }
    }
});
