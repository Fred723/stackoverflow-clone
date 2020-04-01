import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import styled from 'styled-components';

const Counter = ({ label, object = {} }) => {
  console.log('TCL: Counter -> object', object);
  console.log('TCL: Counter -> object', object.coco);

  const [counter, setCounter] = useState(49);
  useEffect(() => {});

  return (
    <div>
      <CounterBox>
        <ExpandLessIcon onClick={() => setCounter(counter + 1)}/>
        <StyledCounter>{counter}</StyledCounter>
        <ExpandMoreIcon onClick={() => setCounter(counter - 1)}/>
      </CounterBox>
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
const CounterBox = styled.div`

  display:flex;
  flex-direction: column;
  align-items: center;

`

export default Counter;
