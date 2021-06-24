import find from '../../assets/searching-magnifying-glass.png'
import './FindBlock.sass'
import { IDish } from '../../interfaces/IDish'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { filterArray } from '../../Redux/dishesSlice'
import { useParams } from 'react-router-dom'
import Cross from '../Cross/Cross'


export const filterItems = (array: IDish[], query?: string): IDish[] => {
    if (!query) return array
    return array.filter((el) => {
        return el.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
}


const FindBlock: React.FC<{ setFindBlock: Function }> = ({ setFindBlock }) => {
    const dispatch = useDispatch()

    const [findInput, setFindInput] = useState('')

    const onHandlerInput = (data: string) => {
        setFindInput(data)
        dispatch(filterArray({ find: data }))
    }

    const params: { type: string } = useParams()
    const type = params.type

    return (
        <div className="find-block">
            <img className="find-block__find-icon" src={find} />
            <input className="find-block__input-dish"
                placeholder="Введите название блюда"
                onChange={(elem) => { onHandlerInput(elem.target.value) }}
                value={findInput} />
            <div onClick={() => {
                setFindBlock(false)
                dispatch(filterArray({ type }))
            }}>
                <Cross position="right" />
            </div>
        </div>
    )
}
export default FindBlock