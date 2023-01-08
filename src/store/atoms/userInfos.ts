import { atom } from "jotai";
import { CognitoUser } from "amazon-cognito-identity-js";

// user informations atom
const userInfos = atom({
    id: '',
    name: '',
    email: '',
    avatar: '',
    token: '',
});

const cognitoUserAtom = atom<CognitoUser | null>(null);

const userLoggedIn = atom(false);

export { userInfos, userLoggedIn, cognitoUserAtom };