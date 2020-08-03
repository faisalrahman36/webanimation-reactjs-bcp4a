import React, { useRef, useEffect } from 'react'

function Foreground() {

    const ref_fg = useRef(null)

    useEffect(() => {
        const animate_fg = ref_fg.current.animate(
            [{ transform: 'translateX(100%)' }, { transform: 'translateX(-100%)' }],
            {
                duration: 12000,
                iterations: Infinity
            }
        )
        function accelerate_fg() {
            animate_fg.playbackRate *= 1.1;
            setInterval(
                () => {
                    if (animate_fg.playbackRate > 1) {
                        animate_fg.playbackRate *= .9;
                    }
                }, 6000)
        }
        window.addEventListener('click', accelerate_fg)
    })


    return (
        <div className="foregrounds" id="foreground" ref={ref_fg} >
            <img id="palm3_sm" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
            <img id="bush_sm" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
            <img id="w_rook_upright_sm" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />

        </div>
    )
}

export default Foreground;
 