# Treasured Trails

Treasured Trails is a React Web Application focousing on hiking trails and user submitted visits to those trails. In the "All Trails" section of the app, users can find trail details, such as elevation gain and location. Users can currently add a new trail if there's one they wish to see listed. In "Hiking Visits," users can see visits submitted by them or other users. A new visit can be added, and if the user wishes, they can go back and edit a previously submitted summary or delete their visit. The home page has the ability to quikcly find a trail, and if the user clicks on their name in the top right, they can instantly go to their profile page.

## Installation

No API key required. 

* Fork and clone the Github [repository](https://github.com/pnw-henry/trail-finder) into a local machine.
* Navigate to the directory created by using Finder (Mac), Explorer (Windows) or a command line interface:
	On Mac, open the terminal app, cd into the trail-finder directory, type bundle install to install the require dependecies. Then type rails s to start the development server. Finally navigate to the client directory and type npm start to start the react frontend. 
	

## Usage

Treasured Trails is divided into four sections: Home, All Trails, Hiking Visits and user profile.

Home contains a simple search. Type the name of a trail to see if it exists in the database. If it exists, click on it to see relevant information. All Trails has a list of all trails currently found in the database. If you have logged in, you'll see a button to add a new trail. Make sure all information is accurate! Hiking Visits has a list of all user submitted visits. If logged in, you'll also have the ability to add a new visit or edit/delete a previous visit. Click Login in the top right will take you to a login page with username and password fields. Enter them if you have an account or click sign up to create a new one. You can then click your name to see your profile page. 

## Roadmap

* Implement the ability to sort results.
* Update the Home page to be more visually pleasing and interactive.
* Add more detailed trail information, such as trail summary.
* Implement the ability to add images to trails and visits.

## Contributing

Pulls requests are welcome.

## License

GPL-3.0
