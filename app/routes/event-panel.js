import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    model() {
        var _events = this.get('store').findAll('events');
        console.log(typeof(_events));
        for (var key in _events) {
            if (_events.hasOwnProperty(key)) {
                console.log(key + " -> " + _events[key]);
            }
        }
        return RSVP.hash({
            events : _events
      });
    }
});
