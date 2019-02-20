import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    model() {
        var _events = this.get('store').findAll('events');
        return RSVP.hash({
            events : _events
      });
    }
});
