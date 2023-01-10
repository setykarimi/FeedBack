import { TbCircleX, TbEditCircle } from 'react-icons/tb'
import PropTypes from 'prop-types';
import Card from "./shared/Card";
import { useFeedback } from '../context/FeedbackContext';

const FeedbackItem = ({ item }) => {

    const {deleteFeedback, editFeedback} = useFeedback()

    return (
        <Card reverse={true}>
            <div className="absolute flex justify-center items-center text-white -top-3 w-8 h-8 bg-orange-500 -left-3 rounded-full">
                {item.rating}
            </div>
            <button onClick={() => deleteFeedback(item.id)} className='close absolute right-1 top-1 text-sm'>
                <TbCircleX color='gray' size="20"/>
            </button>
            <button onClick={() => editFeedback(item)} className='close absolute right-6 top-1 text-sm'>
                <TbEditCircle className='text-blue-500' size="20"/>
            </button>
            <div className="text-display px-3 pt-2">
                <p>{item.text}</p>
            </div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem