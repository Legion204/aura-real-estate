import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css"

const Map = () => {
    return (
        <MapContainer className='h-[400px]' center={[23.8041 , 90.4152]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[23.7937, 90.4066]}>
                <Popup>
                    Aura Real Estate office
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;