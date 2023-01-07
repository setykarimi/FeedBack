import { FaQuestion } from "react-icons/fa"
import { Link } from "react-router-dom"

const AboutIconLink = () => {
    return (
        <div className="bg-orange-200 absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-orange-600">
            <Link to={{
                pathname: '/about-us',
                search: '?sort=name',
                hash: '#hello'
            }}>
                <FaQuestion size={22} />
            </Link>
        </div>
    )
}

export default AboutIconLink