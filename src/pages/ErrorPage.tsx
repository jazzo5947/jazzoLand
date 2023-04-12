import React from 'react';
import Menu from '../components/Menu';

function ErrorPage() {
  return (
    <>
      <Menu />
      <main>
        <h1>An error occurred!</h1>
        <p>Coult not find this page!</p>
      </main>
    </>
  );
}

export default ErrorPage;
