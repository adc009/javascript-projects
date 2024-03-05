//TODO: Add Your Code Below
window.addEventListener("load", function() {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const container = document.getElementById("container");
            const count = document.getElementById("count");
            let counter = 0;
            json.sort(function(a,b) {return (a.hoursInSpace < b.hoursInSpace) ? 1 : ((b.hoursInSpace < a.hoursInSpace) ? -1 : 0);} );
            for (astronaut of json) {
                let activeGreen = '';
                if (astronaut.active)
                    activeGreen += ' class = "active"' 
                else
                    activeGreen += ' class = "inactive"'
                container.innerHTML += `
                <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                    <li>Hours in space: ${astronaut.hoursInSpace}</li>
                    <li${activeGreen}>Active: ${astronaut.active}</li>
                    <li>Skills: ${astronaut.skills.join(', ')}</li>
                    </ul>
                </div>
                <img class="avatar" src=${astronaut.picture}>
            </div>
                `;

            counter++;
            }
        
        count.innerHTML += counter;

        
        })
    });
});