import React from 'react';
import {MapContainer, Marker, Polyline, Popup, TileLayer, useMap} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {useDispatch, useSelector} from "react-redux";
import {clearRoute} from "../redux/slices/infoSlice.js";

// Component to close the popup
const ClosePopupButton = ({clearRoute, }) => {
    const map = useMap();  // Access the map instance

    const handleClearRoute = () => {
        clearRoute();      // Dispatch the action to clear the route
        map.closePopup();  // Close any open popups

    };

    return (
        <button onClick={handleClearRoute}>Clear Route</button>
    );
};

const Map = ({setDetailId, handleClick}) => {

    const {isLoading, error, flights} = useSelector(store => store.flight);
    const {route} = useSelector((store) => store.info);
    const dispatch = useDispatch();

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
                        html: `<div style="transform: rotate(calc(${deg + 50}deg));">
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
                                    <button onClick={() => setDetailId(flight.id)}>Detail</button>
                                    {/* Pass handleClick to close popup */}
                                    <ClosePopupButton clearRoute={() => dispatch(clearRoute())} handleClose={handleClick} />
                                </div>
                            </Popup>
                        </Marker>
                    );
                })
            }

            {
                route && <Polyline positions={route} />
            }

        </MapContainer>
    );
};

export default Map;
