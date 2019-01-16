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
          google_link : 'https://docs.google.com/forms/d/e/1FAIpQLSeMarptHhXdcjqmDuG_CL9q2BNBUOJX-qdAfchDApd5cb-n7w/viewform?usp=sf_link'
        },
        {
          name : 'Public Relations',
          description : 'Help us promote the events and create the hype.',
          google_link : 'https://docs.google.com/forms/d/e/1FAIpQLSeASRxXN-vK1FvbYC9G2RHTg3Kf6XnrK1MlSf9cTU-COVYiig/viewform?usp=sf_link'
        },
        {
          name : 'Event Management',
          description : 'Join us to manage the events taking place this Moksha\'19.',
          google_link : 'https://docs.google.com/forms/d/e/1FAIpQLScUP17W5jV_B6qRYnRoJoh0bsXsCeLzB5A-r1SPF6wau8LwLg/viewform?usp=sf_link'
        },
        {
          name : 'Graphic Designing',
          description : 'Be a part of the design team for Moksha\'19.',
          google_link : 'https://docs.google.com/forms/d/e/1FAIpQLSee2PJ3nPjqUts0VkHlhulH6l2CivaJ66SuMYAuTwYwdxwf0g/viewform?usp=sf_link'
        },
        {
          name : 'Video Editing',
          description : 'Get the most amazing photos and videos. Join the Video Editing department of Moksha\'19.',
          google_link : 'https://docs.google.com/forms/d/e/1FAIpQLSfuWkV4z9Pc2j-vVLNDuIDuBgwQHvlIRR68uUv3v91GrxY3jg/viewform?usp=sf_link'
        },
        {
          name : 'Content Writing',
          description : 'Are you good at writing and vocab? Join us and help us make the best content for Moksha.',
          google_link : 'https://docs.google.com/forms/d/e/1FAIpQLSfrfLNYpkEx0c2y3gPm2EU4dcnfea_TRI2h8zpZ6hFdCshnAw/viewform?usp=sf_link'
        },
        {
          name : 'Fine Arts',
          description : 'Join Fine Arts',
          google_link : 'https://docs.google.com/forms/d/e/1FAIpQLSdOXTQaepokJsxh4kbk32EcSH1VRYcppTZXOHxxUHnPGxBn0Q/viewform?usp=sf_link'
        },
        {
          name : 'Logistics',
          description : 'Join Logistics',
          google_link : 'https://docs.google.com/forms/d/e/1FAIpQLSevHk5tgHDr2jPyOAXH6ivgPAOCyZH_rAMpD_2n-amyCOe_dA/viewform?usp=sf_link'
        },
        {
          name : 'Security',
          description : 'Join Security',
          google_link : 'https://docs.google.com/forms/d/e/1FAIpQLScgBe8nRNB1vR7tFi9YsKYShT9qCxssAiUtO6qo4817vSKhUg/viewform?usp=sf_link'
        }
      ]
    }
  }

});
