import React from 'react'
import useFetch from "../../hooks/useFetch";
import { Link, useParams } from "react-router-dom";

function Repo() {
  const { id } = useParams();
  const { data, loading, error } = useFetch();
  // const repoData = data.find((repoData)=> repoData.id === id)
  const repoData = data.filter((rep) => rep.name === id)[0];

  return (
    <div>
      <div className="details">
        <h1 className="titleSection">Repository Details.</h1>
        <h4 className="details-name">Name:{data}</h4>
        <p className="details-description">Description:{repoData?.description}</p>
        <p className="details-language">Most Used Language :{repoData?.language}</p>
        <p className="details-size"> Size:{repoData?.size}Kb</p>
        <p className="details-visibility">Visibility:{repoData?.visibility}</p>
        <p className="details-date">
          Repository was created at: {repoData?.created_at}
        </p>
      </div>
    </div>
  )
}

export default Repo
