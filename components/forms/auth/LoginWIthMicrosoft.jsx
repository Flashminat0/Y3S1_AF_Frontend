import React, {useEffect, useState} from 'react';
import {OAuthProvider, getAuth, signInWithPopup, signOut} from "firebase/auth";
import axios from "axios";


const LoginWIthMicrosoft = () => {
    const [profileData, setProfileData] = useState({});


    // set up the provider for the login
    const provider = new OAuthProvider('microsoft.com');
    provider.setCustomParameters({
        // Force re-consent.
        prompt: 'consent',
        // Target specific email with login hint.
        login_hint: 'itxxxxxxxx@my.sliit.lk',
        tenant: '44e3cf94-19c9-4e32-96c3-14f5bf01391a'
    });
    provider.addScope('profile');

    //TODO Later
    // provider.addScope('mail.read');
    // provider.addScope('calendars.read');


    const auth = getAuth();

    // sign in with popup
    const signInWithMicrosoft = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // User is signed in.
                // IdP data available in result.additionalUserInfo.profile.

                // Get the OAuth access token and ID Token
                const credential = OAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                const idToken = credential.idToken;

                //try me/messages
                // Get the user's profile data from the Google API
                axios.get('https://graph.microsoft.com/v1.0/me', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }).then(response => {
                    return response.data;
                }).then(data => {
                    setProfileData(data);
                })

            })
            .catch((error) => {
                // Handle error.
            });
    }


    const getMicrosoftRedirectResult = () => {
        console.log(profileData);
    }

    const signOutFromMicrosoft = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        console.log(auth);
    }, [auth]);

    return (
        <div className={`grid place-content-center`}>
            <button className={`bg-blue-200 p-4`} onClick={signInWithMicrosoft}>
                Sign in with Microsoft
            </button>
            <button className={`bg-green-500 p-4`} onClick={getMicrosoftRedirectResult}>
                get details on login
            </button>
            <button className={`bg-red-500 p-4`} onClick={signOutFromMicrosoft}>
                logout
            </button>
        </div>
    );
};

export default LoginWIthMicrosoft;
