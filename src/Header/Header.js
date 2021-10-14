import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaGripLines,
  FaBell,
  FaTabletAlt,
  FaEye,
  FaStar,
  FaCodeBranch,
  FaCode,
  FaExclamationCircle,
  FaRegCommentAlt,
  FaPlayCircle,
  FaRegCalendarAlt,
  FaRegDotCircle,
  FaCaretDown,
  FaSearch,
  FaTag,
  FaDirections,
  FaCheck
} from "react-icons/fa";
import axios from "axios";
const Header = () => {
  const [headerData, setHeaderData] = useState();
  const [forks_count, setForks_count] = useState();
  const [watchers_count, setWatchers_count] = useState();
  const [subscribers_count, setSubscribers_count] = useState();
  useEffect(() => {
    axios.get("https://api.github.com/repos/facebook/react").then((res) => {
      setHeaderData(res.data);
      setSubscribers_count(res.data.subscribers_count);
      setForks_count(res.data.forks_count);
      setWatchers_count(res.data.watchers_count);
    });
  }, []);

  const handleClick = (type, funct) => {
    funct(type + 1);
  };
  return (
    <>
      <div className="Nav">
        <span style={{ color: "#ffffff", paddingLeft: "20px" }}>
          <FaGripLines size={"25px"} />
        </span>
        <span style={{ color: "#ffffff", width: "100%", textAlign: "center" }}>
          <FaGithub size={"30px"} />
        </span>
        <span style={{ color: "#ffffff", paddingRight: "20px" }}>
          <FaBell size={"25px"} />
        </span>
      </div>
      <div className="secondNav">
        <span className="secondNav1">
          <span style={{ paddingRight: "10px" }}>
            <FaTabletAlt size={"15px"} />
          </span>
          <span>facebook/react</span>
        </span>
        <span className="secondNav2">
          <span className="buttonspan">
            <button
              className="buttonC"
              onClick={() => handleClick(watchers_count, setWatchers_count)}
            >
              <FaEye /> Watch
            </button>
            <button
              className="buttonN"
              onClick={() => handleClick(watchers_count, setWatchers_count)}
            >
              {watchers_count}
            </button>
          </span>
          <span className="buttonspan">
            <button
              className="buttonC"
              onClick={() =>
                handleClick(subscribers_count, setSubscribers_count)
              }
            >
              <FaStar /> Star
            </button>
            <button
              className="buttonN"
              onClick={() =>
                handleClick(subscribers_count, setSubscribers_count)
              }
            >
              {subscribers_count}
            </button>
          </span>
          <span className="buttonspan">
            <button
              className="buttonC"
              onClick={() => handleClick(forks_count, setForks_count)}
            >
              <FaCodeBranch /> fork
            </button>
            <button
              className="buttonN"
              onClick={() => handleClick(forks_count, setForks_count)}
            >
              {forks_count}
            </button>
          </span>
        </span>
      </div>
      <div className="thirdNav">
        <span className="thirdNavS">
          <span className="thirdNavIcon">
            <FaCode />
          </span>
          <span className="thirdNavContent">Code</span>
        </span>
        <span className="thirdNavS">
          <span className="thirdNavIcon">
            <FaExclamationCircle />
          </span>
          <span className="thirdNavContent">Issues</span>
          <span className="thirdNavContentNumber">
            {headerData?.open_issues_count}
          </span>
        </span>
        <span className="thirdNavS">
          <span className="thirdNavIcon">
            <svg
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
              ></path>
            </svg>
          </span>
          <span className="thirdNavContent">Pull Requests</span>
          <span className="thirdNavContentNumber">257</span>
        </span>
        <span className="thirdNavS">
          <span className="thirdNavIcon">
            <FaRegCommentAlt />
          </span>
          <span className="thirdNavContent">Discussions</span>
        </span>
        <span className="thirdNavS">
          <span className="thirdNavIcon">
            <FaPlayCircle />
          </span>

          <span className="thirdNavContent">Actions</span>
        </span>
        <span className="thirdNavS">
          <span className="thirdNavIcon">
            <FaRegCalendarAlt />
          </span>

          <span className="thirdNavContent">Projects</span>
          <span className="thirdNavContentNumber">3</span>
        </span>
        <span className="thirdNavS">
          <span className="thirdNavContent">...</span>
        </span>

        <hr style={{ color: "#cbd4d3", width: "100%", margin: "0px" }} />
      </div>
      <div className="fourthNav">
        <span className="filters">
          <span className="filtersContent">
            <span>Filters</span>
            <span>
              <FaCaretDown />
            </span>
          </span>

          <span className="search">
            <span className="searchIcon">
              <FaSearch />
            </span>
            <span className="searchContent">
              is:issue is:open{" "}
              <span className="extra" style={{ visibility: "hidden" }}>
                nlfnljfnjjfvjfvb
              </span>
            </span>
          </span>
        </span>
        <span className="labelsmiles">
          <span className="labels">
            <span style={{ paddingLeft: "12px" }}>
              <FaTag />
            </span>
            <span style={{ paddingLeft: " 8px", paddingRight: "8px" }}>
              Labels
            </span>
            <span className="thirdNavContentNumber">30</span>
          </span>
          <span className="miles">
            <span style={{ paddingLeft: "12px" }}>
              <FaDirections />
            </span>
            <span style={{ paddingLeft: " 8px", paddingRight: "8px" }}>
              Milestones
            </span>

            <span className="thirdNavContentNumber">40</span>
          </span>
        </span>
        <span className="newissue">New issue</span>
      </div>
      <div className="fifthNav">
        <span className="fifth">
          <FaRegDotCircle />
        </span>
        <span className="fifth">{headerData?.open_issues_count} </span>
        <span className="fifthopen"> Open</span>
        <span className="fifthclosed">
          <FaCheck />
        </span>
        <span className="fifthclosed">7363 Closed</span>
      </div>
    </>
  );
};

export default Header;
