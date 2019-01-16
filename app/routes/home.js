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
          description : 'Want to make the fest better? Join the Sponsorship department and help us bring more funding to the fest.',
          google_link : ''
        },
        {
          name : 'Public Relations',
          description : 'Help us promote the events and create the hype.',
          google_link : ''
        },
        {
          name : 'Event Management',
          description : 'Join us to manage the events taking place this Moksha\'19.',
          google_link : ''
        },
        {
          name : 'Graphic Designing',
          description : 'Be a part of the design team for Moksha\'19.',
          google_link : ''
        },
        {
          name : 'Video Editing',
          description : 'Get the most amazing photos and videos. Join the Video Editing department of Moksha\'19.',
          google_link : ''
        },
        {
          name : 'Content Writing',
          description : 'Are you good at writing and vocab? Join us and help us make the best content for Moksha.',
          google_link : ''
        },
        {
          name : 'Fine Arts',
          description : 'Join Fine Arts',
          google_link : ''
        },
        {
          name : 'Logistics',
          description : 'Join Logistics',
          google_link : ''
        },
        {
          name : 'Security',
          description : 'Join Security',
          google_link : ''
        }
      ]
    }
  }

});
