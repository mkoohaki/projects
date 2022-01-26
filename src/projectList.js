export const projects = [
    {
        id: 1,
        img: 'https://github.com/mkoohaki/scrabble_points_generator/raw/master/Images/java2.jpg',
        title: 'Scrabble Points Generator',
        type: 'Computer application',
        language: 'Java',
        framework: 'JavaFX',
        description: [
            'An JavaFx application with some rules for word playing as a scrabble points generator'
        ],
        git: 'https://github.com/mkoohaki/scrabble_points_generator'
    },
    {
        id: 2,
        img: 'https://github.com/mkoohaki/ATMachin/raw/master/images/Account.JPG',
        title: 'ATMachine',
        type: 'Computer application',
        language: 'Java',
        framework: 'JavaFX',
        description: ['A JavaFx application',
            'It works like an ATM machine/Bank account application',
            'It encrypts the password before saving password on the local database',
            'It uses XAMPP as a local server and is connected to MySql as a local database',
            'For encryption, it salts the password with a 10 random characters and using SHA2-256 for hashing. Just the result save in database and nobody has access to the password',
            'It uses SQL commands to get, insert, update, and delete data',
            'At the begining, user faces up with Login page'
        ],
        git: 'https://github.com/mkoohaki/ATMachine'
    },
    {
        id: 3,
        img: 'https://github.com/mkoohaki/Foody-Moody/raw/main/Images/foodymoody1.jpg',
        title: 'FOODY MOODY',
        type: 'Mobile application',
        language: 'Kotlin',
        framework: '',
        description: [
            'An Android application which is created with Kotlin',
            'This is a social application like Instagram but for food lovers and who love cooking', 
            'It is connected to Firebase as a real time database'
        ],   
        git: 'https://github.com/mkoohaki/Foody-Moody'
    },
    {
        id: 4,
        img: 'https://github.com/mkoohaki/gcpfinder/raw/master/Images/gcpfinder1.png',
        title: 'gcpfinder',
        type: 'Mobile application',
        language: 'Kotlin',
        framework: 'Android',
        description: [
            'This is an Android application, minSdkVersion 21, targetSdkVersion 30',
            'The application connect to Firebase as a real time database',
            'In this application Georgian college\'s students (Barrie) can see the available parking spot and save the spot if it is available',
            'This is published on Playstore called GCPFinder'
        ],    
        git: 'https://github.com/mkoohaki/gcpfinder'
    },
        {
        id: 5,
        img: 'https://github.com/mkoohaki/Restrator/raw/master/Images/android1.jpg',
        title: 'Restrator',
        type: 'Mobile application',
        language: 'Kotlin',
        framework: 'Android',
        description: [
            'An Android application which is written with Kotlin',
            'It is using Firebase as database',
            'User can add restaurant in application and rate them'
        ],    
        git: 'https://github.com/mkoohaki/scrabble_points_generator'
    },
    {
        id: 6,
        img: 'https://github.com/mkoohaki/MyMov/raw/master/images/Capture.JPG',
        title: 'MYMOVIES',
        type: 'Web application',
        language: 'JavaScript',
        framework: 'Node.js / Express',
        description: [
            'This is a web application which is created in Visual Studio by using full-stack JavaScript solution',
            'This applicatoin comprises three major building blocks of 4 possible layers: 1. MongoDB as the databas 2. Express as the web server framework 3.Node.js as the server platform',
            'This application can be used for selecting the favorites movies',
            'Application use rest API from http://www.omdbapi.com to find the movies'
        ],    
        git: 'https://github.com/mkoohaki/MyMov'
    },
    {
        id: 7,
        img: 'https://github.com/mkoohaki/goal/raw/master/images/logo.jpg',
        title: 'goal',
        type: 'Web application',
        language: 'JavaScript',
        framework: 'Node.js / Express / API',
        description: [
            'A web application based on JavaScript, MongoDB, Express, and Node.js',
            'It is provided a rest API for footbal matches videos',
            'Users can add video inks via searching the matches'
        ],    
        git: 'https://github.com/mkoohaki/goal'
    },
    {
        id: 8,
        img: 'na',
        title: 'digital_wallet',
        type: 'Mobile application',
        language: 'Swift',
        framework: 'IOS',
        description: [
            'This a IOS application - Written with Swift'
        ],    
        git: 'https://github.com/mkoohaki/digital_wallet'
    },
    {
        id: 9,
        img: 'https://github.com/mkoohaki/calculator/raw/main/Images/calculator.jpg',
        title: 'calculator',
        type: 'Mobile application',
        language: 'Kotlin',
        framework: 'Android ',
        description: [
            'This is an Android application based on Kotlin.'
        ],    
        git: 'https://github.com/mkoohaki/calculator'
    },
    {
        id: 10,
        img: 'https://github.com/mkoohaki/jikiki/raw/master/Jikiki.jpg?raw=true',
        title: 'JIKIKI',
        type: 'Web application',
        language: 'JavaScript',
        framework: 'Node.js / Express',
        description: [
            'Jikiki is a web application which is created in Visual Studio with using full-stack JavaScript solution',
            'This applicatoin comprises three major building blocks of 4 possible layers: 1. MongoDB as the databas 2. Express as the web server framework 3.Node.js as the server platform',
            'This application can use for putting items for sale',
            'User can see the items even without registration and logging in',
            'User can sign up-after submitting the filled-out form, application sends a link to the email to make sure the email exists, then user after by clicking the link, confirm the account and can log in',
            'After logging in, user can create items for sale'
        ],    
        git: 'https://github.com/mkoohaki/jikiki'
    },
    {
        id: 11,
        img: 'https://github.com/mkoohaki/MyMovies/raw/master/mymovies.JPG?raw=true',
        title: 'MyMovies',
        type: 'Web page',
        language: 'Vanilla JavaScript',
        framework: 'HTML',
        description: [
            'This is a front-end page which it is base on HTML, CSS, and JS',
            'In this page, user can search movies via API of IMDB',
            'User can add in or remove from the movies the list'
        ],    
        git: 'https://github.com/mkoohaki/MyMovies'
    },
    {
        id: 12,
        img: 'https://github.com/mkoohaki/portfolio/raw/master/Portfolio.jpg?raw=true',
        title: 'Portfolio',
        type: 'Web application',
        language: 'JavaScript',
        framework: 'Node.js / Express',
        description: [
            'This is a portfolio application and using JavaScript 3 layers: MongoDB Node.js Express and .pug, css, and js as UI'
        ],    
        git: 'https://github.com/mkoohaki/portfolio'
    }
]
