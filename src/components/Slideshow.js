

const projects = [
    {
        title: 'myMoney',
        tech: ['react', 'async/await', 'firebase', 'react-router', 'react hooks', 'state management'],
        extraInfo: "My Foods will help you to look for your next delicious meal! Search your meals based on their category or their country of provenience. The search page will allow you to search meals by their name. When you find your favourite meal you can save it to your favourites by clicking on the heart. This app is currently only for mobile devices. This project was built in an OOP (object oriented programming) style. Data was retrieved from a public api TheMealDB (https://www.themealdb.com/). I used async/await together with fetch to grab the data from the api. Favourite meals are persisted to local storage. High order functions have been used to iterate through data. There is a lot of DOM manipulation and event listeners. CSS animation was used to animate the heart on click. The page colors are stored in CSS variables.",
        images: ['../assets/projectImages/mymoney.png', '../assets/projectImages/mymoney2.png', '../assets/projectImages/mymoney3.png'],
        repo: 'https://github.com/philipHinch/my-foods-app',
        link: 'https://philiphinch.github.io/my-foods-app/'
    },
    {
        title: 'my foods app',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: "My Foods will help you to look for your next delicious meal! Search your meals based on their category or their country of provenience. The search page will allow you to search meals by their name. When you find your favourite meal you can save it to your favourites by clicking on the heart. This app is currently only for mobile devices. This project was built in an OOP (object oriented programming) style. Data was retrieved from a public api TheMealDB (https://www.themealdb.com/). I used async/await together with fetch to grab the data from the api. Favourite meals are persisted to local storage. High order functions have been used to iterate through data. There is a lot of DOM manipulation and event listeners. CSS animation was used to animate the heart on click. The page colors are stored in CSS variables.",
        images: './images/projectimages/myfood.png',
        repo: 'https://github.com/philipHinch/my-foods-app',
        link: 'https://philiphinch.github.io/my-foods-app/'

    },
    {
        title: 'weather app',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'This is one of my first javascript projects i developed and it was the first project were i fetched data from an api. This is a modern looking weather application. You can see the real-time weather forecast for any city in the world. I used async/await together with fetch to grab the data from the api. The data is fetched from Accuweather API (https://developer.accuweather.com/)',
        images: './images/projectimages/weather.png',
        repo: 'https://github.com/philipHinch/iWeather-application',
        link: 'https://www.youtube.com/watch?v=9XA7sQKpL2Y&t=2s&ab_channel=neo90sr'
    },
    {
        title: 'My contacts app',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: "This is a personal React project focused on form handling and controlled inputs. Contacts App will allow you to store your contact's information, it will also allow you to filter through them when searching for a specific contact and it will also allow you to sort the contacts by first or last name when clicking on the sort arrows. There is an alert everytime a color is selected and nice css transitions. I used useEffect and useState for state management. This app is fully responsive. With this project I have realised how much better it is to create react applications rather than creating them with vanilla javascript",
        images: ['../assets/projectImages/mymoney.png', '../assets/projectImages/mymoney2.png', '../assets/projectImages/mymoney3.png'],
        repo: 'https://github.com/philipHinch/contacts-app',
        link: 'https://my-contacts-appp.herokuapp.com/'
    },
    {
        title: "phil's recipes",
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'This is my very first React project and is a remake of the Vanilla JavaScript - My Foods App (https://github.com/philipHinch/my-foods-app). The amount of time I spent building this project (being my very first react project) helped me really understand how some fundamental react concepts work. Here you can search your favourite meals and filter them by category. When clicking on a meal, a modal will pop up with all the detailed info about that meal. The recipes are fetched from TheMealDB API (https://www.themealdb.com/). I used useState & useEffect hooks for state management.',
        images: './images/projectimages/philsrecipes.png',
        repo: 'https://github.com/philipHinch/phils-recipes',
        link: 'https://phils-recipes.netlify.app/'
    },
    {
        title: 'world countries',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'This is an app that provides you with information about all the 250 countries of the world. This app will allow you to search your countries or sort them either by population or by area. The data was retrieved from Rest Countries API (https://restcountries.com/#api-endpoints-v2). I used fetch together with async/await to fetch the data and i used high order functions like "sort" and "filter" for the filtering and sorting of the countries',
        images: './images/projectimages/worldcountries.png',
        repo: 'https://github.com/philipHinch/world-countries',
        link: 'https://world-countries-database.netlify.app/'
    },
    {
        title: 'interactive italy map',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'This is a nice project created with Vanilla Javascript about the country where I mostly grew up in. I fetched data from a local json file. There is a lot of dom manipulation going on especially with the Italian SVG. You can select or hover over the region you want to get information about. The right aside section will show some nice information about the specific region. (credit to https://www.wikipedia.org/) The left aside section will show you the provinces for each region. This app is also fully responsive',
        images: './images/projectimages/mapofitaly.png',
        repo: 'https://github.com/philipHinch/interactive-map-of-italy',
        link: 'https://mapofitaly.netlify.app/'
    },
    {
        title: 'pokemon flip cards',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'With this app you can search your favourite pokemons. After you have searched your pokemon, a cool 3D card flip animation will start showing you the front part of the card with the pokemon stats! If you are undecided, let the random button choose the pokemons for you. In this project I practised my css skills. I learnt how to do css animations and how to create transitions. The data was retrieved from a public API (https://pokeapi.co/)',
        images: './images/projectimages/pokemon.png',
        repo: 'https://github.com/philipHinch/pokemon-cards',
        link: 'https://pokemon-cards-viewer.netlify.app/'
    },
    {
        title: 'gym webiste',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'This is one of my first projects where I used html, css and javascript. It is just a simple but cool looking multi-page gym website with some minor dynamicity. It is also fully responsive.',
        images: './images/projectimages/gym.png',
        repo: 'https://github.com/philipHinch/PowerGym',
        link: 'https://powergyms.netlify.app/'
    }
];

const images = ['../assets/projectImages/mymoney.png', '../assets/projectImages/mymoney2.png', '../assets/projectImages/mymoney3.png']

const Slideshow = () => {
    return (
        <div>

        </div>
    )
};

export default Slideshow;