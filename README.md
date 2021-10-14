# PostsAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# TODO:

- [x] Project created using Angular CLI
- [x] Delete the contents inside the HTML of the App component and edit it so that it says "Hello World" with the h3 tag
- [x] List all posts from the given API
- [ ] In the same application, create a PostComponent using Angular CLI
- [ ] Configure the initialization of the component on the route /posts. Leave PostComponent to use the default HTML template
- [ ] Create a method that calls an HTTP request to https://jsonplaceholder.typicode.com/ API, endpoint /posts using Angular Service (service needs to be shared)
- [ ] Instead of the default HTML template list and show all posts returned from the service call. Attributes that need to be shown are "title" and "body". View can be done by choice (using tables or lists)
- [ ] Create a form that adds a new post
- [ ] Form should include controls for "title" and "body" (make the form as a seperate component) and a submit button
- [ ] Use Form validation using built-in Angular validators
- [ ] The submit button needs to be disabled if the form is invalid
- [ ] Create a method in the service that adds a new post. Check the docs for making an API call.
- [ ] Evaluate API response errors and display them
- [ ] Create a page for displaying comments for the clicked post
- [ ] Create a component called CommentsComponent, NOT using the Angular CLI, for displaying all comments for a single post
- [ ] The route for instantiating this component would be /comments/post/{postId}, where postId should be inserted into the route
- [ ] (BONUS) Add a form for a new comment for the post