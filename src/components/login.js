import { LoginContext } from '../loginContext';
import { useContext } from 'react';

const Login = () => {
  const {isLogin, setIsLogin} = useContext(LoginContext);
  return (
    <div>
      <h2>
        {!isLogin ? 'Please login to continue' : 'Wanna Log out ?'}
      </h2>
      <button onClick={() => setIsLogin(!isLogin)}>
      {!isLogin ? 'login' : 'logout'}</button>
    </div>
  );
}

export default Login;