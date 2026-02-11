// zCalc.jsx
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
            <p>
            Qgis Altitude Level Clipper
            </p>
            <p className="zcalc-subtitle">
                x,y,z scaling calculator <br/>
                input:<br/>
                raster clip, coordinate extent<br/>
                output: <br />
                xyz scaling for UE<br />
                (under construction)
                <br/>
                <br/>
                (shift + scroll = +/- 10 )
                <br/>
                (ctrl+ scroll = +/- .00001)
            </p>

            <div className="input-group">
                <label htmlFor="minV">_min:</label>
                <input
                    ref={minRef}
                    id="minV"
                    type="number"
                    step="any"
                    value={minV}
                    onChange={(e) => setMinV(Number(e.target.value))}
                    onFocus={(e) => e.target.select()}
                />
            </div>

            <div className="input-group">
                <label htmlFor="maxV">_max:</label>
                <input
                    ref={maxRef}
                    id="maxV"
                    type="number"
                    step="any"
                    value={maxV}
                    onChange={(e) => setMaxV(Number(e.target.value))}
                    onFocus={(e) => e.target.select()}
                />
            </div>

            <div className="results-box">
                <div className="result-line">
                    <span>z-scaling:</span>
                    <strong>{formatNumber(zScale)} </strong>
                </div>
                <div className="results-line">
                    <p>x,y TODO</p>
                </div>

                <div className="gdal-command">
                    <div className="gdal-label">gdal arg:</div>
                    <code>
                        -scale {minV} {maxV} 0 65535
                    </code>
                </div>
            </div>
            <Link className="calc-home-link" to="/">
                Back
            </Link>

        </div>
    );
}
export default ZScaleCalc;