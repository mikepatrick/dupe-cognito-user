**Duplicate Users in Cognito User Pool**

We have a user pool configured to allow login using email only.  If we accidentally call `Auth.signUp()` twice in rapid succession for a single registration, we end up with two users in the user pool who have the same email.  This is an invalid state for such a user pool.

To reproduce using NodeJS script:

 - Clone this repo.
 - Run `yarn install` to pull in `aws-amplify`.
 - Run `node createUsers.js`.

To reproduce in running in a browser:
 - Clone this repo.
 - Run `yarn install` in the `frontend` folder.
 - Start a web server in this folder.  For example, `python -m SimpleHTTPServer 9000` to serve on port 9000.
 - Visit http://localhost:9000/index.html, provide a username and password, and sign up.

**Observations**

When my front end code accidentally calls `Auth.signUp()` twice I do get an appropriate error response from the second call:

`{ code: 'InvalidParameterException',
  name: 'InvalidParameterException',
  message: 'Alias entry already exists for a different username' }`

but, the user is created nevertheless.
