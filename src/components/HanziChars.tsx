import HanziWriter from "hanzi-writer";
import {MutableRefObject, useEffect, useRef} from "react";

function charWriter(ref: HTMLElement, char): HanziWriter {
    return HanziWriter.create(ref, char, {
        width: 80,
        height: 80,
        strokeAnimationSpeed: 4,
        delayBetweenStrokes: 10,
        padding: 5,
        showCharacter: false,
        showOutline: false,
        strokeColor: "#FDA4AF",
    })
}

export default function HanziChars() {
    const char1 = useRef()
    const char2 = useRef()

    useEffect(() => {
        const char1Writer = charWriter(char1.current, "慧" )
        const char2Writer = charWriter(char2.current, "琴" )
        char1Writer.animateCharacter({
            onComplete: function () {
                setTimeout(function () {
                    char2Writer.animateCharacter();
                }, 100);
            },
        });
    })

    return <div>
        <span ref={char1}></span>
        <span ref={char2}></span>
    </div>
}