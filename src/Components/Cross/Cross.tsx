import cross from '../../assets/close.png'
import './Cross.sass'

const Cross: React.FC<{ position?: string }> = ({ position }) => {

    if (position == "right")
        return <img src={cross} className="cross-right" />

    if (position == "left")
        return <img src={cross} className="cross-left" />

    return <img src={cross} className="cross-left" />
}
export default Cross