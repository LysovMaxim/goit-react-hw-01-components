import css from "./FriendListItem.module.css"
import PropTypes from 'prop-types';

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <li className={css.item}>
          <span className={`${css.status} ${css[isOnline]}`}>
            {isOnline}
          </span>
          <img
            className="avatar"
            src={avatar}
            alt={name}
            width="48"
          />
          <p className="name">{name}</p>
        </li>)
}

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}