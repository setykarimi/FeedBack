import PropTypes from 'prop-types';

const Card = ({ children, reverse }) => {
    return (
        <div className={`bg-white text-zinc-900 p-4 relative my-4 rounded-lg ${reverse && 'bg-zinc-800'}`}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    reverse: false
}

Card.prototypes ={
    reverse: PropTypes.bool,
    children: PropTypes.node.isRequired
}

export default Card