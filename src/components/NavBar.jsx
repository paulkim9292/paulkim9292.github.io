import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { HashLink as Link } from "react-router-hash-link";

const Nav = styled.nav`
  background-color: #fdfdfd;
  height: 100%;
  width: 8.7vw;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid #2f2f2f;
`;

const Upper = styled.div`
  writing-mode: tb-rl;
  transform: rotate(-180deg);
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 30%;
  width: 100%;
`;

const Profile = styled.img`
  transform: rotate(-180deg);
  margin-bottom: 3vw;
  border-radius: 50%;
  width: 7vw;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

const Menus = styled.div`
  display: flex;
  height: 70%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  font-size: 1.3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  width: 100%;
  cursor: pointer;
  transition: all 1s;
  border-radius: 30px;
  &:hover {
    background-color: #2f2f2f;
    color: #fdfdfd;
    transition: all 1s;
  }
`;

const Lower = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Social = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  transition: all 1s;
  &:hover {
    background-color: #2f2f2f;
    color: #fdfdfd;
    transition: all 1s;
  }
`;

function NavBar() {
  return (
    <Nav>
      <Upper>
        <Menus>
          <Button>
            <a
              href="https://www.google.com/"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "inherit",
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              RESUME
            </a>
          </Button>
          <Button>
            <Link
              to="#projects"
              style={{
                textDecoration: "none",
                color: "inherit",
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              PROJECTS
            </Link>
          </Button>
          <Button>
            <Link
              to="#about"
              style={{
                textDecoration: "none",
                color: "inherit",
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ABOUT
            </Link>
          </Button>
        </Menus>
        <ProfileContainer>
          <Link to="#hello">
            <Profile src="../assets/profile.jpg"></Profile>
          </Link>
        </ProfileContainer>
      </Upper>
      <Lower>
        <Social>
          <a
            href="https://github.com/paulkim9292"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "inherit",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: "2vw" }} />
          </a>
        </Social>
      </Lower>
    </Nav>
  );
}

export default NavBar;
