import React, { createContext, useContext, useReducer } from 'react';

// Create Context
const PreviewContext = createContext();

// Reducer Function
const previewReducer = (state, action) => {
  switch (action.type) {
    case 'toggle_preview':
      return { ...state, isPreviewVisible: !state.isPreviewVisible };
    default:
      return state;
  }
};

// Initial State
const initialState = { isPreviewVisible: false };

// Context Provider
export const PreviewProvider = ({ children }) => {
  const [state, dispatch] = useReducer(previewReducer, initialState);
  return (
    <PreviewContext.Provider value={{ state, dispatch }}>
      {children}
    </PreviewContext.Provider>
  );
};

// Custom Hook to use Preview Context
export const usePreview = () => {
  const context = useContext(PreviewContext);
  if (!context) {
    throw new Error('usePreview must be used within a PreviewProvider');
  }
  return context;
};
