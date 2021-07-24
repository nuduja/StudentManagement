import React from 'react'

function Header(){
    return (
        <nav>
            <a href="#"> NavBar</a>
            <div>
                <ul>
                    <li>
                        <a href="#">(current)</a>
                    </li>
                    <li>
                        <a href="#">Create Student</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header