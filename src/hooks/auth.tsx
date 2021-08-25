import React, 
{ 
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect
} from "react";
import * as Google from 'expo-google-app-auth';
import * as AuthSession from "expo-auth-session"

// import { api } from "../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_USERS } from '../configs/database'

export type User = {
    id: string;
    userame: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;
}

type AuthContextData = {
    user: User;
    loading: boolean;
    signIn: () => Promise<void>;
}

type AuthProviderProps = {
    children: ReactNode;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token?: string;
        error?: string;
    }
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [ user, setUser ] = useState<User>({} as User);
    const [ loading, setLoading ] = useState(false);

    async function signIn() {
        try {
            setLoading(true);

            const result = await Google.logInAsync({
                androidClientId: '768959155777-u3r4fnov736q79b302kiva8mgr6chl70.apps.googleusercontent.com',
                // iosClientId: YOUR_CLIENT_ID_HERE, ToDo Implementar autenticador do IOS
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {

                const user = {
                    id: result.user.id ? result.user.id : '',
                    userame: result.user.name ? result.user.name : '',
                    firstName: result.user.givenName ? result.user.givenName : '',
                    avatar: result.user.photoUrl ? result.user.photoUrl : '',
                    email: result.user.email ? result.user.email : '',
                    token: result.accessToken ? result.accessToken : ''
                }
                
                await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(result));
                
                setUser(user);
                
                setLoading(false);
                
            } else {
                setLoading(false);
            }
        } catch {
            throw new Error('Não foi possivel autenticar');
        }
    }

    async function loadUserStorageData() {
        const storage = await AsyncStorage.getItem(COLLECTION_USERS);

        if (storage) {
            const userLogged = JSON.parse(storage).user as User;
            // api.defaults.headers.authorization = `Bearer ${userLogged.accessToken}`

            setUser(userLogged);

            setLoading(false);
        }
    }

    useEffect(() => {
        loadUserStorageData();
    },[]);

    return (
        <AuthContext.Provider value={{ user, loading, signIn }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export {
    AuthProvider,
    useAuth
}