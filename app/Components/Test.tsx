

// 'use client'
// import { cookies } from "next/headers";
// import React, { useEffect, useState } from 'react';
// import { Cookies } from 'react-cookie';
import Link from 'next/link'
import { cookies } from 'next/headers'


const Test = ({ title }: { title: string }) => {

  return(
  <>
  <div>{title}</div>
  </>);
}

export default Test;

