import { useEffect, useState } from "react";
import { useFeedback } from "../context/FeedbackContext";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const { addFeedback, feedbackEdit, updateFeedback } = useFeedback();


    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false);
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text.length !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text: text,
                rating: rating
            }

            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            
            setText('')
            setBtnDisabled(true)
        }
    }


    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2 className="text-center mb-2 text-lg font-bold">How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group  border border-1 m-auto mt-4 flex justify-between px-3 py-2 rounded-md gap-4">
                    <input className="w-full outline-none" type="text" placeholder="Write a review" onChange={handleTextChange} value={text} a />
                    <Button type='submit' isDisabled={btnDisabled}
                        classNames='disabled:bg-zinc-200 disabled:text-zinc-500 bg-blue-500 text-white py-1 px-3 rounded-md text-sm font-medium '>
                        Send
                    </Button>
                </div>

                {
                    message &&
                    <div className="text-sm mt-1 text-red-600 font-medium">
                        {message}
                    </div>
                }
            </form>
        </Card>
    )
}

export default FeedbackForm