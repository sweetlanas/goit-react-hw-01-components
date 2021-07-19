import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const stat = isOnline ? 'status-online' : 'status-offline';
  return (
    <li className={s.item}>
      <span className={s[stat]}></span>
      <img className={s.avatar} src={avatar} alt={name} width="60" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.protoType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
