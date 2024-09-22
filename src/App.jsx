import React, {useEffect, useState} from 'react';
import Header from "./components/Header.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Map from "./pages/Map.jsx";
import List from "./pages/List.jsx";
import Buttons from "./components/Buttons.jsx";
import {useDispatch} from "react-redux";
import {getFlights} from "./redux/actions/index.js";
import Modal from "./components/Modal.jsx";


const App = () => {

    const dispatch = useDispatch();

    // detay gosterilecek ucus Id
    const [detailId, setDetailId ] = useState(null);


    useEffect(() => {
        dispatch(getFlights())
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <Buttons/>
            <Routes>
                <Route path="/" element={<Map setDetailId={setDetailId}  />}/>
                <Route path="/list" element={<List/>}/>
            </Routes>

            {detailId && <Modal id={detailId} close={()=>setDetailId(null)} />}

        </BrowserRouter>
    );
};

export default App;
