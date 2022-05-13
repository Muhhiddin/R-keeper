import React from 'react';
import {YMaps, Map, ZoomControl} from 'react-yandex-maps';

const MyMap = () => {

    return (
        <YMaps>

                <Map defaultState={{
                        center: [41.311151, 69.279716],
                        zoom: 9,
                        controls: ['zoomControl', 'fullscreenControl'],
                    }}
                     modules={['control.ZoomControl', 'control.FullscreenControl']}
                     width={'100%'}>
                    <ZoomControl options={{float: 'right'}}/>
                </Map>

        </YMaps>
    );
};

export default MyMap;