import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback, handleDelete }) => {
    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }
    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item) =>
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 , height: '0'}}
                        animate={{ opacity: 1 , height: 'auto'}}
                        exit={{ opacity: 0 , height: '0'}}>
                        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
                    </motion.div>)
                }
            </AnimatePresence>
        </div>
    )
}

FeedbackList.protoTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList