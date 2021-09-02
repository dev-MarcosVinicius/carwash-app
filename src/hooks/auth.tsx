import React, 
{ 
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect
} from "react";
import { logInAsync } from 'expo-google-app-auth';
import { AuthSessionResult } from "expo-auth-session"

// import { api } from "../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_USERS } from '../configs/database'
import { androidClientId, androidStandaloneAppClientId } from "../configs/environment";

export type User = {
    id: string;
    givenName: string;
    familyName: string;
    name: string;
    email: string;
    token: string;
    photoUrl: string;
}

type AuthContextData = {
    user: User;
    loading: boolean;
    signIn: () => Promise<void>;
}

type AuthProviderProps = {
    children: ReactNode;
}

type AuthorizationResponse = AuthSessionResult & {
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

            const result = await logInAsync({
                androidClientId: androidClientId,
                androidStandaloneAppClientId: androidClientId,
                // iosClientId: YOUR_CLIENT_ID_HERE, ToDo Implementar autenticador do IOS
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {

                const user = {
                    id: result.user.id ? result.user.id : '',
                    name: result.user.name ? result.user.name : '',
                    givenName: result.user.givenName ? result.user.givenName : '',
                    familyName: result.user.familyName ? result.user.familyName : '',
                    photoUrl: result.user.photoUrl ? result.user.photoUrl : '',
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