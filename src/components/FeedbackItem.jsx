import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types';
import Card from "./shared/Card";

const FeedbackItem = ({ item, handleDelete }) => {

    return (
        <Card reverse={true}>
            <div className="absolute flex justify-center items-center text-white -top-3 w-8 h-8 bg-orange-500 -left-3 rounded-full">
                {item.rating}
            </div>
            <button onClick={() => handleDelete(item.id)} className='close absolute right-2 top-2 text-sm'>
                <FaTimes color='gray'/>
            </button>
            <div className="text-display px-3">
                <p>{item.text}</p>
            </div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem