import { React, useState, useEffect } from 'react'
import useFetch from "../../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import Loading from "../../compunents/loader/Loader"
import ErrorBoundary from "../../compunents/errorboundary/ErrorBoundary"
import "./repo.scss"

function Repo() {
  const { id } = useParams();
  const { loading, error } = useFetch();
  // // const repoData = data.find((repoData)=> repoData.id === id)
  // const repoData = data.filter((rep) => rep.name === id)[0];
  // console.log(id)


  const [repoData, setRepoData] = useState([]);
  // Fetching Profile Data
  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const api = await fetch(`https://api.github.com/repos/Bola22/${id}`, {
      method: "get",
    });
    const data = await api.json();
    setRepoData(data);
    console.log(api)
  };

  
  if (loading) {
    return <Loading />;
  }

  return (
    <div className='repo'>
      {error && <ErrorBoundary err={error} />}
    {!error && (
      <div className="details">
      <h1 className="titleSection"> Repository Details.</h1>
      <h4 className="details-name">Name: {id}</h4>
      <p className="details-description"><strong>Description: </strong>{repoData?.description == null ? "Description Not Available": repoData?.description}</p>
      <p className="details-language"><strong>Most Used Language: </strong>{repoData?.language == null ? "Language Not Available": repoData?.language}</p>
      <p className="details-size"><strong> Size: </strong>{repoData?.size}Kb</p>
      <p className="details-visibility"><strong>Visibility: </strong>{repoData?.visibility}</p>
      <p className="details-date">
      <strong>Repository was created at: </strong>  {repoData?.created_at}
      </p>
    </div>
     )}
      
    </div>
    
  )
}

export default Repo
