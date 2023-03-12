import {Link} from 'react-router-dom'

function Header() {
    return ( 
        <div  className='text-center'>
            <header className='fs-1 p-5'>TODO APP x REDUX</header>
            <nav>
                <ul className='d-flex justify-content-around'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/pending'}>Pending</Link>
                    <Link to={'/done'}>Done</Link>
                    <Link to={'/delete'}>Deleted</Link>
                </ul>
            </nav>
        </div>
     );
}

export default Header;