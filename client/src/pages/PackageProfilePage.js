import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StyledHeader from '../elements/StyledHeader';
import Packages from '../constants/packages';
import ProfileModal from '../components/PackageProfile/ProfileModal';

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
    <>
      <StyledHeader headerText='Package Profile' />
      <ProfileModal
        packageName={selectedPackage.Package}
        description={selectedPackage.Description}
        dependencies={selectedPackage.Depends}
      />
    </>
  );
};

export default PackageProfilePage;
