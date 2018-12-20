
# AngularTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Description of the task
* If the user is not logged in, he can only be on page where there is only a login form, if he the logged in, login page is not available.
* The login form must contain validation:
    - all fields are required
    - valid email
    - password length from 6 to 24 characters
*  After login user gets to the home page and in a header appear the data of his (data which imitating the respons after the login are in /core/serviсes/auth.service)
    - On the home page, show any static text
* On the users page
    - Show a list of users sorted by birthday (1 = eldest) (an array of users is in /core/serviсes/users.service)
    - add functionality to the buttons in the table (Edit & Delete)
    - the create button will show the shape and allow you to add a new user
    - the cancel button hides and clears the form
* By clicking on the name of the user we get to the page with his detailed information
    - The edit button allows you to edit the data
* The Logout button is redirected to the page with the login form in name
* Html is attached below
* You are free to do anything, do not focus on HTML and CSS

### ******* Login form *******
```sh
<form class="login-form">
  <h2>Login</h2>
  <div class="form-group">
    <input type="email" class="form-control" placeholder="Enter email">
  </div>
  <div class="form-group">
    <input type="password" class="form-control" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

### ******* User create/edit form *******
```sh
<form class="user-form">
  <H2>Add/edit user</H2>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="First name">
  </div>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Last name">
  </div>
  <div class="form-group">
    <input type="date" class="form-control" placeholder="Birth day">
  </div>
  <div class="form-group">
    <textarea type="text" class="form-control" placeholder="Description"></textarea>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="maleCheck">
      <label class="form-check-label" for="maleCheck">
        Is male
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Create / Edit</button>
  <button type="submit" class="btn btn-dark">Cancel</button>
</form>
```

### ******* List of users *******
```sh
<div class="custom-row">
  <button type="button" class="btn btn-success">Add new user</button>
</div>

<table class="table">
  <thead>
  <tr>
    <th>Birth day</th>
    <th>Name</th>
    <th>Actions</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <th>12 aug, 1990</th>
    <td><a href=""></a>Mark Otto</td>
    <td>
      <button type="button" class="btn btn-secondary">Edit</button>
      <button type="button" class="btn btn-danger">Delete</button>
    </td>
  </tr>
  </tbody>
</table>
```

### ******* User's info *******
```sh
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Full name</h5>
    <p class="card-text">Birth day</p>
    <p class="card-text">Male / female</p>
    <p class="card-text">Description</p>
    <button type="button" class="btn btn-secondary">Edit</button>
  </div>
</div>
```
