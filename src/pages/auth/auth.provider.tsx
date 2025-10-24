import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import { auth } from "./auth.firebase";
import type { AuthProvider } from "firebase/auth";

let google   = new GoogleAuthProvider();
let github   = new GithubAuthProvider();
let facebook = new FacebookAuthProvider();
let twitter  = new TwitterAuthProvider();


export function provider(type: string) {
    switch (type) {
        case "google"  : return user(google);
        case "github"  : return user(github);
        case "facebook": return user(facebook);
        case "twitter" : return user(twitter);
        default        : throw new Error("Unknown provider");
    }
}

async function user(provider: AuthProvider) {
    try {
        return (await signInWithPopup(auth, provider)).user;
    } catch (error) {
        console.error("Error during social authentication:", error);
    }
}