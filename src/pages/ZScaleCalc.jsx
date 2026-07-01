//dem file, clip to extent over center coord
//->scratch layer->polygon->zonal-statistics
//inputs
//meter_per_pixel:  1.471
//min:             -14.47704029083252
//max:              8.534547805786133
//range:            23.011588096618652

//which runs gdal console call:
//    gdal_translate - ot UInt16 - of PNG - scale - 14.47704029083252 - 14.47704029083252 0 65535
//    C: /Users/zacha / qgis / dems / south_ms / echo_clip.tif
//    C: /Users/zacha / qgis / dems / south_ms / echo_files / echo_scale.png
//    Results:
//      OUTPUT: C: /Users/zacha / qgis / dems / south_ms / echo_files / echo_scale.png

import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
function ZScaleCalc() {
    const [minV, setMinV] = useState(0);
    const [maxV, setMaxV] = useState(512);
    const minRef = useRef(null);
    const maxRef = useRef(null);

    const range = maxV - minV;
    const UE_DEFAULT_RANGE = 512;
    const zScale = range !== 0 ? (range / UE_DEFAULT_RANGE) * 100 : 0;
    //todo: .000001 step
    const formatNumber = (num) => {
        return Number(num).toFixed(6).replace(/\.?0+$/, '');
    };

    const handleWheel = (e, setter, currentValue) => {
        e.preventDefault(); 

        const delta = e.deltaY > 0 ? -1 : 1;
        const step = e.shiftKey ? 10 : e.ctrlKey ? 0.01 : 1;

        const newValue = Number(currentValue) + delta * step;

        const clamped = Math.max(-999999, Math.min(999999, newValue));

        setter(clamped);
    };

    useEffect(() => {
        const minInput = minRef.current;
        const maxInput = maxRef.current;

        if (!minInput || !maxInput) return;

        const onMinWheel = (e) => handleWheel(e, setMinV, minV);
        const onMaxWheel = (e) => handleWheel(e, setMaxV, maxV);

        minInput.addEventListener('wheel', onMinWheel, { passive: false });
        maxInput.addEventListener('wheel', onMaxWheel, { passive: false });

        return () => {
            minInput.removeEventListener('wheel', onMinWheel);
            maxInput.removeEventListener('wheel', onMaxWheel);
        };
    }, [minV, maxV]);

    return (
        <div className="zcalc-container">
            <p className="zcalc-subtitle">
                <img src="https://plugins.qgis.org/media/cache/f8/92/f89268dde705a1a7a21ed62c4a6cddb5.png"></img>
                <br/><a href="https://plugins.qgis.org/plugins/qalc/">
                QGIS plugin repository page</a>
                <br/>automations for generating heightmaps from raw terrain data
                <br/>
                <br/>
                cesium ion example
            </p>
            <iframe id="iframe" src="https://zach-dubroc.github.io/q_selector/"></iframe>
            <p>unreal engine demo</p>

            <div className="results-box">
                <iframe  src="https://www.youtube.com/embed/l6h6pNL0UkQ?si=tmSI0yhdkA6M9Ce6&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <Link className="calc-home-link" to="/">
                Back
            </Link>
        </div>
    );
}
export default ZScaleCalc;