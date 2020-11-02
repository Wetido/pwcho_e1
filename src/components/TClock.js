import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const TClock = (props) => {
 
  const GTMOffset = (props.gtm * 3600000) - 3600000;
  const [value, setValue] = useState(new Date(Date.now() + GTMOffset));

  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date(Date.now() + GTMOffset)),
      1000
    );

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div>
      <Clock value={value}/>
    </div>
  )
}

export default TClock;