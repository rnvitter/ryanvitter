const apps = [
  {
    type: 'apps',
    title: 'DDHQ Results',
    link: 'https://results.decisiondeskhq.com/',
    imageName: 'ddhq_results',
    tags: ['Javascript', 'Vue.js', 'D3'],
    tagline: 'DDHQ Results',
    description: 'I designed and developed this app for DDHQ. The goal was to allow users to search for and visualize election results. I designed it in Sketch and then developed it with Vue, Vuetify, and D3 for the maps. The site had around 500 million views during election week.'
  },
  {
    type: 'apps',
    title: 'Modus Suite',
    link: 'https://modushealth.com/',
    imageName: 'modus',
    tags: ['Flutter', 'Vue.js', 'Sketch'],
    tagline: 'Modus',
    description: 'I was part of a 2 person team to create a suite of products for Modus including a web app and 3 mobile apps. The goal of the apps were to allow clinical care teams and researchs to track and analze patient step data. I designed them all in Sketch and we used Vue for the web app and Flutter for the mobile apps.'
  },
  {
    type: 'apps',
    title: 'DDHQ 2020 Forecasting',
    link: 'https://forecast.decisiondeskhq.com/president',
    imageName: 'ddhq_forecast',
    tags: ['Javascript', 'Vue.js', 'D3'],
    tagline: 'DDHQ Election Forecast',
    description: 'This site was created for DDHQ to show their forecast predictions for the 2020 elections. I worked closely with their data scientists through several design iterations to help bring their work to life. The visualizations were custom built in D3.'
  },
  {
    type: 'apps',
    title: 'DDHQ Embeds',
    link: 'https://ddhq.io/embeds/',
    imageName: 'ddhq_embeds',
    tags: ['Javascript', 'Vue.js', 'D3'],
    tagline: 'DDHQ Election Embeds',
    description: 'I helped design and build a system which creates embeds that clients like Vox, Business Insider, and Buzzfeed can use to embed election results on their websites.'
  },
  {
    type: 'apps',
    title: 'Remember Their Names',
    link: 'https://remembertheirnames.io/',
    github: 'https://github.com/rnvitter/remember_their_names',
    imageName: 'remember_their_names',
    tags: ['Javascript', 'Vue.js', 'AWS S3'],
    tagline: '',
    description: 'A website I created with my girlfriend as a resource for the Black Lives Matter movement. We coordinated a group of volunteers to collect data and stories using Slack and Google Sheets. I designed the site in Sketch, built it with Vue and deployed the data to an AWS S3 bucket.',
  },
  {
    type: 'apps',
    title: 'Statify',
    link: 'http://my-statify.herokuapp.com/',
    github: 'https://github.com/rnvitter/my-statify',
    imageName: 'statify',
    tags: ['Javascript', 'Vue.js', 'Node'],
    tagline: 'Tool For Discovering Your Music Trends',
    description: 'An app for discovering your top music over time and sharing it with friends. I created the entirety of this app as a personal project using vue, node, and the Spotify and the Bitly api. The app is hosted on a free Heroku server, so the initial load may be slow. You can check out the artists I\'ve been listening to the most <a class="link-text" href="https://bit.ly/3rnNgEu" target="_blank">here</a>.',
  }
]

const maps = [
  {
    type: 'maps',
    title: '0ptimus Poster',
    link: 'https://drive.google.com/file/d/0BxLnMO72hm-UM1VqZThtLXcxb3c/view?usp=sharing',
    imageName: '0ptimus_poster',
    tags: ['QGIS', 'Illustrator'],
    tagline: 'Visualizing the poltical and advertising landscape of the U.S.',
    description: 'A map I made for 0ptimus clients during the 2016 presidential campaign depicting designated market areas, congressional districts, and major cities. CDs are labled and DMAs are color coded in the key at the bottom, along with a graph of the top 30 DMAs. There are several insets for the major U.S. cities.'
  },
  {
    type: 'maps',
    title: 'HDI and Terrorism',
    link: 'https://drive.google.com/file/d/0BxLnMO72hm-URUNxa3d1ejZrOW8/view?usp=sharing',
    imageName: 'human_development_and_terrorism',
    tags: ['ArcGIS', 'Illustrator'],
    tagline: 'Is the HDI Index correlated with terrorism?',
    description: 'I developed this poster for a group project my senior year. We looked at the correlation between the human development index of countries and prevalence of terrorism. I designed the poster by making the map the central part and using it to visually split it up by the regions we looked at.',
  },
  {
    type: 'maps',
    title: 'GDP vs SPI',
    link: 'https://drive.google.com/file/d/0BxLnMO72hm-UbEZycFlkSzZVUms/view?usp=sharing',
    imageName: 'gdp_vs_spi',
    tags: ['ArcGIS', 'Illustrator'],
    tagline: 'Measuring the Success of Countries',
    description: 'This map was made for one of my classes in college. I wanted to show the correlation between a countries GDP and it\'s social progress index. I used two different color scales and created a matrix for the legend to help visualize how those two varaibles change together in each country.'
  },
  {
    type: 'maps',
    title: 'The West Indies',
    link: 'https://drive.google.com/file/d/0BxLnMO72hm-UTU5kc3d0SHdCOVU/view?usp=sharing',
    imageName: 'west_indies_reference',
    tags: ['ArcGIS', 'Illustrator'],
    tagline: 'A reference map for the West Indies region',
    description: 'In one of my GIS classes in college we had to create a reference map of the West Indies to scale. I started in ArcGIS, and then did the majority of the work in Illustrator for label placement and making it look clean and appealing.'
  },
  {
    type: 'maps',
    title: 'Google Trends & Political Issues',
    link: 'https://drive.google.com/file/d/0BxLnMO72hm-UR0NnMFEzRVRnOUk/view?usp=sharing',
    imageName: 'google_trends_political_issues',
    tags: ['ArcGIS', 'Illustrator'],
    tagline: 'Can Google Trends Predict the Political Leanings of Geographies?',
    description: 'For my thesis my senior year of college I looked at whether you could use the Google search trends of different poltical topics to determine the political leanings of geographies.'
  },
  {
    type: 'maps',
    title: 'Texas Likely Voters',
    link: 'https://drive.google.com/file/d/0BxLnMO72hm-UNTJqOUczV0pERlk/view?usp=sharing',
    imageName: 'tx_likely_voters',
    tags: ['QGIS', 'Illustrator'],
    tagline: 'Finding Likely Voters By Congressional District',
    description: 'An example of one of the many types of maps I made for 0ptimus. This map shows likely voters in Texas for the 2016 presidential election. I added a graph to better indicate to the viewer how the data is actually distributed.'
  }
]

export {
  apps,
  maps
}
