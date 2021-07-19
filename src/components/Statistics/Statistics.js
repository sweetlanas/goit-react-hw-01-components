import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import randomiser from '../../helpers/colorRandomizer';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        {stats.map(({ label, percentage, id }) => {
          return (
            <li
              style={{ backgroundColor: randomiser() }}
              key={id}
              className={s.item}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
