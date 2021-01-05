import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ onBtnClick }) {
  return (
    <div>
      <button
        className={s.button}
        type="button"
        name="good"
        onClick={onBtnClick}
      >
        Good
      </button>
      <button
        className={s.button}
        type="button"
        name="neutral"
        onClick={onBtnClick}
      >
        Neutral
      </button>
      <button
        className={s.button}
        type="button"
        name="bad"
        onClick={onBtnClick}
      >
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onBtnClick: PropTypes.func,
};

export default FeedbackOptions;
