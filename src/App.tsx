import React, { CSSProperties} from 'react';
import CSS from 'csstype'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={styles}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum, urna vitae aliquam venenatis, nunc arcu hendrerit felis, a fermentum nulla felis eget nibh. Pellentesque non lacus ornare, mattis leo et, dignissim erat. Sed vel metus purus. Maecenas mattis tellus sit amet nibh ornare, ac posuere odio rutrum.</div>
    </div>
  );
}

const styles: CSS.Properties = {
    backgroundColor: "#cbded9",
};

export default App;
