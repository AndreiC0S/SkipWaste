import React, { createContext, useContext, useEffect, useState } from 'react';

const SkipContext = createContext();

export const useSkips = () => useContext(SkipContext);

export const SkipProvider = ({ children }) => {

  // all skips fetched from the backend. main data source we use for rendering cards.
  const [skips, setSkips] = useState([]);

  // the skip that the user actually selects (ex: for checkout). only one at a time... hopefully.
  const [selectedSkip, setSelectedSkip] = useState(null);


  const [loading, setLoading] = useState(true);


  const [error, setError] = useState(null);

  // is the skip detail modal open? this controls that.
  const [isModalOpen, setIsModalOpen] = useState(false);

  // data for the skip shown inside the modal (read more). different from selectedSkip.
  const [modalSkipData, setModalSkipData] = useState(null);


  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
        const data = await response.json();
        setSkips(data);
        console.log(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);


  return (
    <SkipContext.Provider value={{ skips, loading, error, isModalOpen, setIsModalOpen, selectedSkip, setSelectedSkip, modalSkipData, setModalSkipData }}>
      {children}
    </SkipContext.Provider>
  );
};
