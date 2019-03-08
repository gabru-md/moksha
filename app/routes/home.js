import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    var events = this.get('store').findAll('events');
    return RSVP.hash({
      events : events,
      heads : [
        {
          name : 'Pranav Rastogi',
          position: 'Chief Convener',
          phone : '+91-9971899988',
        },
        {
          name : 'Prashant Dutt',
          position : 'Co-Convener',
          phone : '+91-9718728045'
        },
        {
          name : 'Sanjana Yadav',
          position : 'Co-Convener',
          phone : '+91-8375970883'
        },
        {
          name : 'Tishya',
          position : 'General Secretary',
          phone : '+91-8527143288'
        },
        {
          name : 'Shubham Giri',
          position : 'Joint General Secretary',
          phone : '+91-9971236894'
        },
        {
          name : 'Mrigank Singh',
          position : 'Sponsorship',
          phone : '+91-9654525231'
        },
        {
          name : 'Yash Vardhan',
          position : 'Public Relations',
          phone : '+91-8076232582'
        },
        {
          name : 'Garvita Jangra',
          position : 'Public Relations',
          phone : '+91-8586830349'
        },
        {
          name : 'Bhomit',
          position : 'Event Management',
          phone : '+91-9582297761'
        },
        {
          name : 'Himanshu Rathore',
          position : 'Logistics',
          phone : '+91-9971771240'
        },
        {
          name : 'Ankit Chikkara',
          position : 'Security',
          phone : '+91-7011700342'
        },
        {
          name : 'Shubha',
          position : 'Security',
          phone : '+91-9719602727'
        }

      ]
    });
  }
});
