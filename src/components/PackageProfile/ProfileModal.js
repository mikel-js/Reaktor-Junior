import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Dependencies from '../../constants/dependencies';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  width: 50vw;
  margin: 0 auto;
`;

const ProfileModal = ({ packageName, description, dependencies }) => {
  const [reversedDep, setReversedDep] = useState([]);
  const [dependency, setDependency] = useState([]);
  const [dependencyName, setDependencyName] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { Header, Title, Body, Footer } = Modal;

  useEffect(() => {
    Dependencies()
      .then((data) => {
        setReversedDep(Object.entries(data));
      })
      .catch((err) => {
        console.error(`error at PackageTable: ${err}`);
      });
  }, []);

  const handleClick = (e) => {
    const selectedDep = reversedDep.find((dep) => {
      return dep[0] === e.target.id;
    });
    setDependency(selectedDep[1]);
    setDependencyName(selectedDep[0]);
    setShowModal(true);
  };

  return (
    <ProfileWrapper>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Header closeButton>
          <Title id='contained-modal-title-vcenter'>
            These are the reverse dependencie/s of {dependencyName}. Click to
            visit their package profile page.
          </Title>
        </Header>
        <Body>
          {dependency.map((d, idx) => {
            return (
              <p key={idx}>
                <Link onClick={() => setShowModal(false)} to={`/${d}`}>
                  {d}
                </Link>
              </p>
            );
          })}
        </Body>
        <Footer>
          <Button onClick={() => setShowModal(false)}>Close</Button>
        </Footer>
      </Modal>
      <h2 style={{ marginTop: `5vh` }}>Package Name: {packageName}</h2>
      <div>
        <p>Description: {description}</p>
      </div>
      <div>
        Dependencies: <p>(Click dependency to see reverse-dependencies)</p>
        {dependencies ? (
          dependencies.map((dependency) => (
            <p
              style={{
                cursor: 'pointer',
                width: `fit-content`,
                color: `#f7f0f0`,
              }}
              key={dependency}
              id={dependency}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              {dependency}
            </p>
          ))
        ) : (
          <p>No dependency</p>
        )}
        <Link
          to={`/home`}
          style={{
            color: `#c3d0d4`,
          }}
        >
          Back to Homepage
        </Link>
      </div>
    </ProfileWrapper>
  );
};

export default ProfileModal;
