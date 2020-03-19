import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import styled from 'styled-components';

const Counter = ({ label, object = {} }) => {
  console.log('TCL: Counter -> object', object);
  console.log('TCL: Counter -> object', object.coco);

  const [counter, setCounter] = useState(49);
  useEffect(() => {});

  return (
    <div>
      <ExpandLessIcon onClick={() => setCounter(counter + 1)}/>
      <StyledCounter>{counter}</StyledCounter>
      <ExpandMoreIcon onClick={() => setCounter(counter - 1)}/>
      <StarBorderIcon/>
    </div>
  );
};

Counter.propTypes = {
  label: PropTypes.string,
  object: PropTypes.object
};



const StyledCounter = styled.p`

margin: 0;

`

export default Counter;
