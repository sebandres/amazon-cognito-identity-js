'use strict';

var _CognitoUserPool = require('../lib/CognitoUserPool');

var _CognitoUserPool2 = _interopRequireDefault(_CognitoUserPool);

var _CognitoUserAttribute = require('../lib/CognitoUserAttribute');

var _CognitoUserAttribute2 = _interopRequireDefault(_CognitoUserAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('signUp', function () {
    return it('Should sign up a user', function (done) {
        var poolData = {
            UserPoolId: 'ap-southeast-2_V8Kpn8uJk', // Your user pool id here 
            ClientId: '745h3dau1h5tdbbkljn2a1mpn3' // Your client id here 
        };
        var userPool = new _CognitoUserPool2.default(poolData);

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
        var attributeEmail = new _CognitoUserAttribute2.default(dataEmail);
        // var attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);

        attributeList.push(attributeEmail);
        // attributeList.push(attributePhoneNumber);

        return new Promise(function (resolve, reject) {
            userPool.signUp('username', 'C&Credalert180', attributeList, null, function (err, result) {
                expect(err).toBeNull(err);
                if (err) {
                    reject(err);
                }
                console.log(err);
                console.log(result);
                var cognitoUser = result.user;
                console.log('user name is ' + cognitoUser.getUsername());
                done();
                //resolve(cognitoUser)
            });
        });
    });
});