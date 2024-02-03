import React from 'react';
import { Link } from 'react-router-dom';

import "./UsersItem.css"
import Avatar from '../../shared/components/UIElements/Avatar'
import Card from '../../shared/components/UIElements/Card'

const UsersItem = props => {
    return (
      <li className="user-item">
        <Card className="user-item__content users-page">
          <Link to={`/${props.id}/activities`}>
            <div className="user-item__image">
              <Avatar image={process.env.REACT_APP_ASSET_URL + `/${props.image}`} alt={props.name} />
            </div>
            <div className="user-item__info">
              <h2>{props.name}</h2>
              <h3>
                {props.count} {props.count === 1 ? 'Event' : 'Events'}
              </h3>
            </div>
          </Link>
        </Card>
      </li>

    )


};

export default UsersItem;