import CognitoUserPool from '../lib/CognitoUserPool';
import CognitoUserAttribute from '../lib/CognitoUserAttribute';

describe('signUp', () =>
    it('Should sign up a user', (done) => {
        var poolData = {
            UserPoolId: 'ap-southeast-2_V8Kpn8uJk', // Your user pool id here 
            ClientId: '745h3dau1h5tdbbkljn2a1mpn3' // Your client id here 
        };
        var userPool = new CognitoUserPool(poolData);

        var attributeList = [];

        var dataEmail = {
            Name: 'email',
            Value: 'email@mydomain.com'
        };
        /*
                var dataPhoneNumber = {
                    Name: 'phone_number',
                    Value: '+15555555555'
                };*/
        var attributeEmail = new CognitoUserAttribute(dataEmail);
        // var attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);

        attributeList.push(attributeEmail);
        // attributeList.push(attributePhoneNumber);

        return new Promise((resolve, reject) => {
            userPool.signUp('username', 'C&Credalert180', attributeList, null, function (err, result) {
                expect(err).toBeNull(err);
                if (err) {
                    reject(err);
                }
                console.log(err);
                console.log(result);
                let cognitoUser = result.user;
                console.log('user name is ' + cognitoUser.getUsername());
                done()
                //resolve(cognitoUser)
            })
        }
        )
    })
)