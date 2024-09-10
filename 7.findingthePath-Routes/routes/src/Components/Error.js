import React from 'react'
import { useRouteError } from 'react-router';

const Error = () => {
   const err = useRouteError()
   console.log(err);
   
  return (
    <>
    <h1>OOPs</h1>
    </>
  )
}

export default Error;