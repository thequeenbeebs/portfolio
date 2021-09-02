export default function Portfolio() {
    return (
        <main id="portfolio">
            <h2 className="orange-background">Portfolio</h2>

            <iframe title="Harris County Vaccine Hub" src="https://www.youtube.com/embed/hhK7M_CAPAU" width="560" height="315"></iframe>
            <h3><u>Harris County Vaccine Hub</u></h3>
            <a target="_blank" rel="noreferrer" href="https://github.com/thequeenbeebs/vaccine-frontend">GitHub</a>
            <a target="_blank" rel="noreferrer" href="https://vaccine-hub.herokuapp.com/">Application</a>
            <p>Application that helps Harris County residents register for COVID-19 vaccination appointments.</p>
            <ul>
                <li>Implemented MapBox API to create a custom map of vaccination centers</li>
                <li>Created user interface by employing React as well as Material-UI for styling</li>
                <li>Joined the front end with a Ruby, Rails, and ActiveRecord back end</li>
                <li>Authenticated users at login and registration using JWT and Bcrypt</li>
            </ul>
            
            <iframe title="Cher's Closet" src="https://www.youtube.com/embed/ElgmpxjV0B0" width="560" height="315"></iframe>
            <h3><u>Cher's Closet</u></h3>
            <a target="_blank" rel="noreferrer" href="https://github.com/thequeenbeebs/chers-closet">GitHub</a>
            <p>A fun take on the movie “Clueless” that organizes a user’s clothing and helps them create outfits.</p>
            <ul>
                <li>Programmed SPA functionality with JavaScript on the front end</li>
                <li>Organized user data with custom CSS and HTML</li>
                <li>Updated the SQLite database with Ruby on Rails on the back end</li>
            </ul>
        </main>
      
  
      
    );
  }