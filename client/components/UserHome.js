import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './scss/User.scss';

const UserHome = props => {
  const { firstName, email, upvotedLinks } = props;

  return (
    <div>
      {
        firstName ?
          <h3 className='user'>Welcome, { firstName }!</h3> :
          email ?
            <h3 className='user'>Welcome, { email }!</h3> :
            <h3 className='user'>Welcome!</h3>
      }
      <h4 className='user'>Below are links you have previously found helpful:</h4>
      <ul>
      {
        upvotedLinks && upvotedLinks.map(l => {
          return <li key={ l.id } className='userLink'><a href={l.link}>{l.link} <span></span></a></li>
        })
      }
      </ul>
    </div>
  );
};

const mapState = ({ user, link }) => ({
  firstName: user.firstName,
  email: user.email,
  upvotedLinks: link.upvotedLinks,
});

export default connect(mapState)(UserHome);

UserHome.propTypes = {
  email: PropTypes.string
};
