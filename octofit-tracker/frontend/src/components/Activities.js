import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Activities endpoint:', endpoint);
        console.log('Fetched activities:', results);
      });
  }, [endpoint]);

  return (
    <div>
      <h2 className="h4 mb-3">Activities</h2>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Activity</th>
            <th>Duration (min)</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((a, i) => (
            <tr key={a.id || i}>
              <td>{i + 1}</td>
              <td>{a.user?.username || a.user || ''}</td>
              <td>{a.type}</td>
              <td>{a.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Activities;
