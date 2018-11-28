import * as React from 'react';
import Assessment from '@material-ui/icons/Assessment';
import Assignment from '@material-ui/icons/Assignment';
import ContactSupport from '@material-ui/icons/ContactSupport';
import FolderIcon from '@material-ui/icons/Folder';
import Note from '@material-ui/icons/Note';

export default () => {
  const getRandomElement = items => items.sort(() => 0.5 - Math.random())[0];
  const controlList = {
    Assessment,
    Assignment,
    ContactSupport,
    FolderIcon,
    Note,
  };
  const controlKeys = Object.keys(controlList);
  const element = getRandomElement(controlKeys);
  const controls = (() => {
    const Control = controlList[element];
    return <Control key={'ctrl-0'} />;
  })(); // IIFE
  return <div>{controls}</div>;
};
