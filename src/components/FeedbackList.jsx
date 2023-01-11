import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import FeedbackItem from "./FeedbackItem";
import { useFeedback } from '../context/FeedbackContext';

const FeedbackList = () => {

    const { feedback, isLoading } = useFeedback()

    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No feedback yet</p>
    }
    return isLoading ? <h3 className='text-center mt-16'>loading ...</h3> : (
     (
        <div className="feedback-list">

            <AnimatePresence>
                {feedback.map((item) =>
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, height: '0' }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: '0' }}>
                        <FeedbackItem key={item.id} item={item} />
                    </motion.div>)
                }
            </AnimatePresence>
        </div>
    )
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