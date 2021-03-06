//components
import Project from "./Project";
import OtherProject from "./OtherProject";
//icons
import { Icon } from '@iconify/react';
//hooks
import { useState } from "react";


const projects = [
    {
        title: 'expenses tracking app',
        tech: ['react', 'hooks', 'context-api', 'async-await', 'firebase', 'user-auth', 'database', 'storage'],
        extraInfo: "Full-Stack \"CRUD\" application with user authentication, database and storage for profile images. Users can sign up and then add/remove their expenses and incomes. They can also update their profile picture and username",
        images: ['https://raw.githubusercontent.com/philipHinch/my_money/main/src/assets/png/desktoppreview.png', 'https://raw.githubusercontent.com/philipHinch/my_money/main/src/assets/png/multidevicemock.png', 'https://raw.githubusercontent.com/philipHinch/my_money/main/src/assets/png/tabletpreview2.png', 'https://raw.githubusercontent.com/philipHinch/my_money/main/src/assets/png/mobilepreview.png'],
        repo: 'https://github.com/philipHinch/my_money',
        link: 'https://mymoneytracker.vercel.app/',
        type: 'personal project'
    },
    {
        title: 'world countries react',
        tech: ['react', 'mapbox-gl-js', 'context-api', 'async-await', 'fetch-api', 'high-order-functions', 'css-animations'],
        extraInfo: 'This app will display all the information of all the countries in the world. You can sort them by name, population, area and capital. Clicking on the country will display extra information & show the mapbox',
        images: ['https://github.com/philipHinch/world_countries_react/blob/main/src/assets/previews/preview.png?raw=true', 'https://github.com/philipHinch/world_countries_react/blob/main/src/assets/previews/preview2.png?raw=true', 'https://github.com/philipHinch/world_countries_react/blob/main/src/assets/previews/world_countries_preview_large_modal1.png?raw=true', 'https://github.com/philipHinch/world_countries_react/blob/main/src/assets/previews/world_countries_preview_large_modal2.png?raw=true', 'https://github.com/philipHinch/world_countries_react/blob/main/src/assets/previews/preview_medium.jpg?raw=true', 'https://github.com/philipHinch/world_countries_react/blob/main/src/assets/previews/preview_small.jpg?raw=true', 'https://github.com/philipHinch/world_countries_react/blob/main/src/assets/previews/smartmockups_l3hg77n0.jpg?raw=true', 'https://github.com/philipHinch/world_countries_react/blob/main/src/assets/previews/smartmockups_l3hg7htn.jpg?raw=true'],
        repo: 'https://github.com/philipHinch/world_countries_react',
        link: 'https://world-countries-react.vercel.app/',
        type: 'personal project'
    },
    {
        title: 'my pokedex',
        tech: ['react', 'hooks', 'context-api', 'async-await', 'fetch-api', 'high-order-functions', 'css-animations', 'css-pseudo'],
        extraInfo: 'A test for a dev company. View all or search a specific pokemon and save them to your favourites and compare them with one another by activating the compare mode',
        images: ['https://github.com/philipHinch/my_pokedex/blob/main/src/assets/previews/pokedex_desktop_preview.png?raw=true', 'https://github.com/philipHinch/my_pokedex/blob/main/src/assets/previews/pokedex_desktop_preview_2.png?raw=true', 'https://github.com/philipHinch/my_pokedex/blob/main/src/assets/previews/pokedex_desktop_preview_3.png?raw=true', 'https://github.com/philipHinch/my_pokedex/blob/main/src/assets/previews/pokedex_mobile_preview.jpg?raw=true', 'https://github.com/philipHinch/my_pokedex/blob/main/src/assets/previews/pokedex_mobile_preview_2.jpg?raw=true', 'https://github.com/philipHinch/my_pokedex/blob/main/src/assets/previews/pokedex_mobile_preview_3.jpg?raw=true'],
        repo: 'https://github.com/philipHinch/my_pokedex',
        link: 'https://my-pokedex-nu.vercel.app/',
        type: 'developer test'
    },
    {
        title: 'space tourism',
        tech: ['react', 'react-hooks', 'react-router', 'css-animations'],
        extraInfo: 'frontend mentor challenge in which the goal is to build out a multi-page space tourism website and get it looking as close to the original design as possible. (link in repository)',
        images: ['https://raw.githubusercontent.com/philipHinch/space_tourism/main/src/assets/previews/destination-desktop-preview.png', 'https://raw.githubusercontent.com/philipHinch/space_tourism/main/src/assets/previews/home-desktop-preview.png', 'https://github.com/philipHinch/space_tourism/blob/main/src/assets/previews/crew-desktop-preview.png?raw=true', 'https://github.com/philipHinch/space_tourism/blob/main/src/assets/previews/technology-desktop-preview.png?raw=truehttps://github.com/philipHinch/space_tourism/blob/main/src/assets/previews/technology-desktop-preview.png?raw=true', 'https://github.com/philipHinch/space_tourism/blob/main/src/assets/previews/home-tablet-preview.jpg?raw=true', 'https://github.com/philipHinch/space_tourism/blob/main/src/assets/previews/technology-tablet-preview.jpg?raw=true', 'https://github.com/philipHinch/space_tourism/blob/main/src/assets/previews/crew-mobile-preview.jpg?raw=true', 'https://github.com/philipHinch/space_tourism/blob/main/src/assets/previews/destination-mobile-preview.jpg?raw=true'],
        repo: 'https://github.com/philipHinch/space_tourism',
        link: 'https://space-tourism-travel.vercel.app/',
        type: 'challenge project'
    },
    {
        title: 'cinemix movie app',
        tech: ['react', 'tailwind-css', 'async-await ', 'fetch api', 'high order functions', 'local storage'],
        extraInfo: 'Find your favourite movies and save them to your watchlist. Check the latest, top or upcoming movies or search the films you want with the searchbar. Click on a movie to view movie details. movie data was retrieved from a public api',
        images: ['https://raw.githubusercontent.com/philipHinch/cinemix_movies_app/main/src/assets/cinemixpreview1.png', 'https://raw.githubusercontent.com/philipHinch/cinemix_movies_app/main/src/assets/cinemixpreview2.png', 'https://raw.githubusercontent.com/philipHinch/cinemix_movies_app/main/src/assets/cinemixpreview3.png', 'https://raw.githubusercontent.com/philipHinch/cinemix_movies_app/main/src/assets/cinemixpreview4.png'],
        repo: 'https://github.com/philipHinch/cinemix_movies_app',
        link: 'https://cinemix-movies-app.vercel.app/',
        type: 'personal project'
    },
    {
        title: 'my contacts app',
        tech: ['react', 'hooks', 'high order functions', 'local storage'],
        extraInfo: "Fully responsive app focused on form handling and controlled inputs. Save a contact information to the list. Filter and sort through all the contact list",
        images: ['https://raw.githubusercontent.com/philipHinch/contacts-app/main/src/assets/preview1.png', 'https://raw.githubusercontent.com/philipHinch/contacts-app/main/src/assets/preview2.png'],
        repo: 'https://github.com/philipHinch/contacts-app',
        link: 'https://my-contacts-appp.herokuapp.com/',
        type: 'personal project'
    },
    {
        title: "phil's recipes",
        tech: ['react', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'Search your favourite meals and filter through them by category. Clicking on a meal will show a modal with the detailed info about that meal. Recipes are fetched from a public api',
        images: ['https://raw.githubusercontent.com/philipHinch/phils-recipes/main/src/assets/preview1.png', 'https://raw.githubusercontent.com/philipHinch/phils-recipes/main/src/assets/preview2.png', 'https://raw.githubusercontent.com/philipHinch/phils-recipes/main/src/assets/preview3.png'],
        repo: 'https://github.com/philipHinch/phils-recipes',
        link: 'https://phils-recipes.netlify.app/',
        type: 'personal project'
    },
    {
        title: 'my foods app',
        tech: ['js classes', '(OOP)', 'async-await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: "Search your meals based on their category or their country of provenience. the search page will allow you to search meals by their name. save your favourite meals to your favourites page. app built in an OOP (object oriented programming) style. Data retrieved from a public api",
        images: ['https://raw.githubusercontent.com/philipHinch/my-foods-app/main/images/preview1.png'],
        repo: 'https://github.com/philipHinch/my-foods-app',
        link: 'https://philiphinch.github.io/my-foods-app/',
        type: 'personal project'

    },
    {
        title: '3D credit card designer',
        tech: ['react', 'react-hooks', 'usecontext', 'usereducer', 'css animations'],
        extraInfo: 'Customise and create your own credit card. Choose the card theme from a range of patterns and decide which colour you want for the back. Use mouse for better experience',
        images: ['https://raw.githubusercontent.com/philipHinch/credit_card_validation/main/src/assets/previews/credit_card_preview_large.png', 'https://raw.githubusercontent.com/philipHinch/credit_card_validation/main/src/assets/previews/credit_card_preview_small.png'],
        repo: 'https://github.com/philipHinch/credit_card_validation',
        link: 'https://credit-card-creator.vercel.app/',
        type: 'personal project'
    },

];

const otherProjects = [
    {
        title: 'creative agency',
        tech: ['react', 'css', 'css grid'],
        extraInfo: 'A "Frontend Mentor" challenge where the goal is to build out a landing page and get it looking as close to the original design as possible.',
        images: [''],
        repo: 'https://github.com/philipHinch/creative_agency',
        link: 'https://creative-agency-sunnyside.vercel.app/',
        type: 'challenge project'
    },
    {
        title: 'food maker',
        tech: ['react', 'react-hooks', 'css'],
        extraInfo: 'Build your burger by adding ingredients and see your burger come to life.',
        images: [''],
        repo: 'https://github.com/philipHinch/food_maker',
        link: 'https://food-maker.vercel.app/',
        type: 'personal project'
    },
    {
        title: 'date countdown',
        tech: ['react', 'react-hooks', 'date-object'],
        extraInfo: 'This app will countdown to your selected date and tell you how long you need to wait for your favourite holiday',
        images: ['https://raw.githubusercontent.com/philipHinch/new_years_countdown/main/src/assets/previews/countdownpreview1.png', 'https://raw.githubusercontent.com/philipHinch/new_years_countdown/main/src/assets/previews/countdownpreview2.png', 'https://raw.githubusercontent.com/philipHinch/new_years_countdown/main/src/assets/previews/countdownpreview3.png'],
        repo: 'https://github.com/philipHinch/new_years_countdown',
        link: 'https://date-countdown-xi.vercel.app/',
        type: 'personal project'
    },
    {
        title: 'world countries',
        tech: ['js', 'async-await', 'fetch api', 'high order functions'],
        extraInfo: 'View info about countries of the world. Search or sort them either by population, area or capital. Data was retrieved from a api',
        images: ['https://raw.githubusercontent.com/philipHinch/world-countries/main/images/preview.png'],
        repo: 'https://github.com/philipHinch/world-countries',
        link: 'https://world-countries-database.netlify.app/',
        type: 'personal project'
    },
    {
        title: 'pokemon flip cards',
        tech: ['js', 'css', 'fetch api', 'async/await', 'animations'],
        extraInfo: "search your favourite pokemon and check out their stats. the random button will choose the pokemon for you",
        repo: 'https://github.com/philipHinch/pokemon-cards',
        link: 'https://pokemon-cards-viewer.netlify.app/',
        type: 'personal project'
    },
    {
        title: 'weather app',
        tech: ['js', 'css', 'fetch api', 'async/await'],
        extraInfo: "this is a modern looking weather application with data fetched from a public api",
        repo: 'https://github.com/philipHinch/iWeather-application',
        link: 'https://www.youtube.com/watch?v=9XA7sQKpL2Y&t=2s&ab_channel=neo90sr',
        type: 'personal project'
    },
    {
        title: 'old portfolio',
        tech: ['js', 'css', 'local-storage',],
        extraInfo: "my old but not so old personal portfolio. it has a couple of nice features ",
        repo: 'https://github.com/philipHinch/my-portfolio',
        link: 'https://philhinchportfolio.netlify.app/',
        type: 'personal project'
    },
    {
        title: 'interactive italy map',
        tech: ['js', 'css', 'html',],
        extraInfo: "select the region and the aside section will show some information about the specific region",
        repo: 'https://github.com/philipHinch/interactive-map-of-italy',
        link: 'https://mapofitaly.netlify.app/',
        type: 'personal project'
    },

    {
        title: 'the solar system',
        tech: ['js', 'css', 'async/await', 'animations'],
        extraInfo: "check out information about our neighbouring planets. data retrieved from a public api",
        repo: 'https://github.com/philipHinch/solar-system',
        link: 'https://philiphinch.github.io/solar-system/',
        type: 'personal project'
    },

    {
        title: 'shopping list',
        tech: ['js', 'css', 'html',],
        extraInfo: "simple shopping list. add items to the list, cross them out or delete them",
        repo: 'https://github.com/philipHinch/My-Shopping-List',
        link: 'https://shoppinglistmy.netlify.app/',
        type: 'personal project'
    },
    // {
    //     title: 'gym website',
    //     tech: ['js', 'css', 'html',],
    //     extraInfo: "a fully responsive simple but cool looking gym website",
    //     repo: 'https://github.com/philipHinch/PowerGym',
    //     link: 'https://powergyms.netlify.app/',
    //     type: 'personal project'
    // },

    {
        title: 'number guessing game',
        tech: ['js', 'css', 'html',],
        extraInfo: "a simple number guessing game",
        repo: 'https://github.com/philipHinch/numberguesser',
        link: 'https://mynumberguesser.netlify.app/',
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