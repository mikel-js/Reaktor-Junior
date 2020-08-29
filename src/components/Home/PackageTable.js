import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Packages from '../../constants/packages';
import styled from 'styled-components';

const PackageLink = styled.p`
  &:hover {
    color: white;
  }
`;
const PackageTable = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    Packages()
      .then((data) =>
        data.sort((a, b) => {
          return a.Package > b.Package ? 1 : -1;
        })
      )
      .then((sortedData) => setPackages(sortedData))
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
  );
};

export default PackageTable;
