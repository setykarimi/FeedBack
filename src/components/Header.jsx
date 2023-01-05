import PropTypes from 'prop-types';

const Header = ({ text }) => {
    return (
        <header className="py-4 bg-zinc-800">
                <h2 className='text-center text-lg font-bold text-white'>{text}</h2>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback UI'
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header