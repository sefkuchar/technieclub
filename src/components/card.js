import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";



const divAnimationVariants = {
    next: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 85,
            damping: 13,
            duration: 1,
        },
    },
    anim: {
        x: 0,
        scale: 1.2,
        zIndex: 99,
        transition: {
            type: "spring",
            duration: 0.8
        },
    },
    end: {
        x: 0,
        scale: 1,
        zIndex: 10,
        duration: 0.8,
        transition: {
            type: "spring",
            duration: 0.8
        },
    },
}


export default function Card({ link, pos, discord, twitter }) {
    const divAnimationControls = useAnimation()
    const divAnimationControls1 = useAnimation()

    useEffect(() => {
        async function start() {
            await divAnimationControls.start(divAnimationVariants.next)
        }
        start();
      });

    let min_x = pos === "left" ? -7000 : 2000
    let max_x = pos === "left" ? -2000 : 7000


    return (
        <motion.div
            initial={{ opacity: 0, x: getRandomInt(min_x, max_x) }}
            animate={divAnimationControls}
            whileHover={{
                scale: 1.2,
                backgroundColor: "#a1aee6",
                zIndex: 99,
                transition: {
                    type: "spring",
                    duration: 0.8,
                },
            }}
            onHoverStart={async () => {
                divAnimationControls1.start({ scale: 1.2, fontWeight: "700", transition: { duration: 0.5 } })
            }}
            onHoverEnd={async () => {
                divAnimationControls1.start({ scale: 1, fontWeight: "500", transition: { duration: 0.5 } })
            }}
            style={{ "clip-path": "polygon(0 0, 100% 0, 100% 100%, 23% 100%, 0 80%)" }}
            className="min-h-fit w-40 sm:w-72 backdrop-filter backdrop-blur-xl bg-light-white bg-opacity-80 flex flex-col mx-2 my-2 sm:mx-4 sm:my-5 text-[12px] font-medium sm:text-[20px]">
            <img alt="" className="object-contain h-36 sm:h-60 mt-2" src={link} />
            <span className="flex text-center flex-1 flex-col justify-center">
                <motion.div
                    animate={divAnimationControls1}
                    className="p-4"
                >
                    {twitter &&
                        <div>
                            <a className="text-white" target="_blank" rel="noreferrer" href={`https://twitter.com/${twitter}`}> {twitter}</a>
                        </div>
                    }
                    {discord &&
                        <div>
                            <span className="text-white"> {discord}</span>
                        </div>
                    }
                </motion.div>
            </span>
        </motion.div>

    )
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}