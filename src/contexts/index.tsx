import { AuthContextProvider } from "./AuthContext";

interface ProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}

export * from "./AuthContext";
