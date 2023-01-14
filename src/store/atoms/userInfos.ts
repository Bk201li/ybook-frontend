import { atom } from "jotai";
import { CognitoUser } from "amazon-cognito-identity-js";

const userInfos = atom({
    id: '',
    email: '',
    firstname: '',
    lastname: '',
    avatar: '',
    token: '',
});

const cognitoUserAtom = atom<CognitoUser | null>(null);

const userLoggedIn = atom(false);

export { userInfos, userLoggedIn, cognitoUserAtom };