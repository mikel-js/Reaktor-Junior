import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Dependencies from '../../constants/dependencies';
import { Link } from 'react-router-dom';

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
    <>
      <div>
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
        >
          <Header closeButton>
            <Title id='contained-modal-title-vcenter'>
              These are the reverse dependencie/s of {dependencyName}
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
        <h2>Package Name: {packageName}</h2>
        <div>
          <p>Description: {description}</p>
        </div>
        <div>
          Dependencies:
          {dependencies ? (
            dependencies.map((dependency) => (
              <p
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
          <Link to={`/`}>Back to Homepage</Link>
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
