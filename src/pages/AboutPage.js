import { Link } from "react-router-dom"
import Card from "../components/shared/Card"

const AboutPage = () => {
    return (
        <Card>
            <h1>About this Project</h1>
            <p>This is a React app to leave feedback for a product or service</p>
            <p>Version: 1.0.0</p>

           <Link to='/' className="text-sm font-bold mt-4 block text-orange-600 w-fit hover:underline">Back to home</Link>
        </Card>
    )
}

export default AboutPage