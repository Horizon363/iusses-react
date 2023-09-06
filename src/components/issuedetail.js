import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function IssueDetail() {
  const { id } = useParams();
  const [issue, setIssue] = useState(null);

  useEffect(() => {
    axios.get(`https://api.github.com/repos/facebook/react/issues/${id}`)
      .then((response) => {
        setIssue(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener iusses react:', error);
      });
  }, [id]);

  if (!issue) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{issue.title}</h2>
      <p>Issue ID: {issue.id}</p>
      <p>Opened by: {issue.user.login}</p>
      {/* Label -*/}
      <a href={issue.html_url} target="_blank" rel="noopener noreferrer">Revisalo</a>
    </div>
  );
}

export default IssueDetail;
