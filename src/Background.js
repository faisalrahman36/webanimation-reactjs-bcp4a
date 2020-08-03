import React, { useRef, useEffect } from 'react'

function Background() {

    const ref_bg = useRef(null)

    useEffect(() => {
        const animate_bg = ref_bg.current.animate(
            [{ transform: 'translateX(100%)' }, { transform: 'translateX(-100%)' }],
            {
                duration: 36000,
                iterations: Infinity
            }
        )
        function accelerate_bg() {
            animate_bg.playbackRate *= 1.1;
            setInterval(
                () => {
                    if (animate_bg.playbackRate > 1) {
                        animate_bg.playbackRate *= .9;
                    }
                }, 6000)
        }
        window.addEventListener('click', accelerate_bg)
    })


    return (
        <div className="backgrounds" id="background" ref={ref_bg} >
            <img id="r_pawn_sm" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />
            <img id="r_knight_sm" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
            <img id="palm2_sm" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
            <img id="r_pawn_upright_sm" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
            <img id="w_rook_sm" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
            <img id="palm1_sm" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />

        </div>
    )
}

export default Background;
