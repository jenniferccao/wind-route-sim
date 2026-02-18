/// <reference types="vite/client" />

declare module '*.geojson' {
    const value: GeoJSON.FeatureCollection;
    export default value;
}

interface ImportMetaEnv {
    readonly VITE_MAPBOX_TOKEN: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
