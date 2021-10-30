import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import './Loading.scss';

function Loading() {
  return (
    <div className="loading">
      <ReactLoading type={'balls'} color={'#42a391'} height={300} width={300} />
    </div>
  );
}

export default Loading;
