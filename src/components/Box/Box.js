import React from 'react';
import { useState } from 'react';
import './box.css';

function getRandomBackgroundColor() {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  return randomColor;
}

const randomBackground = getRandomBackgroundColor();

const Card = ({ ticket, user, head }) => {
  const userInitials = user ? user.name.slice(0, 2).toUpperCase() : 'UU';

  if (head === 'status') {
    return (
      <div className="custom-card">
        <div id="custom-card-id-user">
          <div className="custom-card-id">{ticket.id}</div>
          <div className="custom-user-initials-circle" id="custom-user-circle" style={{ background: randomBackground, borderRadius: 50 }}>
            {userInitials}
          </div>
        </div>
        <div className="custom-card-title">{ticket.title}</div>
        <div style={{ display: "flex" }}>
          <div id="custom-card-tag-priority">
            <div className="custom-card-tag">
              <div className="custom-card-tag-box-priority">
                {ticket.priority}
              </div>
            </div>
          </div>
          <div id="custom-card-tag-tag">
            <div className="custom-card-tag">
              <div className="custom-card-tag-box-tag">
                <span className="custom-card-dot"></span>
                {ticket.tag}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (head === 'user') {
    return (
      <div className="custom-card">
        <div id="custom-card-id-user">
          <div className="custom-card-id">{ticket.id}</div>
        </div>
        <div className="custom-card-title">{ticket.title}</div>
        <div style={{ display: "flex" }}>
          <div id="custom-card-tag-tag">
            <div className="custom-card-tag">
              <div className="custom-card-tag-box-tag">
                <span className="custom-card-dot"></span>
                {ticket.tag}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="custom-card">
        <div id="custom-card-id-user">
          <div className="custom-card-id">{ticket.id}</div>
          <div className="custom-user-initials-circle" id="custom-user-circle" style={{ background: randomBackground, borderRadius: 50 }}>
            {userInitials}
          </div>
        </div>
        <div className="custom-card-title">{ticket.title}</div>
        <div id="custom-card-tag-tag">
          <div className="custom-card-tag">
            <div className="custom-card-tag-box-tag">
              <span className="custom-card-dot"></span>
              {ticket.tag}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;
