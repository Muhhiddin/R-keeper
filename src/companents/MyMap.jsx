import React from 'react';
import {YMaps, Map, ZoomControl, Placemark} from 'react-yandex-maps';

const MyMap = () => {


    return (
        <YMaps
            /*enterprise
            apiMap
            query={{
                ns: "use-load-option",
                apikey: "a8c61779-61f2-42ac-abbc-5f1b72718938",
                load: "загружаемые модули"
            }}*/
        >

                <Map defaultState={{
                        center: [41.311151, 69.279716],
                        zoom: 9,
                        controls: ['zoomControl', 'fullscreenControl'],
                    }}
                     modules={['control.ZoomControl', 'control.FullscreenControl']}
                     width={'100%'}
                     height={'325px'}
                >
                    <ZoomControl options={{float: 'right'}}/>
                    <Placemark geometry={[55.75, 37.57]} />
                </Map>

        </YMaps>
    );
};

export default MyMap;
