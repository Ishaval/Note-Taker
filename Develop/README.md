# Note Taker

## Description

Note Taker is an application that allows users to write and save notes. The application uses an Express.js back end and stores and retrieves note data from a JSON file.

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```


## Content Table

-[Instalation](#instalation)

-[Usage](#usage)

-[API Routes](#API-Routes)

-[Deployment](#deployment)

-[Credits](#credits)

-[License](#license)


## Instalation

To install Note Taker, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install`.


## Usage

To use Note Taker, run the following command:
`node server.js`

Then open your web browser and go to `http://localhost:3001` to access the application.



## API Routes

Note Taker includes the following API routes:

*`GET /api/notes`: Reads the db.json file and returns all saved notes as JSON.

*`POST /api/notes`: Receives a new note to save on the request body, adds it to the `db.json` file, and then returns the new note to the client.

*`DELETE /api/notes/`:id: Receives a query parameter that contains the ID of a note to delete, reads all notes from the db.json file, removes the note with the given ID property, and then rewrites the notes to the `db.json` file.


## Deployment

Note Taker can be deployed to Heroku by following these steps:

1. Create a new Heroku app.
2. Connect the app to your GitHub repository.
3. Deploy the app to Heroku using the Heroku CLI or by enabling automatic deploys. 


## Credits

This application was created with the help of the following resources:

[Express.js](https://www.npmjs.com/package/express)

[Heroku](https://devcenter.heroku.com/categories/reference)


## License
This project is not under licensed.
