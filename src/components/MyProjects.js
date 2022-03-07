//components
import Project from "./Project";

const projects = [
    {
        title: 'myMoney',
        tech: ['react', 'async/await', 'firebase', 'react-router', 'react hooks', 'state management'],
        extraInfo: "My Foods will help you search meals. When you find your favourite meal you can save it to your favourites by clicking on the heart.This project was built in an OOP style. Data was retrieved from a public api TheMealDB (https://www.themealdb.com/). I used async/await together with fetch to grab the data from the api. Favourite meals are persisted to local storage. There is a lot of DOM manipulation and event listeners. CSS animation was used to animate the heart on click.",
        images: ['../assets/projectImages/mymoney.png', '../assets/projectImages/mymoney2.png', '../assets/projectImages/mymoney3.png'],
        repo: 'https://github.com/philipHinch/my-foods-app',
        link: 'https://philiphinch.github.io/my-foods-app/',
        type: 'personal project'
    },
    {
        title: 'cinemix',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'This is one of my first javascript projects i developed and it was the first project were i fetched data from an api. This is a modern looking weather application. You can see the real-time weather forecast for any city in the world. I used async/await together with fetch to grab the data from the api. The data is fetched from Accuweather API (https://developer.accuweather.com/)',
        images: ['../assets/projectImages/cinemixpreview1.png', '../assets/projectImages/cinemixpreview2.png'],
        repo: 'https://github.com/philipHinch/iWeather-application',
        link: 'https://www.youtube.com/watch?v=9XA7sQKpL2Y&t=2s&ab_channel=neo90sr',
        type: 'personal project'
    },
    {
        title: 'My contacts app',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: "This is a personal React project focused on form handling and controlled inputs. Contacts App will allow you to store your contact's information, it will also allow you to filter through them when searching for a specific contact and it will also allow you to sort the contacts by first or last name when clicking on the sort arrows. There is an alert everytime a color is selected and nice css transitions. I used useEffect and useState for state management. This app is fully responsive. With this project I have realised how much better it is to create react applications rather than creating them with vanilla javascript",
        images: ['../assets/projectImages/contacts.png'],
        repo: 'https://github.com/philipHinch/contacts-app',
        link: 'https://my-contacts-appp.herokuapp.com/',
        type: 'personal project'
    },
    {
        title: "phil's recipes",
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'This is my very first React project and is a remake of the Vanilla JavaScript - My Foods App (https://github.com/philipHinch/my-foods-app). The amount of time I spent building this project (being my very first react project) helped me really understand how some fundamental react concepts work. Here you can search your favourite meals and filter them by category. When clicking on a meal, a modal will pop up with all the detailed info about that meal. The recipes are fetched from TheMealDB API (https://www.themealdb.com/). I used useState & useEffect hooks for state management.',
        images: ['../assets/projectImages/philsrecipes.png'],
        repo: 'https://github.com/philipHinch/phils-recipes',
        link: 'https://phils-recipes.netlify.app/',
        type: 'personal project'
    },
    {
        title: 'my foods app',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: "My Foods will help you to look for your next delicious meal! Search your meals based on their category or their country of provenience. The search page will allow you to search meals by their name. When you find your favourite meal you can save it to your favourites by clicking on the heart. This app is currently only for mobile devices. This project was built in an OOP (object oriented programming) style. Data was retrieved from a public api TheMealDB (https://www.themealdb.com/). I used async/await together with fetch to grab the data from the api. Favourite meals are persisted to local storage. High order functions have been used to iterate through data. There is a lot of DOM manipulation and event listeners. CSS animation was used to animate the heart on click. The page colors are stored in CSS variables.",
        images: ['../assets/projectImages/myfood.png'],
        repo: 'https://github.com/philipHinch/my-foods-app',
        link: 'https://philiphinch.github.io/my-foods-app/',
        type: 'personal project'

    },
    {
        title: 'world countries',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'This is an app that provides you with information about all the 250 countries of the world. This app will allow you to search your countries or sort them either by population or by area. The data was retrieved from Rest Countries API (https://restcountries.com/#api-endpoints-v2). I used fetch together with async/await to fetch the data and i used high order functions like "sort" and "filter" for the filtering and sorting of the countries',
        images: ['../assets/projectImages/worldcountries.png'],
        repo: 'https://github.com/philipHinch/world-countries',
        link: 'https://world-countries-database.netlify.app/',
        type: 'personal project'
    }
];

const MyProjects = () => {
    return (
        <div className="container" id='myProjects'>
            <h2 className="containerHeader"><span className='red'>02.</span>myProjects</h2>
            <div className="projectsContainer">

                {projects && projects.map((project) => (
                    <Project key={project.title} type={project.type} title={project.title} details={project.extraInfo} techs={project.tech} images={project.images} />
                ))}

                {/* <div className="project">
                    <div className="projectLeft">
                        <div className="projectImageContainer">
                            <img src={require('../assets/projectImages/mymoney.png')} alt="" />
                        </div>


                        <div className="projectImageShadow"></div>
                    </div>
                    <div className="projectRight">
                        <h5 className="projectType">personal project</h5>
                        <h3 className="projectTitle">myMoney</h3>
                        <p className="projectDetails">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias eius ipsam, sit commodi, beatae velit non exercitationem autem dolore temporibus sunt consequuntur eum quidem dicta delectus? Nobis, exercitationem beatae.</p>
                        <div className="projectTechs">
                            <small className="tech">react</small>
                            <small className="tech">firebase</small>
                            <small className="tech">tailwind css</small>
                        </div>
                        <div className="projectLinks">
                            <div className="btn btn-primary">viewProject</div>
                            <div className="btn btn-primary">viewRepo</div>
                        </div>
                    </div>

                </div> */}
            </div>
        </div>
    );
}

export default MyProjects;