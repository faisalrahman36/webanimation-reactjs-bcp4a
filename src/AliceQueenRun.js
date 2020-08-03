import React, { useRef, useEffect } from 'react'

function AliceQueenRun() {
    const refAQR = useRef(null)

    useEffect(() => {
        const animAQ  = refAQR.current.animate(
            [{ transform: 'translateY(0)' }, { transform: 'translateY(-100%)' }],
            {
                easing: 'steps(7, end)',
                duration: 600,
                playbackRate: 1,
                iterations: Infinity
            }
        )

        function accelerate_AQ() {
            animAQ.playbackRate *= 1.1;
            setInterval(
                () => {
                    if (animAQ.playbackRate > 1) {
                        animAQ.playbackRate *= .9;
                    }
                }, 6000)
        }
        window.addEventListener('click', accelerate_AQ)
    })
    return (
        <div id="red-queen_and_alice">
            <img ref={refAQR} id="RedQueenAliceRun" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place." />
        </div>
    )
}

export default AliceQueenRun;
