import React from 'react';
import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {useSelector} from "react-redux";
import {icon} from "leaflet";


const Map = ({setDetailId}) => {

   const {isLoading, error, flights} = useSelector(store => store.flight);



    return (
        <MapContainer
            center={[39.202742, 34.169776]}
            zoom={6}
            scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {
                flights.map((flight) => {
                    const { id, lat, lng, deg, code } = flight;

                    // Custom icon with rotation based on heading
                    const planeIcon = L.divIcon({
                        html: `<div style="transform: rotate(calc(${deg-65}deg));">
                                <img src="../../public/plane1.png" alt="plane icon" style="width: 50px; height: 50px;" />
                               </div>`,
                        className: '',
                        iconSize: [50, 50],
                    });


                    return (
                        <Marker key={id} icon={planeIcon} position={[lat, lng]}>
                            <Popup>
                                <div className="popup">
                                    <span>Code: {code}</span>
                                    <button onClick={()=> setDetailId(flight.id)}>Detail</button>
                                </div>
                            </Popup>
                        </Marker>
                    );
                })
            }


        </MapContainer>
    );
};

export default Map;
