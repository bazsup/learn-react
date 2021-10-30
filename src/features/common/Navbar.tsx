import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <Link to="/">show case</Link>
            <Link to="/pagination-data">pagination data</Link>
        </div>
    )
}
