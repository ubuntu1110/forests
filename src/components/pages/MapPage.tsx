import React from 'react';
import MapWithRoutes from '../ui/MapWithRoutes';
import RouteGraph from '../ui/RouteGraph';

const MapPage: React.FC = () => {
    return (
        <div className="p-8 bg-light-green text-dark-bg">
            <h1 className="text-4xl font-bold mb-8 text-center">Карта и маршруты</h1>
            <div className="mb-16">
                <MapWithRoutes />
            </div>
            <RouteGraph />
        </div>
    );
};

export default MapPage;
