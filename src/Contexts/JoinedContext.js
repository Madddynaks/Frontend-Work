import React, { createContext, useState } from 'react';

export const JoinedContext = createContext();

export const JoinedProvider = ({ children }) => {
  const [joined, setJoined] = useState(false);

  return (
    <JoinedContext.Provider value={{ joined, setJoined }}>
      {children}
    </JoinedContext.Provider>
  );
};
