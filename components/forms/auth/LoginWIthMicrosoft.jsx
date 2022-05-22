import React, {useEffect, useState} from 'react';
import {OAuthProvider, getAuth, signInWithPopup, signOut} from "firebase/auth";
import axios from "axios";
import {useLocalStorage} from '@mantine/hooks';
import {Button} from "@mui/material";

const LoginWIthMicrosoft = () => {
    const [credentials, setCredentials] = useLocalStorage({
        key: 'y3s1-af-credentials',
        defaultValue: {}
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        if (Object.keys(credentials).length > 0) {
            setIsLoggedIn(true);
        }
    }, [credentials]);

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

    //auth object
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


                // Get the user's profile data from the Google API
                axios.get('https://graph.microsoft.com/v1.0/me', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }).then(response => {
                    return response.data;
                }).then(async data => {

                    // Save the user's profile data to the database
                    await axios.post('/api/register', {
                        name: data.displayName,
                        userId: data.id,
                    }).then(res => {
                        // Save the user's profile data to the local storage
                        setCredentials((x) => {
                            return {
                                ...credential,
                                _id: res.data.user._id,
                                steamToken: res.data.user.steamToken,
                                role: res.data.user.role,
                                userId: res.data.user.userId,
                            }
                        });
                    }).catch(err => {
                        console.log(err);
                    })
                })

            })
            .catch((error) => {
                // Handle error.
            });
    }

    const signOutWithMicrosoft = () => {
        signOut(auth).then(() => {
            setCredentials(prevState => {
            });
            setIsLoggedIn(false);
        })
    }

    const microsoftIcon =
        <svg className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 48 48" width="2.25rem" height="2.25rem">
            <path fill="#ff5722" d="M6 6H22V22H6z" transform="rotate(-180 14 14)"/>
            <path fill="#4caf50" d="M26 6H42V22H26z" transform="rotate(-180 34 14)"/>
            <path fill="#ffc107" d="M26 26H42V42H26z" transform="rotate(-180 34 34)"/>
            <path fill="#03a9f4" d="M6 26H22V42H6z" transform="rotate(-180 14 34)"/>
        </svg>;

    return (
        <div className={`grid place-content-center`}>
            {!isLoggedIn ?
                <Button
                    color={'secondary'} variant="outlined" onClick={signInWithMicrosoft}
                    startIcon={microsoftIcon}>
                    Sign in with Microsoft
                </Button>
                :
                <Button color={"primary"} variant="outlined"
                        onClick={signOutWithMicrosoft}>
                    Sign out
                </Button>
            }
        </div>
    );
};

export default LoginWIthMicrosoft;
