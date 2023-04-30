import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from './getRandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && (<h2 className={css.title}>{title}</h2>)}
      <ul className={css.statList}>
        {stats.map(stats => (
          <li
            key={stats.id}
            className={css.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}> {stats.label}</span>
            <span className="percentage"> {stats.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
