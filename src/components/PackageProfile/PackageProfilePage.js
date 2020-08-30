import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StyledHeader from '../../elements/StyledHeader';
import Packages from '../../constants/packages';
import ProfileModal from './ProfileModal';
import styled from 'styled-components';

const PackageWrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(0, 0, 0, 0.15) 100%
    ),
    radial-gradient(
        at top center,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(0, 0, 0, 0.4) 120%
      )
      #989898;
  background-blend-mode: multiply, multiply;
  height: 100%;
  min-height: 100vh;
  font-weight: bold;
  @media (max-width: 800px) {
    font-size: 0.8em;
  }
  @media (max-width: 400px) {
    font-size: 0.6em;
  }
`;

const PackageProfilePage = () => {
  const { packageName } = useParams();
  const [selectedPackage, setSelectedPackage] = useState([]);

  useEffect(() => {
    Packages()
      .then((data) =>
        setSelectedPackage(
          data.find(({ Package }) => {
            return Package === packageName;
          })
        )
      )
      .catch((err) => {
        console.error(`error at PackageProfile: ${err}`);
      });
  }, [packageName]);

  return (
    <PackageWrapper>
      <StyledHeader headerText='Package Profile' />
      <ProfileModal
        packageName={selectedPackage.Package}
        description={selectedPackage.Description}
        dependencies={selectedPackage.Depends}
      />
    </PackageWrapper>
  );
};

export default PackageProfilePage;
