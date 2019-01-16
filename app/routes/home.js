import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return {
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

      ],
      departments : [
        {
          name : 'Sponsorship',
          description : 'Volunteer for the Sponsorship department for Moksha 2019',
          google_link : 'https://docs.google.com/forms/d/e/1FAIpQLSeMarptHhXdcjqmDuG_CL9q2BNBUOJX-qdAfchDApd5cb-n7w/viewform?usp=sf_link'
        },
        {
          name : 'Public Relations',
          description : 'Volunteer for the Public Relations team for Moksha 2019',
          google_link : 'https://docs.google.com/forms/d/e/1FAIpQLSeASRxXN-vK1FvbYC9G2RHTg3Kf6XnrK1MlSf9cTU-COVYiig/viewform?usp=sf_link'
        },
        {
          name : 'Event Management',
          description : 'Volunteer for the Event Management department for Moksha 2019',
          google_link : 'https://docs.google.com/forms/d/e/1FAIpQLScUP17W5jV_B6qRYnRoJoh0bsXsCeLzB5A-r1SPF6wau8LwLg/viewform?usp=sf_link'
        },
        {
          name : 'Graphic Designing',
          description : 'Volunteer for the Graphic Designing team for Moksha 2019',
          google_link : 'https://docs.google.com/forms/d/e/1FAIpQLSee2PJ3nPjqUts0VkHlhulH6l2CivaJ66SuMYAuTwYwdxwf0g/viewform?usp=sf_link'
        },
        {
          name : 'Video Editing',
          description : 'Volunteer for the Video Editing team for Moksha 2019',
          google_link : 'https://docs.google.com/forms/d/e/1FAIpQLSfuWkV4z9Pc2j-vVLNDuIDuBgwQHvlIRR68uUv3v91GrxY3jg/viewform?usp=sf_link'
        },
        {
          name : 'Content Writing',
          description : 'Volunteer for the Content Writing team for Moksha 2019.',
          google_link : 'https://docs.google.com/forms/d/e/1FAIpQLSfrfLNYpkEx0c2y3gPm2EU4dcnfea_TRI2h8zpZ6hFdCshnAw/viewform?usp=sf_link'
        },
        {
          name : 'Fine Arts',
          description : 'Volunteer for the Fine Arts team for Moksha 2019',
          google_link : 'https://docs.google.com/forms/d/e/1FAIpQLSdOXTQaepokJsxh4kbk32EcSH1VRYcppTZXOHxxUHnPGxBn0Q/viewform?usp=sf_link'
        },
        {
          name : 'Logistics',
          description : 'Volunteer for the Logistics department for Moksha 2019',
          google_link : 'https://docs.google.com/forms/d/e/1FAIpQLSevHk5tgHDr2jPyOAXH6ivgPAOCyZH_rAMpD_2n-amyCOe_dA/viewform?usp=sf_link'
        },
        {
          name : 'Security',
          description : 'Volunteer for the Security department for Moksha 2019',
          google_link : 'https://docs.google.com/forms/d/e/1FAIpQLScgBe8nRNB1vR7tFi9YsKYShT9qCxssAiUtO6qo4817vSKhUg/viewform?usp=sf_link'
        }
      ]
    }
  }

});
