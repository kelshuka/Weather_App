
const loca = document.querySelector('.locaTions');
const country = document.getElementById('country');
const naMe = document.getElementById('name');
const ce = document.getElementById('ce');
//const Fa = document.getElementById('Fa');
const condition = document.getElementById('condition');
const tiM = document.querySelector('span.tiM');
const img = document.querySelector('img');
const butts = document.querySelector('button');

fetch('https://api.weatherapi.com/v1/current.json?key=d06df2682f2e4645b99195359241405&q=london',
    {mode: 'cors'})
    .then(function(response) {
        //console.log(response.json());
        return response.json();
    })
    .then(function(response) {
        
        country.innerText = response.location.country;
        naMe.innerText = response.location.name;
        tiM.innerText = response.location.localtime;

        
        condition.innerText = response.current.condition.text;

        const resIcon = response.current.condition.icon;
        const te = "https:" + resIcon;
        img.src = te;

        ce.innerText = response.current.temp_c;
        //Fa.innerText = response.current.temp_f;

        ce.style.display = 'block';

        butts.addEventListener("click", () => {
            if (ce.innerText == response.current.temp_c) {
                ce.innerText = response.current.temp_f
            } else {
                ce.innerText = response.current.temp_c;
            }
        });
        
    }).catch(alert);

    const ser = document.getElementById('search');

    ser.addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {

            fetch(`https://api.weatherapi.com/v1/current.json?key=d06df2682f2e4645b99195359241405&q=${event.target.value}`,
            {mode: 'cors'})
            .then(function(response) {
                //console.log(response.json());
                return response.json();
            })
            .then(function(response) {
                
                country.innerText = response.location.country;
                naMe.innerText = response.location.name;
                tiM.innerText = response.location.localtime;

                
                condition.innerText = response.current.condition.text;

                const resIcon = response.current.condition.icon;
                const te = "https:" + resIcon;
                img.src = te;

                

                butts.addEventListener("click", () => {
                    ce.innerText = response.current.temp_c;
                    
                    if (ce.innerText == response.current.temp_c) {
                        ce.innerText = response.current.temp_f
                    } else {
                        ce.innerText = response.current.temp_c;
                    }
                });
                
            }).catch(alert);

        }

    });
    
