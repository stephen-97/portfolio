import React, { CSSProperties} from 'react';
import CSS from 'csstype'
import imagetoAdd from './assets/shanks.png'
import './App.css';
import Link from "./components/Link";

function App() {
  return (
    <div style={container}>
      <div style={content}>
          <img src={imagetoAdd} style={image} alt=""/>
          <span style={text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum, urna vitae aliquam venenatis, nunc arcu hendrerit felis, a fermentum nulla felis eget nibh. Pellentesque non lacus ornare, mattis leo et, dignissim erat. Sed vel metus purus. Maecenas mattis tellus sit amet nibh ornare, ac posuere odio rutrum.</span>
      </div>
      <div style={linksContainer}>
          <Link iconName={"Github"}/>
          <Link iconName={"Linkedin"} />
          <Link iconName={"Github"}/>
      </div>
    </div>
  );
}

const container: CSS.Properties = {
    height: "100vh",
    width: "100%",
    backgroundColor: "gray"
}
const content: CSS.Properties = {
    backgroundColor: "#cbded9",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    padding: "30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
};
const image: CSS.Properties = {
    height: "100px",
    width: "300px",
    zIndex: "1",
    borderRadius: "10px",
    backgroundImage: "url('/src/assets/shanks.png')"
}
const text: CSS.Properties = {
    fontSize: "20px",
    color: "gray",
    padding: "10px",
    paddingLeft: "30px"
}

const linksContainer: CSS.Properties = {
    position: "absolute",
    right: "300px",
    top: "50%",
    transform: "translateY(-50%)"

}

export default App;
