import { ID, User, UserLogin } from '~/types/user';
import { Token } from '~/types/token';
import jwt_decode from 'jwt-decode';

interface ResponseLogin {
  access_token: string;
  user: User;
}

interface JwtDecode {
  exp: number;
  iat: number;
  userId: ID;
}

export default () => {
  // create a new state to user and token
  const useStateToken = () => useState<Token>('auth_token');
  const useStateUser = () => useState<User>('auth_user');
  const useStateLoading = () => useState<boolean>('auth_loading', () => true);

  // set token state
  const setToken = (newToken: Token) => {
    const authToken = useStateToken();
    authToken.value = newToken;
  };

  // set user state
  const setUser = (newUser: User) => {
    const authUser = useStateUser();
    authUser.value = newUser;
  };

  // set loading state
  const setIsLoading = (value: boolean) => {
    const authLoading = useStateLoading();
    authLoading.value = value;
  };

  // login function
  const login = ({ username, password }: UserLogin) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch('/api/auth/login', {
          method: 'POST',
          body: { username, password },
        });

        const { access_token, user } = data as ResponseLogin;
        setToken(access_token);
        setUser(user);

        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  // refresh token function
  const refreshToken = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch('/api/auth/refresh');

        const { access_token } = data as any;
        setToken(access_token);

        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };
  // refresh time token function
  const reRefreshAccessToken = async () => {
    const authToken = useStateToken();

    if (!authToken.value) return;

    const jwt: JwtDecode = jwt_decode(authToken.value);

    // refreshing the token 1 minute before it expires
    let remainingTime = jwt.exp * 1000 - Date.now() - 60000;

    // if the token has expired, refresh it immediately
    setTimeout(async () => {
      await refreshToken();
      reRefreshAccessToken();
    }, remainingTime);
    
  };

  // get user with custom useFetchApi composable
  const getUser = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await useFetchApi('/api/auth/user');

        const { user } = data as any;

        setUser(user);

        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  // init auth set access token
  const initAuth = () => {
    return new Promise(async (resolve, reject) => {
      setIsLoading(true);
      try {
        await refreshToken();
        await getUser();

        reRefreshAccessToken();
        resolve(true);
      } catch (error) {
        reject(error);
      } finally {
        setIsLoading(false);
      }
    });
  };

  return {
    login,
    initAuth,
    useStateUser,
    useStateToken,
    useStateLoading,
  };
};
