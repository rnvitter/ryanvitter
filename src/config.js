const apps = {
  featuredApps: [
    {
      title: 'Election Results',
      link: 'https://results.decisiondeskhq.com/',
      imageName: 'election-results',
      tags: ['Javascript', 'Vue.js', 'D3', 'Python'],
      tagline: '2018 Live Election Night Dashboard',
      description: 'I developed this app while working at 0ptimus with one other person. I worked on the UI/UX design, frontend code, and developed all the maps and charts from scratch with d3. We had upwards of 1,500 people on the site at a time during election night.'
    },
    {
      title: 'Statify',
      link: 'http://my-statify.ryanvitter.com/',
      github: 'https://github.com/rnvitter/my-statify',
      imageName: 'statify',
      tags: ['Javascript', 'Vue.js', 'Node'],
      tagline: 'Tool For Discovering Your Music Trends',
      description: 'App for discovering your top music over time and sharing it with friends. I created the entirety of this app as a personal project using vue, node, and the spotify and bitly apis.'
    }
  ],
  moreApps: [
    {
      title: 'Election Forecasting',
      link: 'https://0ptimus.decisiondeskhq.com/',
      imageName: 'forecasting',
      tags: ['Javascript', 'Vue.js', 'D3', 'Python'],
      tagline: 'Election Forecasting for the 2018 Elections',
      // description: 'I developed this app while working at 0ptimus with one other person. I worked on the UI/UX design, frontend code, and developed all the maps and charts from scratch with d3. We had upwards of 1,500 people on the site at a time during election night.'
    },
    {
      title: 'Portfolio V1',
      link: 'http://v1.ryanvitter.com/',
      imageName: 'portfolioV1',
      tags: ['Javascript', 'Vue.js', 'Node'],
      tagline: 'The first version of my portfolio website'
    },
    {
      title: 'Bucketlist',
      link: null,
      imageName: 'coming-soon',
      tags: ['Javascript', 'Vue.js', 'Node'],
      tagline: 'Manage your travel bucket list and plan trips',
      // description: 'I developed this app while working at 0ptimus with one other person. I worked on the UI/UX design, frontend code, and developed all the maps and charts from scratch with d3. We had upwards of 1,500 people on the site at a time during election night.'
    },
  ]
}

const maps = {
  featuredMaps: [
    {
      title: '0ptimus Poster',
      link: '',
      imageName: '0ptimus_poster',
      tags: ['QGIS', 'Illustrator'],
      tagline: 'Visualizing the poltical and advertising landscape of the U.S.',
      description: 'A map I made for 0ptimus clients during the 2016 presidential campaign depicting designated market areas, congressional districts, and major cities. CDs are labled and DMAs are color coded in the key at the bottom, along with a graph of the top 30 DMAs. There are several insets for the major U.S. cities.'
    },
    {
      title: 'HDI and Terrorism',
      link: '',
      imageName: 'human_development_and_terrorism',
      tags: ['ArcGIS', 'Illustrator'],
      tagline: 'Is the HDI Index correlated with terrorism?',
      description: 'I developed this poster for a group project my senior year. We looked at the correlation between the human development index of countries and prevalence of terrorism. I designed the poster by making the map the central part and using it to visually split it up by the regions we looked at.',
    }
  ],
  moreMaps: [
    {
      title: 'GDP vs SPI',
      link: '',
      imageName: 'gdp_vs_spi',
      tags: ['ArcGIS', 'Illustrator'],
      tagline: 'Measuring the Success of Countries',
      description: ''
    },
    {
      title: 'The West Indies',
      link: '',
      imageName: 'west_indies_reference',
      tags: ['ArcGIS', 'Illustrator'],
      tagline: 'A reference map for the west indies region',
      description: ''
    },
    {
      title: 'Google Trends & Political Issues',
      link: '',
      imageName: 'google_trends_political_issues',
      tags: ['ArcGIS', 'Illustrator'],
      tagline: 'Can Google Trends Predict the Political Leanings of Geographies?',
      description: ''
    },
    {
      title: 'Texas Likely Voters',
      link: '',
      imageName: 'tx_likely_voters',
      tags: ['QGIS', 'Illustrator'],
      tagline: 'Finding Likely Voters By Congressional District',
      description: ''
    }
  ]
}

const photos = {
  featuredPhotos: [
    {
      title: 'The Black White and Grey',
      yourshot: 'https://yourshot.nationalgeographic.com/photos/10685273/',
      imageName: 'bald_eagle',
      location: 'Juneau, Alaska',
      description: 'This is one of my favorite photos that I have taken, it is of a bald eagle in Juneau, Alaska that was shot. What I love about this photo is the contrast created by the use of black and white, and the differences in highlights and shadows on the different sides of her face.'
    },
    {
      title: 'Purple Wave',
      unsplash: 'https://unsplash.com/photos/DzHihgxNiko',
      imageName: 'antelope',
      location: 'Antelope Canyon, Arizona',
      description: 'This shot was taken in Antelope Canyon, it was awarded one of the most viewed photos in Spring 2018 on Unsplash and currently has over 10,000,000 views.  I love how the rock formations give the impression of an ocean and the gradient from the orange to dark purple from the top left to bottom left.'
    },
  ]
}

export {
  apps,
  maps,
  photos
}
