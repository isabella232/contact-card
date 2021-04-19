import classes from './App.module.scss';
import Layout from '../components/Layout/Layout';
import Card from './Card/Card';

function App() {
  return (
    <Layout>
      <Card /> 
      <div className={classes.AppIntro}>Click or tap to flip card</div>
    </Layout>
  );
}

export default App;
