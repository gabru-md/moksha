import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
    eventEmail : attr('string'),
    eventName : attr('string'),
    eventHead : attr('string'),
    eventHeadContact : attr('string'),
    eventHeadEmail : attr('string'),
    society : attr('string'),
    eventDescription : attr('string'),
    eventVenue : attr('string'),
    eventType : attr('string'),
    eventRegLink : attr('string')
});
