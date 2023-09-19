import React, {ReactElement} from 'react';
import {IStyledComponent, styled} from "styled-components";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {store} from './redux/redux'
import {Provider} from "react-redux";
import GlobalStyle from "./utility/GlobalStyle";
import Error404 from "./pages/Error404";
import Home from "./pages/Home"
import CVpdf from "./pages/CVpdf";

const StyledMainComponent: IStyledComponent<"web"> = styled.section`
  body {
    &.backGroundMenu {
      overflow: hidden;
      display: none;
      background-color: #61dafb;

      header {
        background-color: transparent;
      }

      .container {
        display: none;
      }
    }
  }
`


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/stephenCV",
        element: <CVpdf/>
    },
    {
        path: "*",
        element: <Error404/>
    }
])

const App = (): ReactElement => {

    return (
        <Provider store={store}>
            <GlobalStyle/>
            <StyledMainComponent>
                <RouterProvider router={router}/>
            </StyledMainComponent>
        </Provider>
    );
}


export default App;
