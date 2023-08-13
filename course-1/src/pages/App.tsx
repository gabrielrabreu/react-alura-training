import MyForm from '../components/MyForm';
import MyList from '../components/MyList';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <MyForm />
      <MyList />
    </div>
  );
}

export default App;
