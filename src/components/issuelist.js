import React, { useEffect, useState } from 'react';
import axios from 'axios';

function IssueList() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/repos/facebook/react/issues')
      .then((response) => {
        setIssues(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener iusses react:', error);
      });
  }, []);

  return (
    <div>
      <h1>React Issues</h1>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            <a href={`/issue/${issue.number}`}>{issue.title}</a>
            <p>Issue ID: {issue.id}</p>
            <p>Opened by: {issue.user.login}</p>
            {/* Label */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IssueList;
