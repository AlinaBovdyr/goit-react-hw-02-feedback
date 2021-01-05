import s from './Statistics.module.css';

function Statistics({ children }) {
  return (
    <div>
      <h1 className={s.title}>Statistics</h1>
      {children}
    </div>
  );
}

export default Statistics;
