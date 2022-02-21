import React, { ComponentProps } from 'react';

export const combineComponents = (...components) => {
  return components.reduce( 
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }) => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => 
    <React.Fragment>{children}</React.Fragment>,
  );
};