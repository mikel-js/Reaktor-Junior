import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Packages from '../../constants/packages';
import styled from 'styled-components';
import logo from '../../images/potential.gif';

const PackageLink = styled.p`
  &:hover {
    color: white;
  }
`;

const LogoWrapper = styled.div`
  position: absolute;
  padding-top: 10vh;
  height: 100vh;
  width: 100%;
  text-align: center;
  top: 0;
  background: linear-gradient(141deg, #7d8581 0%, #4d4855 51%, #57606f 75%);
`;
const LoadingLogo = styled.img`
  width: 50vw;
  height: 50vh;
`;

const PackageTable = () => {
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Packages()
      .then((data) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        return data.sort((a, b) => {
          return a.Package > b.Package ? 1 : -1;
        });
      })
      .then((sortedData) => {
        setPackages(sortedData);
      })
      .catch((err) => {
        console.error(`error at PackageTable: ${err}`);
      });
  }, []);

  const tableStyle = {
    margin: `0 auto`,
    marginTop: `5vh`,
    width: `30%`,
    padding: 0,
    height: `100%`,
    color: 'black',
    fontWeight: 600,
    border: `solid white 1px`,
  };

  return (
    <>
      {isLoading ? (
        <LogoWrapper>
          <h1>REAKTOR LOADING</h1>
          <LoadingLogo src={logo} />
        </LogoWrapper>
      ) : (
        <Table responsive='xl' style={tableStyle}>
          <thead>
            <tr>
              <th>#</th>
              <th>Package Name</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((bundle, index) => (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>
                  {' '}
                  <Link
                    to={`/${bundle.Package}`}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                    }}
                  >
                    <PackageLink> {bundle.Package}</PackageLink>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default PackageTable;
