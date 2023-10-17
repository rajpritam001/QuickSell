import React from 'react';
import Card from '../Box/Box'; // Updated import path
import './whole.css'; // Import the CSS file with the updated name

const CustomKanbanBoard = ({ tickets, users, groupBy, sortOption }) => {
  // Grouping Logic
  const groupedData = groupBy === 'status'
    ? groupByStatus(tickets)
    : groupBy === 'user'
    ? groupByUser(tickets, users)
    : groupByPriority(tickets);

  // Sorting Logic
  const sortedData = sortOption === 'title'
    ? sortAlphabetically(groupedData)
    : sortOption === 'priority'
    ? sortByPriority(groupedData)
    : groupedData;

    return (
      <div className="custom-kanban-board">
        {sortedData.map((ticketGroup) => (
          <div key={ticketGroup.groupKey} className="custom-kanban-group-container">
            <h2 style={{ marginLeft: "10px" }}>{ticketGroup.groupTitle}</h2>
            <div className="custom-kanban-cards">
              {ticketGroup.tickets.map((ticket) => (
                <Card key={ticket.id} ticket={ticket} head={groupBy} user={users.find((user) => user.id === ticket.userId)} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };


const groupByStatus = (tickets) => {
  const grouped = {};
  tickets.forEach((ticket) => {
    if (!grouped[ticket.status]) {
      grouped[ticket.status] = [];
    }
    grouped[ticket.status].push(ticket);
  });
  return Object.keys(grouped).map((status) => ({
    groupKey: status,
    groupTitle: status,
    tickets: grouped[status],
  }));
};

const groupByUser = (tickets, users) => {
  const grouped = {};
  tickets.forEach((ticket) => {
    const user = users.find((u) => u.id === ticket.userId);
    if (!user) return; // Handle unknown users
    if (!grouped[user.name]) {
      grouped[user.name] = [];
    }
    grouped[user.name].push(ticket);
  });
  return Object.keys(grouped).map((userName) => ({
    groupKey: userName,
    groupTitle: userName,
    tickets: grouped[userName],
  }));
};

const groupByPriority = (tickets) => {
  const grouped = {};
  tickets.forEach((ticket) => {
    if (!grouped[ticket.priority]) {
      grouped[ticket.priority] = [];
    }
    grouped[ticket.priority].push(ticket);
  });
  return Object.keys(grouped).map((priority) => ({
    groupKey: priority,
    groupTitle: `Priority ${priority}`,
    tickets: grouped[priority],
  }));
};

const sortAlphabetically = (groups) => {
  return [...groups].sort((a, b) => a.groupTitle.localeCompare(b.groupTitle));
};

const sortByPriority = (groups) => {
  return [...groups].sort((a, b) => b.groupKey - a.groupKey);
};

export default CustomKanbanBoard;
