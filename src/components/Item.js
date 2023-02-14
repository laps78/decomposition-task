import PropTypes from 'prop-types';

function Item({ type, iconUrl, textContent, link }) {
  return (
    <div className={`item-${type}`}>
      <a href={link}>
        <img
          className={`img-icon-${type}`}
          src={iconUrl}
          alt={textContent}
          title={textContent}
        />
      </a>
      <a href={link}className={`link-item-${type}`}>{ textContent }</a>
    </div>
  );
}

Item.propTypes = {
  type: PropTypes.string.isRequired,
  iconUrl: PropTypes.string,
  textContent: PropTypes.string,
  link: PropTypes.string,
}

Item.defaultProps = {
  type: 'simple',
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/3658/3658773.png',
  textContent: 'A Kind Of Simple Item',
  link: 'https://laps78.github.io',
}

export default Item;
