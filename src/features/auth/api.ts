import type { UserCredential } from 'firebase/auth';
import {
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
} from 'firebase/auth';

import { auth } from './firebase';

export function loginWithEmail(email: string, password: string) {
	return signInWithEmailAndPassword(auth, email, password);
}

export function loginWithGoogle(): Promise<UserCredential> {
	return signInWithPopup(auth, new GoogleAuthProvider());
}
