import PropTypes  from 'prop-types';

const Button = ({children, classNames ,type, isDisabled}) => {
    return (
        <button type={type} disabled={isDisabled} className={classNames}>
            {children}
        </button>
    )
}


Button.defaultProps = {
    type: 'button',
    isDisabled: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button