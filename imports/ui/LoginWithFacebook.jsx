import React from 'react';
import { Meteor } from 'meteor/meteor';


export const LoginWitFacebook = () => {
  const handleFacebookLogin = () => {
    Meteor.loginWithFacebook({requestPermissions: ['public_profile', 'email']}, function(err){
        if (err) {
            console.log('Handle errors here: ', err);
        }
    });
  };

  return (
    <button type="button" className="github-btn" onClick={handleFacebookLogin}>
      Login with Facebook
      <div>
        <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png"/>
      </div>
    </button>
  );
};