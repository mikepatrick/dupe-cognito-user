const Amplify = require('aws-amplify').default;
const Auth = require('aws-amplify').Auth;
global['fetch'] = require('node-fetch');

Amplify.configure({
    Auth: {
        identityPoolId: '<IDENTITY_POOL_ID>',
        region: 'us-east-1',
        userPoolId: '<USER_POOL_ID>',
        userPoolWebClientId: '<APP_CLIENT_ID>',
        mandatorySignIn: true
    }
});

let promises = [];

promises.push(Auth.signUp({username: 'a@b.net', password: 'Password1!'}));
promises.push(Auth.signUp({username: 'a@b.net', password: 'Password1!'}));

Promise.all(promises).then(resovled => {
    console.log('resolved: ', resovled);
}).catch(rejected => {
    console.log('rejected: ', rejected);
});