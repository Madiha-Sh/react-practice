import { LoginContext } from '../loginContext';
import { DataContext } from '../dataContext';
import { useContext } from 'react';

const Data = () => {
  const {isLogin} = useContext(LoginContext);
  const {data, setData} = useContext(DataContext);
  return (
    <div>
      {isLogin ? setData('show-content') : setData('')}
      <h2>{data}</h2>
    </div>
  );
}

export default Data;