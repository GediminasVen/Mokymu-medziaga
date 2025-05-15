import useWindowSize from "../hooks/useWindowSize"
import deviceName from "../hooks/useWindowSize"

const Komp2 = () => {
    const displaySize = useWindowSize()
    const deviceSize = displaySize.deviceName(displaySize.width)

    return (
        <div>
            <h3>ekran dyd pvz</h3>
            <p>
                height: {displaySize.height}px,
                width: {displaySize.width}px
            </p>
            <p>
                device: {deviceSize}
            </p>
        </div>
    )
}

export default Komp2