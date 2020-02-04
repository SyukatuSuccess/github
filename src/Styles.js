import React, { Fragment } from 'react';

export const none = {
  display: 'none',
}

export const flex = {
  display: 'flex',
}

export const font =( value )=>{
  if( typeof(value) == "number" ){
    return {fontSize: value}
  }else if( typeof(value) == "string" ){
    return {color : value }
  }
}

export const padding =(value)=>{
  return { padding: value}
}
