import React from 'react';
import PropTypes from 'prop-types';

export const IntegrationContext = React.createContext();

export const IntegrationProvider = ({ value, children }) => (
  <IntegrationContext.Provider value={value}>
    {children}
  </IntegrationContext.Provider>
);

IntegrationProvider.propTypes = {
  value: PropTypes.shape({
    learningComponent: PropTypes.element
  }).isRequired,
  children: PropTypes.element
};

IntegrationProvider.defaultProps = {
  children: undefined
};
