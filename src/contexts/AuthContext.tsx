import { createContext, useState, useEffect } from "react";

import { auth, firebase } from "../services/firebase";

type AuthContextType = {
  user: UserProps | undefined;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

type AuthContextProviderType = {
  children: React.ReactNode;
};

export type UserProps = {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
};

export type AuthUserProps = {
  displayName: string;
  photoURL: string;
  uid: string;
};

export function AuthContextProvider({ children }: AuthContextProviderType) {
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        setUser({
          displayName,
          photoURL,
          uid,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      setUser({
        displayName,
        photoURL,
        uid,
      });
    }
  }

  async function signOut() {
    await auth.signOut();
    setUser(undefined);
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
