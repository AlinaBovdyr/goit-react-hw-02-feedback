import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul>
      <li className={s.item}>Good: {good}</li>
      <li className={s.item}>Neutral: {neutral}</li>
      <li className={s.item}>Bad: {bad}</li>
      <li className={s.item}>Total: {total}</li>
      <li
        className={s.item}
        style={{ color: positivePercentage >= 50 ? '#19bb19bf' : '#f94b4b' }}
      >
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
