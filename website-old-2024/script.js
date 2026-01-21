document.getElementById('year').textContent = new Date().getFullYear();
    
function getRandomNumber() {
        return Math.floor(Math.random() * 10000) + 1; // Generate a random number between 1 and 10000
}

function startPowerLevel() {
    const powerLevelDisplay = document.getElementById('power-level-display');
    const powerLevelSpan = powerLevelDisplay.querySelector('.power-level');
    const characterMessage = document.getElementById('character-message');
    const scouterSound = document.getElementById('scouter-sound');
    powerLevelDisplay.classList.remove('hidden');
    characterMessage.classList.add('hidden'); // Hide the message initially

    scouterSound.play();

     let interval = setInterval(() => {
        powerLevelSpan.textContent = getRandomNumber();
    }, 100); // Change number every 100ms

    setTimeout(() => {
        clearInterval(interval);
        scouterSound.pause(); // Stop the sound
        scouterSound.currentTime = 0; // Reset the sound
        const finalNumber = getRandomNumber();
        powerLevelSpan.textContent = finalNumber; // Set final random number

        let message = '';
        if (finalNumber < 1000) {
            message = "You're a saibaman!";
        } else if (finalNumber >= 1000 && finalNumber < 2000) {
            message = "You're Krillin!";
        } else if (finalNumber >= 2000 && finalNumber < 3000) {
            message = "You're Yamcha!";
        } else if (finalNumber >= 3000 && finalNumber < 4000) {
            message = "You're Tien!";
        } else if (finalNumber >= 4000 && finalNumber < 5000) {
            message = "You're Piccolo!";
        } else if (finalNumber >= 5000 && finalNumber < 6000) {
            message = "You're Goku!";
        } else if (finalNumber >= 6000 && finalNumber < 7000) {
            message = "You're Vegeta!";
        } else if (finalNumber >= 7000 && finalNumber < 8000) {
            message = "You're Trunks!";
        } else if (finalNumber >= 8000 && finalNumber < 9000) {
            message = "You're Gohan!";
        } else {
            message = "You're a Super Saiyan!";
        }

        characterMessage.textContent = message;
        characterMessage.classList.remove('hidden'); // Show the message
        }, 4000); // Stop after 4 seconds
}

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('[data-collapse-toggle="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcons = menuButton.querySelectorAll('svg');

    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuIcons[0].classList.toggle('hidden'); // Show hamburger icon
      menuIcons[1].classList.toggle('hidden'); // Show close icon
    });
});

// Define an array of categories
const categories = ['All', 'Website', 'Games'];

// Define an array of project objects
const projects = [
    {
      image: 'img/projects/pacman.png',
      title: 'Pacman',
      description: 'Pacman Clone made using HTML5 Canvas & Vanilla Javascript',
      repoLink: 'https://github.com/haider-sama/Pacman',
      category: 'Games'
    },
    {
        image: 'img/projects/dinosaur.png',
        title: 'Chrome Dinosaur',
        description: 'Chrome Dino made using HTML5 Canvas & Vanilla Javascript',
        repoLink: 'https://github.com/haider-sama/Chrome-Dinosaur',
        category: 'Games'
    },
    {
        image: 'img/projects/matrix.png',
        title: 'Matrix',
        description: 'Matrix Animation made using HTML5 Canvas & Vanilla Javascript',
        repoLink: 'https://github.com/haider-sama/Matrix',
        category: 'Games'
    },
    {
        image: 'img/projects/minesweeper.png',
        title: 'Minesweeper',
        description: 'Minesweeper made using HTML5 Canvas & Vanilla Javascript',
        repoLink: 'https://github.com/haider-sama/Minesweeper',
        category: 'Games'
    },
    {
        image: 'img/projects/pong.png',
        title: 'Pong',
        description: 'A game of pong made using HTML5 Canvas & Vanilla Javascript',
        repoLink: 'https://github.com/haider-sama/Pong',
        category: 'Games'
    },
    {
        image: 'img/projects/snake.png',
        title: 'Snake',
        description: 'Snake game made using HTML5 Canvas & Vanilla Javascript',
        repoLink: 'https://github.com/haider-sama/Snake-JS',
        category: 'Games'
    },
    {
        image: 'img/projects/tetris.png',
        title: 'Tetris',
        description: 'Tetris Clone made using HTML5 Canvas & Vanilla Javascript',
        repoLink: 'https://github.com/haider-sama/Tetris',
        category: 'Games'
    },
    {
        image: 'img/projects/invaders.png',
        title: 'Space Invaders',
        description: 'Space Invaders Clone made using HTML5 Canvas & Vanilla Javascript',
        repoLink: 'https://github.com/haider-sama/Space-Invaders',
        category: 'Games'
    },
    {
        image: 'img/projects/hotel-booking.png',
        title: 'Bookern Hotel Booking App',
        description: 'A Fullstack Hotel Booking App made using React, Vite, Node.js, Express TailwindCSS and MongoDB',
        repoLink: 'https://github.com/haider-sama/Bookern-Hotel-Booking-App',
        category: 'Website'
    },
    {
        image: 'img/projects/restaurant-delivery.png',
        title: 'DeconEats Restaurant Delivery App',
        description: 'A Fullstack Restaurant Delivery App made using React, Vite, Node.js, TailwindCSS, Auth0 and MongoDB',
        repoLink: 'https://github.com/haider-sama/Restaurant-Ordering-App',
        category: 'Website'
    },
    {
        image: 'img/projects/decon-store.png',
        title: 'DeconByte E-Commerce App',
        description: 'DeconByte Store - Fullstack Game Store E-Commerce Marketplace made using NextJS.14, TS & TailwindCSS',
        repoLink: 'https://github.com/haider-sama/DeconByte-Store',
        category: 'Website'
    },
    {
        image: 'img/projects/pizzrella.png',
        title: 'Pizzrella Food Ordering App',
        description: 'A Fullstack Pizza delivery app made using React, Next.js, TailwindCSS and MongoDB',
        repoLink: 'https://github.com/haider-sama/Pizzrella-Food-Ordering-App',
        category: 'Website'
    },
    {
        image: 'img/projects/spotify.png',
        title: 'Spotify Clone',
        description: 'A Fullstack Spotify Clone made using React, Next.js, Typescript, PostgreSQL, TailwindCSS and Supabase',
        repoLink: 'https://github.com/haider-sama/Spotify-Clone',
        category: 'Website'
    },
    {
        image: 'img/projects/flashcommerce.png',
        title: 'FlashCommerce - Fullstack Digital Gift Cards E-Commerce Marketplace',
        description: 'Built with the NEXT.js 14, tRPC, TypeScript, Payload & Tailwind CSS',
        repoLink: 'https://github.com/haider-sama/Spotify-Clone',
        category: 'Website'
    },
    // Add more projects as needed
];

// Function to generate category button HTML
const generateCategoryButton = (category) => {
    return `
    <button class="text-white m-2 bg-black text-white px-4 py-2 font-medium flex space-x-2 bg-gray-800 
    hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300
    rounded-lg text-sm" 
    onclick="filterProjects('${category}')">
        ${category.charAt(0).toUpperCase() + category.slice(1)}
      </button>
    `;
};

// Function to generate project card HTML
const generateProjectCard = (project) => {
    return `
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-10">
        <img class="rounded-t-lg" src="${project.image}" alt="" />
    <div class="p-5">
        <a href="#">
            <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${project.title}</h4>
        </a>
        <p class="mb-3 text-md font-normal text-gray-700">${project.description}</p>
        <a href="${project.repoLink}" class="inline-flex items-center
        bg-black text-white px-6 py-3 font-medium flex space-x-2 bg-gray-800 hover:bg-gray-900 
        focus:outline-none focus:ring-4 focus:ring-gray-300
        rounded-lg text-sm me-2 mb-2">
            View Repository
            <span class="arrow ml-1"><img src="img/right-chevron.png" class="w-4 h-4" /></span>
        </a>
    </div>
</div>
    `;
};
  
// Function to display all projects
const displayProjects = (filteredProjects) => {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = filteredProjects.map(generateProjectCard).join('');
};

// Function to filter projects based on category
const filterProjects = (category) => {
    if (category === 'All') {
      displayProjects(projects);
    } else {
      const filteredProjects = projects.filter(project => project.category === category);
      displayProjects(filteredProjects);
    }
};
  
// Display category buttons
const categoryButtonsContainer = document.getElementById('category-buttons');
categoryButtonsContainer.innerHTML = categories.map(generateCategoryButton).join('');

// Display all projects initially
displayProjects(projects);
