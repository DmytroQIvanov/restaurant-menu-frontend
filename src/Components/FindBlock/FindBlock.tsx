import find from '../../assets/searching-magnifying-glass.png'
import cross from '../../assets/close.png'
import './FindBlock.sass'


const FindBlock: React.FC<{ setFindBlock: Function }> = ({ setFindBlock }) => {

    return (
        <div className="find-block">
            <img className="find-block__find-icon" src={find} />
            <input className="find-block__input-dish" placeholder="Введите название блюда" />
            <img className="find-block__close-icon" src={cross} onClick={() => setFindBlock(false)} />
        </div>
    )
}
export default FindBlock