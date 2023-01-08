import PropTypes from 'prop-types';
import {useFeedback} from '../context/FeedbackContext';

const FeedbackStats = () => {

    const {feedback} = useFeedback()
    // Calculate rating avg
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className="flex justify-between">
            <h4><b>{feedback.length}</b> Reviews</h4>
            <h4>Average Rating: <b>{isNaN(average) ? 0 : average}</b></h4>
        </div>
    )
}


FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats