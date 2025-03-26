"use client";

import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// Path to your GeoJSON file in the public directory
const geoUrl = "/content/map.geojson";

const WorldMap = ({ highlightedCountries }) => {
    return (
        <div className='relative w-full h-[400px]'>
            <ComposableMap projection='geoMercator'>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            const isHighlighted = highlightedCountries.includes(
                                geo.properties.ISO_A2
                            );
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={isHighlighted ? "#FF5722" : "#D6D6DA"}
                                    stroke='#000'
                                    strokeWidth={0.5}
                                />
                            );
                        })
                    }
                </Geographies>
            </ComposableMap>
        </div>
    );
};

export default WorldMap;
