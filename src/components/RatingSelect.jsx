import { useState } from "react"

const RatingSelect = ({ select }) => {
    const [selected, setSelected] = useState(10);
    const inputClassName = 'form-check-input appearance-none rounded-full h-10 w-10 border border-gray-300 bg-white checked:bg-orange-400 checked:border-orange-500 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left  cursor-pointer'

    const handleChange = (e) => {
        setSelected(+ e.currentTarget.value)
        select(+ e.currentTarget.value)
    }

    return (
        <ul className="rating flex flex-wrap gap-2 justify-center items-center">
            <li className="relative flex items-center justify-center">
                <input
                    className={inputClassName}
                    type="radio"
                    id="num1"
                    name="rating"
                    value='1'
                    onChange={handleChange}
                    checked={selected === 1} />
                <label className="absolute mx-auto font-bold"htmlFor="num1">1</label>
            </li>
            <li className="relative flex items-center justify-center">
                <input
                    className={inputClassName}
                    type="radio"
                    id="num2"
                    name="rating"
                    value='2'
                    onChange={handleChange}
                    checked={selected === 2} />
                <label className="absolute mx-auto font-bold"htmlFor="num2">2</label>
            </li>
            <li className="relative flex items-center justify-center">
                <input
                className={inputClassName}
                    type="radio"
                    id="num3"
                    name="rating"
                    value='3'
                    onChange={handleChange}
                    checked={selected === 3} />
                <label className="absolute mx-auto font-bold"htmlFor="num3">3</label>
            </li>
            <li className="relative flex items-center justify-center">
                <input
                className={inputClassName}
                    type="radio"
                    id="num4"
                    name="rating"
                    value='4'
                    onChange={handleChange}
                    checked={selected === 4} />
                <label className="absolute mx-auto font-bold"htmlFor="num4">4</label>
            </li>
            <li className="relative flex items-center justify-center">
                <input
                className={inputClassName}
                    type="radio"
                    id="num5"
                    name="rating"
                    value='5'
                    onChange={handleChange}
                    checked={selected === 5} />
                <label className="absolute mx-auto font-bold"htmlFor="num5">5</label>
            </li>
            <li className="relative flex items-center justify-center">
                <input
                className={inputClassName}
                    type="radio"
                    id="num6"
                    name="rating"
                    value='6'
                    onChange={handleChange}
                    checked={selected === 6} />
                <label className="absolute mx-auto font-bold"htmlFor="num6">6</label>
            </li>
            <li className="relative flex items-center justify-center">
                <input
                className={inputClassName}
                    type="radio"
                    id="num7"
                    name="rating"
                    value='7'
                    onChange={handleChange}
                    checked={selected === 7} />
                <label className="absolute mx-auto font-bold"htmlFor="num7">7</label>
            </li>
            <li className="relative flex items-center justify-center">
                <input
                className={inputClassName}
                    type="radio"
                    id="num8"
                    name="rating"
                    value='8'
                    onChange={handleChange}
                    checked={selected === 8} />
                <label className="absolute mx-auto font-bold"htmlFor="num8">8</label>
            </li>
            <li className="relative flex items-center justify-center">
                <input
                className={inputClassName}
                    type="radio"
                    id="num9"
                    name="rating"
                    value='9'
                    onChange={handleChange}
                    checked={selected === 9} />
                <label className="absolute mx-auto font-bold"htmlFor="num9">9</label>
            </li>
            <li className="relative flex items-center justify-center">
                <input
                className={inputClassName}
                    type="radio"
                    id="num10"
                    name="rating"
                    value='10'
                    onChange={handleChange}
                    checked={selected === 10} />
                <label className="absolute mx-auto font-bold"htmlFor="num10">10</label>
            </li>
        </ul>
    )
}

export default RatingSelect