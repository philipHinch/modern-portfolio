//components
import Project from "./Project";
//icons
import { Icon } from '@iconify/react';
//hooks
import { useState } from "react";
import OtherProject from "./OtherProject";


const projects = [
    {
        title: 'myMoney',
        tech: ['react', 'async/await', 'firebase', 'react-router', 'react hooks', 'state management'],
        extraInfo: "This my first project ever in which I use backend technologies. Here I have set up user authentication together with a database and storage for profile images. Each user can sign up and then add/remove their expenses and incomes. They can also update their profile picture and username. There is a lot of asyncronus programming. I managed state with useReducer, useContext and useState.",
        images: ['https://raw.githubusercontent.com/philipHinch/my_money/main/src/assets/png/desktoppreview.png', 'https://raw.githubusercontent.com/philipHinch/my_money/main/src/assets/png/multidevicemock.png', 'https://raw.githubusercontent.com/philipHinch/my_money/main/src/assets/png/tabletpreview2.png', 'https://raw.githubusercontent.com/philipHinch/my_money/main/src/assets/png/mobilepreview.png'],
        repo: 'https://github.com/philipHinch/my_money',
        link: 'https://mymoneytracker.vercel.app/',
        type: 'personal project'
    },
    {
        title: 'cinemix',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'This is a personal React project. This fully responsive app will allow you to find your favourite movies and save them to your watchlist. You can check the latest, top or upcoming movies or search the films you want with the searchbar at the top. Click on a movie to view the movie information which includes a short description, trailers and much more. The movie data was retrieved from The Movie Database - TMDB.',
        images: ['https://raw.githubusercontent.com/philipHinch/cinemix_movies_app/main/src/assets/cinemixpreview1.png', 'https://raw.githubusercontent.com/philipHinch/cinemix_movies_app/main/src/assets/cinemixpreview2.png', 'https://raw.githubusercontent.com/philipHinch/cinemix_movies_app/main/src/assets/cinemixpreview3.png', 'https://raw.githubusercontent.com/philipHinch/cinemix_movies_app/main/src/assets/cinemixpreview4.png'],
        repo: 'https://github.com/philipHinch/cinemix_movies_app',
        link: 'https://cinemix-movies-app.vercel.app/',
        type: 'personal project'
    },
    {
        title: 'my contacts app',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: "This is a personal React project focused on form handling and controlled inputs. Contacts App will allow you to store your contact's information, it will also allow you to filter through them when searching for a specific contact and it will also allow you to sort the contacts by first or last name when clicking on the sort arrows. There is an alert everytime a color is selected and nice css transitions. I used useEffect and useState for state management. This app is fully responsive. With this project I have realised how much better it is to create react applications rather than creating them with vanilla javascript",
        images: ['https://raw.githubusercontent.com/philipHinch/contacts-app/main/src/assets/preview1.png', 'https://raw.githubusercontent.com/philipHinch/contacts-app/main/src/assets/preview2.png'],
        repo: 'https://github.com/philipHinch/contacts-app',
        link: 'https://my-contacts-appp.herokuapp.com/',
        type: 'personal project'
    },
    {
        title: "phil's recipes",
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'The amount of time I spent building this project (being my very first react project) helped me really understand how some fundamental react concepts work. Here you can search your favourite meals and filter them by category. When clicking on a meal, a modal will pop up with all the detailed info about that meal. The recipes are fetched from TheMealDB API (https://www.themealdb.com/). I used useState & useEffect hooks for state management.',
        images: ['https://raw.githubusercontent.com/philipHinch/phils-recipes/main/src/assets/preview1.png', 'https://raw.githubusercontent.com/philipHinch/phils-recipes/main/src/assets/preview2.png', 'https://raw.githubusercontent.com/philipHinch/phils-recipes/main/src/assets/preview3.png'],
        repo: 'https://github.com/philipHinch/phils-recipes',
        link: 'https://phils-recipes.netlify.app/',
        type: 'personal project'
    },
    {
        title: 'my foods app',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: "My Foods will help you to look for your next delicious meal! Search your meals based on their category or their country of provenience. The search page will allow you to search meals by their name. When you find your favourite meal you can save it to your favourites by clicking on the heart. This project was built in an OOP (object oriented programming) style. Data was retrieved from a public api TheMealDB. I used async/await together with fetch to grab the data from the api. Favourite meals are persisted to local storage. High order functions have been used to iterate through data. There is a lot of DOM manipulation and event listeners. CSS animation was used to animate the heart on click. The page colors are stored in CSS variables.",
        images: ['https://raw.githubusercontent.com/philipHinch/my-foods-app/main/images/preview1.png'],
        repo: 'https://github.com/philipHinch/my-foods-app',
        link: 'https://philiphinch.github.io/my-foods-app/',
        type: 'personal project'

    },
    {
        title: 'world countries',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'This is an app that provides you with information about all the 250 countries of the world. This app will allow you to search your countries or sort them either by population or by area. The data was retrieved from Rest Countries API (https://restcountries.com/#api-endpoints-v2). I used fetch together with async/await to fetch the data and i used high order functions like "sort" and "filter" for the filtering and sorting of the countries',
        images: ['https://raw.githubusercontent.com/philipHinch/world-countries/main/images/preview.png'],
        repo: 'https://github.com/philipHinch/world-countries',
        link: 'https://world-countries-database.netlify.app/',
        type: 'personal project'
    }
];

const otherProjects = [
    {
        title: 'pokemon cards',
        tech: ['react', 'firebase', 'hooks', 'router'],
        extraInfo: "This my first project ever in which I use backend technologies. Here I have set up user.",
        repo: 'https://github.com/philipHinch/my_money',
        link: 'https://mymoneytracker.vercel.app/',
        type: 'personal project'
    },
    {
        title: 'weather app',
        tech: ['react', 'firebase', 'hooks',],
        extraInfo: "This my first project ever in which I use backend technologies. Here I have set up user.",
        repo: 'https://github.com/philipHinch/my_money',
        link: 'https://mymoneytracker.vercel.app/',
        type: 'personal project'
    },
    {
        title: 'todo list',
        tech: ['react', 'firebase', 'hooks',],
        extraInfo: "This my first project ever in which I use backend technologies. Here I have set up user.",
        repo: 'https://github.com/philipHinch/my_money',
        link: 'https://mymoneytracker.vercel.app/',
        type: 'personal project'
    },
    {
        title: 'gradient generator',
        tech: ['react', 'firebase', 'hooks',],
        extraInfo: "This my first project ever in which I use backend technologies. Here I have set up user.",
        repo: 'https://github.com/philipHinch/my_money',
        link: 'https://mymoneytracker.vercel.app/',
        type: 'personal project'
    },
    {
        title: 'gym website',
        tech: ['react', 'firebase', 'hooks',],
        extraInfo: "This my first project ever in which I use backend technologies. Here I have set up user.",
        repo: 'https://github.com/philipHinch/my_money',
        link: 'https://mymoneytracker.vercel.app/',
        type: 'personal project'
    },
    {
        title: 'restaurant website',
        tech: ['react', 'firebase', 'hooks',],
        extraInfo: "This my first project ever in which I use backend technologies. Here I have set up user.",
        repo: 'https://github.com/philipHinch/my_money',
        link: 'https://mymoneytracker.vercel.app/',
        type: 'personal project'
    },
    {
        title: 'number guesser',
        tech: ['react', 'firebase', 'hooks',],
        extraInfo: "This my first project ever in which I use backend technologies. Here I have set up user.",
        repo: 'https://github.com/philipHinch/my_money',
        link: 'https://mymoneytracker.vercel.app/',
        type: 'personal project'
    },
    {
        title: 'old portfolio',
        tech: ['react', 'firebase', 'hooks',],
        extraInfo: "This my first project ever in which I use backend technologies. Here I have set up user.",
        repo: 'https://github.com/philipHinch/my_money',
        link: 'https://mymoneytracker.vercel.app/',
        type: 'personal project'
    }
]

const MyProjects = () => {

    const [viewMore, setViewMore] = useState(false)

    return (
        <div className="container" id='myProjects'>
            <h2 className="containerHeader"><span className='red'>02.</span>myProjects</h2>
            <div className="projectsContainer">
                {projects && projects.map((project) => (
                    <Project key={project.title} type={project.type} title={project.title} details={project.extraInfo} link={project.link} repo={project.repo} techs={project.tech} images={project.images} />
                ))}
            </div>

            <div className={`otherProjectsContainer ${ viewMore ? 'grow2' : '' }`}>
                <h2 className="containerSubHeader otherProjectsSubHeader"><span className='red'>//</span>otherProjects</h2>
                <div className='otherProjectGrid'>
                    {otherProjects && otherProjects.map((project) => (
                        <OtherProject title={project.title} tech={project.tech} extraInfo={project.extraInfo} repo={project.repo} link={project.link} type={project.type} key={project.title} />
                    ))}
                    {/* <OtherProject title={otherProjects.title} tech={otherProjects.tech} extraInfo={otherProjects.extraInfo} repo={otherProjects.repo} link={otherProjects.link} type={otherProjects.type} /> */}
                </div>
            </div>

            <div className="btn btn-primary viewMoreProjects" onClick={() => setViewMore(!viewMore)}>
                {viewMore ? 'close' : 'otherProjects'}
                {viewMore ? <Icon icon="charm:chevron-up" className='chevronIcon' />
                    : <Icon icon="ci:chevron-big-down" className='chevronIcon' />}
            </div>
        </div>
    );
}

export default MyProjects;