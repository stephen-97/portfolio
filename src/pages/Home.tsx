import React, {Dispatch, ReactElement, SetStateAction, useState} from "react";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Home = (): ReactElement => {

    const [isLoading, setIsLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(true);

    return(
        <>
            {isLoading ?
                <Loader finishLoading={() => setIsLoading(false)} />
                :
                <>
                    <Header />
                    <Main/>
                    <Footer />
                </>
            }
        </>
    )
}

export default Home;
