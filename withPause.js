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

const signMeUp = () => {
    Auth.signUp({username: 'a@b.net', password: 'Password1!'})
    .then((user) => {
        console.log('success: ', user.userSub);
    })
    .catch((err) => {
        console.log('error: ', err.message);
    });
}

signMeUp();
setTimeout(signMeUp, 1000);