import { React, useState, useEffect } from "react";
import Avatar from "../../images/avartar.png";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import useFetch from "../../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import Pagination from "../../compunents/Pagination";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import Loading from "../../compunents/loader/Loader";
import ErrorBoundary from "../../compunents/errorboundary/ErrorBoundary";

import "./home.scss";
function Home() {
  const { data, loading, error } = useFetch();
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);
  // const [ Pages ] = useState (Math.round(data.length/usersPerPage))
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUser = data.slice(indexOfFirstUser, indexOfLastUser);

  const paginated = (data) => {
    setCurrentPage(data);
  };
  const nextPage = () => {
    // if (currentPage === currentUser) return null;
    return setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const [profile, setProfile] = useState([]);
  // Fetching Profile Data
  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const api = await fetch("https://api.github.com/users/Bola22", {
      method: "get",
    });
    const data = await api.json();
    setProfile(data);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="home">
      {error && <ErrorBoundary err={error} />}
      {!error && (
        <div>
          <div className="navbar">
        <div className="left">
          <div className="logo">
            <span>Basit's Github</span>
          </div>
        </div>
      </div>
      <div className="intro">
        <div className="left">
          <img src={profile.avatar_url} alt="Avatar" className="avatar" />
        </div>
        <div className="right">
          <div className="userName">
          <h1>{profile.login}</h1>
          {/* <h2>{profile.name}</h2> */}
          </div>
          <p>{profile.bio}</p>
          <div className="btn-container">
            <PeopleOutlinedIcon />
            <h4 className="flw">followers {profile.followers}</h4>
            <h4 className="flw"> following {profile.following}</h4>
          </div>
          <ul className="socals">
            <li>
              <AddLocationAltOutlinedIcon /> <p>{profile.location}</p>
            </li>
            <li>
              <AlternateEmailOutlinedIcon /> <p>{profile.twitter_username}</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="project">
        <h1 className="titleSection">
          Repository List({profile.public_repos})
        </h1>
        <div className="project-tiles">
          {currentUser.map((item) => {
            return (
              <Link to={`/repo/${item.name}`} className="tile" key={item.id}>
                <h2>{item.name}</h2>
                <h3>{item.language == null
                    ? "Language Not Available"
                    : item.language}</h3>
                <p>
                  {item.description == null
                    ? "Description Not Available"
                    : item.description}
                </p>
                {/* <Link className="btn " to={`/repo/${item.name}`}>
                  View Repo
                </Link> */}
              </Link>
            );
          })}
        </div>

        <div className="pagination" style={{ display: "flex", gap: "1rem" }}>
          {" "}
          <button
            onClick={() => nextPage()}
            style={{
              display: "flex",
              padding: "10px 15px ",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "hsl(0, 0%, 22%)",
              color: "#ffff",
            }}
          >
            Prev
          </button>
          <Pagination
            usersPerPage={usersPerPage}
            pageNumber={paginated}
            paginated={paginated}
            data={currentUser}
            totalUsers={data.length}
          />
          <button
            onClick={() => prevPage()}
            style={{
              display: "flex",
              padding: "10px 15px ",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "hsl(0, 0%, 22%)",
              color: "#ffff",
            }}
          >
            Next
          </button>
        </div>
      </div>
        </div>
      )}
    </div>
  );
}

export default Home;
