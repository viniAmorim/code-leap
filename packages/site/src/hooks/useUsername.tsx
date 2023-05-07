import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
  } from "react";
  
  export interface IUsername {
    username: string;
  }
  
  interface UsernameProviderProps {
    children: ReactNode;
  }
  
  interface UsernameContextData {
    username: IUsername;
    createUsername: (username: IUsername) => void;
  }
  
  const UsernameContext = createContext<UsernameContextData>(
    {} as UsernameContextData
  );
  
  export function UsernameProvider({ children }: UsernameProviderProps) {
    const [username, setUsername] = useState<IUsername>();
  
    function createUsername(usernameInput: IUsername) {
      setUsername(usernameInput);
    }
  
    return (
      <UsernameContext.Provider value={{ username, createUsername }}>
        {children}
      </UsernameContext.Provider>
    );
  }
  
  export function useUsername() {
    const context = useContext(UsernameContext);
  
    return context;
  }
  