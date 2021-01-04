import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions() {
  return (
    <div>
      <button className={s.button} type="button">
        Good
      </button>
      <button className={s.button} type="button">
        Neutral
      </button>
      <button className={s.button} type="button">
        Bad
      </button>
    </div>
  );
}

// FeedbackOptions.propTypes = {
//
// };

export default FeedbackOptions;
