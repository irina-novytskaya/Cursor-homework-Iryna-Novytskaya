const images = [
    {
      name: "R2-D2",
      image: "img/R2-D2.jpg",
    },
    {
      name: "Luke Skywalker",
      image: "img/luke-skywalker.jpg",
    },
    {
      name: "Leia Organa",
      image: "img/leia.jpg",
    },
    {
      name: "C-3PO",
      image: "img/C-3PO.png",
    },
    {
      name: "Darth Vader",
      image: "img/dw.png",
    },
    {
      name: "Chewbacca",
      image: "img/chewbacca.jpg",
    },
    {
      name: "Obi-Wan Kenobi",
      image: "img/Obi-Wan.jpg",
    },
    {
      name: "Lobot",
      image: "img/lobot.jpg",
    },
    {
      name: "Lando Calrissian",
      image: "img/Lando_WoSW.jpg",
    },
    {
      name: "Bossk",
      image: "img/Bossk.jpg",
    },
    {
      name: "IG-88",
      image: "img/IG-88B-ESB.jpg",
    },
    {
      name: "Boba Fett",
      image: "img/FettbobaJB.png",
    },
    {
      name: "Palpatine",
      image: "img/Emperor_Sidious.png",
    },
    {
      name: "Han Solo",
      image: "img/solo.jpg",
    },
    {
      name: "Wedge Antilles",
      image: "img/antilles.jpg",
    },
    {
      name: "Yoda",
      image: "img/yoda.png",
    },
  ];
  
  const result = document.querySelector(".result");
  
  const getInfoButton = document.querySelector("#get-info-button");
  getInfoButton.addEventListener("click", () => {
    clean();  
      try{
        axios.get(`https://swapi.dev/api/films/2`).then((res) => {
        const characters = res.data.characters;
      characters.forEach((character) => {
        axios.get(`${character}`).then((people) => {
          const name = people.data.name;
          const birth = people.data.birth_year;
          const gender = people.data.gender;
          const characterImage = images.find((img) => img.name == name);
  
          result.insertAdjacentHTML(
            "beforeend",
            `<div class="characters__item">
              <h2 class="characters__item-name">${name}</h2> 
              <div class="characters__item-birth">${birth}</div> 
              <div class="characters__item-gender">${gender}</div>   
              <img class="characters__item-img" src=${characterImage.image}>
              </div>`
          );
        });
      });
    });
       }catch(err){
        alert("Ошибка!");
       }
    
  });
  
  function clean() {
    if (result !== null) {
      result.innerHTML = "";
    }
  }
  
  function showPlanets(n) 
  {
    clean();
    try 
    {
      axios.get(`https://swapi.dev/api/planets/?page=${n}`).then((res) => 
      {      
        const planets = res.data.results;
        console.log(planets);
        planets.forEach((planet) => 
        {
          result.insertAdjacentHTML(
            "beforeend",
            `<div class="planets__item">
          ${planet.name}</div>`);
          console.log(planet.name);
        });
      }); 
    }
    catch (err) {
        alert("Ошибка!");   
    }
  }
  
  const nextPlanetsButton = document.querySelector("#next-planets-button");
  
  const showPlanetsButton = document.querySelector("#show-planets-button");
  showPlanetsButton.addEventListener("click", () => {
    showPlanets(1);
    nextPlanetsButton.style.display = "block";
  });
  
  let filmNumber = 1;
  nextPlanetsButton.addEventListener("click", () => {
    filmNumber = filmNumber + 1;
  
    if (filmNumber > 6) nextPlanetsButton.style.display = "none";
    console.log(filmNumber);
    showPlanets(filmNumber);
  });