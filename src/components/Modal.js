import React, { useEffect } from 'react';

const Modal = ({ res, setRes }) => {
  useEffect(() => {
    setTimeout(() => {
      setRes(false);
    }, 3000);
  }, [res]);
  return (
    <p style={{ textAlign: 'center', fontSize: '0.99rem', color: '#a3bf8d' }}>
      already have an account try login{' '}
    </p>
  );
};

export default Modal;
