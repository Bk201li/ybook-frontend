import { atom } from "jotai";
import { CognitoUser } from "amazon-cognito-identity-js";

// user informations atom
const userInfos = atom({
    email: '',
    firstname: '',
    lastname: '',
});

const cognitoUserAtom = atom<CognitoUser | null>(null);

const userLoggedIn = atom(false);

export { userInfos, userLoggedIn, cognitoUserAtom };