import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const ProfileCard = () => {
  const [user, setUser] = useState({});
  const [searchUser, setSearchUser] = useState("MTechZilla");

  let url = `https://api.github.com/users/${searchUser}`;


  const getUserData = async () => {
    let response = await fetch(url);
    let { avatar_url, created_at, login, name, public_gists, public_repos } =
      await response.json()
    let newUser = {
      img: avatar_url,
      created: created_at,
      userName: login,
      displayName: name,
      publicGists: public_gists,
      publicRepos: public_repos,
    };
    if (newUser) {
      setUser(newUser);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUserData();
  };

  const convertDate = (date) => {
    const createdDate = new Date(date);
    const day = String(createdDate.getDate()).padStart(2, 0);
    const month = String(createdDate.getMonth() + 1).padStart(2, 0);
    const year = createdDate.getFullYear();
    return `${year}/${month}/${day}`;
  };

  console.log(user);

  return (
    <Container className="py-5">
      <div className="col-md-7 mx-auto mb-5 p-5">
        <form className="input-group" onSubmit={handleSubmit}>
          <input
            type="search"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value)}
          />
          <button type="submit" className="btn btn-outline-primary btn-lg px-5">
            SEARCH
          </button>
        </form>
      </div>
      <div
        className="card col col-xl-4 col-md-5 col-sm-8 mx-auto "
        style={{ borderRadius: "15px" }}
      >
        <div className="card-body text-center">
          <div className="mt-3 mb-4">
            <img
              src={
                user.img ||
                "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
              }
              className="rounded-circle img-fluid"
              style={{ width: "200px" }}
            />
          </div>
          <h1 className="mb-2">{user.displayName || "Name"}</h1>
          <p className="text-muted mb-4">@{user.userName || "userName"}</p>

          <hr />

          <div className="row">
            <div className="col-6">
              <p>{user.publicGists==0?'0':user.publicGists}</p>
              <h4>Public Gists</h4>
            </div>
            <div className="col-6">
              <p>{user.publicRepos==0?'0':user.publicRepos}</p>
              <h4>Public Repos</h4>
            </div>
          </div>
        </div>
        <div className="card-footer text-center p-4">
          <strong className="text-secondary">Created At:</strong>{" "}
          {(user.created && convertDate(user.created)) || "DD-MM-YYYY"}
        </div>
      </div>
    </Container>
  );
};

export default ProfileCard;

const Container = styled.div`
  input {
    font-size: 2rem;
    height: 4.6rem;
    display: flex;
    padding: 2rem 2rem 2.5rem;
    border-radius: 2rem;
  }
  button {
    border-radius: 2rem;
  }

  h1 {
    font-size: 4rem;
  }
  h4 {
    font-size: 2.4rem;
  }
  p {
    font-size: 4rem;
  }
`;
