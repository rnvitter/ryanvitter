const apps = {
  featuredApps: [
    {
      title: 'Election Results',
      link: 'https://results.decisiondeskhq.com/',
      imageName: 'election-results',
      tags: ['Javascript', 'Vue.js', 'D3', 'Python'],
      tagline: '2018 Live Election Night Dashboard',
      description: 'I developed this app while working at 0ptimus with one other person. I worked on the UI/UX design, frontend code, and developed all the maps and charts from scratch with d3. We had upwards of 1,500 people on the site at a time during election night.',
      details: 'We developed the election results app using the Decision Desk HQ api. We used Vue.js for our frontend framework and Django as the backend framework. I worked on the frontend, UI, and UX design of the app. The first initial design I worked with a designer and iterated and made changes from there. The goal of the app was to have a place users can see election results for primary and general elections in 2018. The main feature we wanted was a central place for people to have a quick overview of election night and view battleground races. I designed the home page to have a state of the race section at the top with a toggleable chart and map for viewing the overview of the house, senate and governor elections. The chart is an original design of mine inspired by Tetris, with each race being represented as a block and there’s two levels (polls open and polls closed) and four columns on the second level (> +10D, < +10D, <+10R, > +10R). I created by the chart and the map using custom D3. The second section of the page shows the battleground races which shows toggle able cards for each battleground race that shows a basic overview table and tags that show important information like race prediction and race status. Other features of the app include a page for viewing all elections by state and a detailed view for each race that has an overview table, a county overview table, an interactive d3 map, basic information pertaining to the race, and a detailed downloadable county results table. We also implemented a search feature, authentication, and log in blocking for certain views.'
    },
    {
      title: 'Statify',
      link: 'http://my-statify.ryanvitter.com/',
      github: 'https://github.com/rnvitter/my-statify',
      imageName: 'statify',
      tags: ['Javascript', 'Vue.js', 'Node'],
      tagline: 'Tool For Discovering Your Music Trends',
      description: 'App for discovering your top music over time and sharing it with friends. I created the entirety of this app as a personal project using vue, node, and the spotify and bitly apis.',
      details: 'I developed this app as a personal project so that I could learn Node.js. I created a simple node backend to make calls to the Spotify api and used vue.js on the frontend. I am a big fan of Spotify’s end of the year unwrapped app, however those only get released at the end of the year and I wanted to keep track of top artists and songs throughout the year. The goal of the app was to allow users to view their most listened to artists and songs over several different time periods, share them with friends, and create playlists from them. One feature of the app was allowing users to share their top songs and artists with friends. I did not want to have to store anything on a database so I made the decision to store all the information needed in the url. The function creates a url by taking the users name, the parameters the user entered, and all the ids of the songs or artists that the Spotify api returns, and creating a url from that. It then hits the Bitly api endpoint to create a shortened url for sharing. When a user clicks on one of the share links it will redirect to the share view of the app that uses all the information from the url to generate a view. Other features in this app include toggling by artist and songs, changing the number of items returned, filtering by three different time periods, and previewing a song or an artist’s top 5 songs. I particularly like the card style I designed for this app and the song animation that overlays each card when a song is playing.'
    }
  ],
  moreApps: [
    {
      title: 'Election Forecasting',
      link: 'https://0ptimus.decisiondeskhq.com/',
      imageName: 'forecasting',
      tags: ['Javascript', 'Vue.js', 'D3', 'Python'],
      tagline: 'Election Forecasting for the 2018 Elections',
      description: 'I developed this app while working at 0ptimus with one other person. I worked on the UI/UX design, frontend code, and developed all the maps and charts from scratch with d3. I worked closely with the data scientists through several iterations to help make their vision for their work come to life.'
    },
    {
      title: 'Portfolio V1',
      link: 'http://v1.ryanvitter.com/',
      imageName: 'portfolioV1',
      tags: ['Javascript', 'Vue.js', 'Node'],
      tagline: 'The first version of my portfolio website',
      description: 'In my first attempt at a portfolio site I used vue.js for the frontend, and node.js for a simple backend for making calls to the flickr api for the photos. I hosted the site on a free heroku server. I liked the simplicity of the site, however the horizontal carousels were not the most obvious to users and there was not a lot of description for the different projects and examples.'
    },
    {
      title: 'Bucketlist',
      link: null,
      imageName: 'coming-soon',
      tags: ['Javascript', 'Vue.js', 'Node'],
      tagline: 'Manage your travel bucket list and plan trips',
      description: 'An app that I recently started working on, the idea is to use the skyscanner api and potentially the google maps api to make an app where people can keep track of the places they have been and want to go, and allow them to easily create trip plans based on their list and find cheap flights between destinations.'
    },
  ]
}

const maps = {
  featuredMaps: [
    {
      title: '0ptimus Poster',
      link: 'https://drive.google.com/file/d/0BxLnMO72hm-UM1VqZThtLXcxb3c/view?usp=sharing',
      imageName: '0ptimus_poster',
      tags: ['QGIS', 'Illustrator'],
      tagline: 'Visualizing the poltical and advertising landscape of the U.S.',
      description: 'A map I made for 0ptimus clients during the 2016 presidential campaign depicting designated market areas, congressional districts, and major cities. CDs are labled and DMAs are color coded in the key at the bottom, along with a graph of the top 30 DMAs. There are several insets for the major U.S. cities.'
    },
    {
      title: 'HDI and Terrorism',
      link: 'https://drive.google.com/file/d/0BxLnMO72hm-URUNxa3d1ejZrOW8/view?usp=sharing',
      imageName: 'human_development_and_terrorism',
      tags: ['ArcGIS', 'Illustrator'],
      tagline: 'Is the HDI Index correlated with terrorism?',
      description: 'I developed this poster for a group project my senior year. We looked at the correlation between the human development index of countries and prevalence of terrorism. I designed the poster by making the map the central part and using it to visually split it up by the regions we looked at.',
    }
  ],
  moreMaps: [
    {
      title: 'GDP vs SPI',
      link: 'https://drive.google.com/file/d/0BxLnMO72hm-UbEZycFlkSzZVUms/view?usp=sharing',
      imageName: 'gdp_vs_spi',
      tags: ['ArcGIS', 'Illustrator'],
      tagline: 'Measuring the Success of Countries',
      description: 'This map was made for one of my classes in college. I wanted to show the correlation between a countries GDP and it\'s social progress index. I used two different color scales and created a matrix for the legend to help visualize how those two varaibles change together in each country.'
    },
    {
      title: 'The West Indies',
      link: 'https://drive.google.com/file/d/0BxLnMO72hm-UTU5kc3d0SHdCOVU/view?usp=sharing',
      imageName: 'west_indies_reference',
      tags: ['ArcGIS', 'Illustrator'],
      tagline: 'A reference map for the west indies region',
      description: 'In one of my GIS classes in college we had to create a reference map of the west indies to scale. I started in ArcGIS, and then did the majority of the work in Illustrator for label placement and making it look clean and appealing.'
    },
    {
      title: 'Google Trends & Political Issues',
      link: 'https://drive.google.com/file/d/0BxLnMO72hm-UR0NnMFEzRVRnOUk/view?usp=sharing',
      imageName: 'google_trends_political_issues',
      tags: ['ArcGIS', 'Illustrator'],
      tagline: 'Can Google Trends Predict the Political Leanings of Geographies?',
      description: 'For my thesis my senior year of college I looked at whether you could use the google search trends of different poltical topics to determine the political leanings of geographies.'
    },
    {
      title: 'Texas Likely Voters',
      link: 'https://drive.google.com/file/d/0BxLnMO72hm-UNTJqOUczV0pERlk/view?usp=sharing',
      imageName: 'tx_likely_voters',
      tags: ['QGIS', 'Illustrator'],
      tagline: 'Finding Likely Voters By Congressional District',
      description: 'An example of one of the many types of maps I made for 0ptimus. This map shows likely voters in Texas for the 2016 presidential election. I added a graph to better indication to the viewer how the data is actually distributed.'
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
