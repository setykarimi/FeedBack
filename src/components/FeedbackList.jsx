import PropTypes from 'prop-types';
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback }) => {
    console.log(feedback)
    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }
    return (
        <div className="feedback-list">
            {feedback.map((item) => <FeedbackItem key={item.id} item={item} />)}
        </div>
    )
}

FeedbackList.protoTypes ={
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList