import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return {
      heads : [
        {
          name : 'Pranav Rastogi',
          position: 'Chief Convener',
          phone : '',
        },
        {
          name : 'Yash Vardhan',
          position : 'Public Relations',
          phone : ''
        },
        {
          name : 'Bhomit Chikara',
          position : 'Event Management',
          phone : ''
        },
        {
          name : 'Prashant Dutt',
          position : 'Co Convener',
          phone : ''
        }

      ],
      departments : [
        {
          name : 'Sponsorship',
          google_link : ''
        },
        {
          name : 'Public Relations',
          google_link : ''
        },
        {
          name : 'Event Management',
          google_link : ''
        },
        {
          name : 'Graphic Designing',
          google_link : ''
        },
        {
          name : 'Video Editing',
          google_link : ''
        },
        {
          name : 'Content Writing',
          google_link : ''
        },
        {
          name : 'Fine Arts',
          google_link : ''
        },
        {
          name : 'Logistics',
          google_link : ''
        },
        {
          name : 'Security',
          google_link : ''
        }
      ]
    }
  }

});
