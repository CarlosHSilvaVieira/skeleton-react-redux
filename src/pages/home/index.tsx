import * as React from 'react'

import { Link } from 'react-router-dom'
import connect from './connect'

interface IPropTypes {
}

class HomePage extends React.Component<IPropTypes> {

    render() {
        return(
            <div className={'container-fluid jumbotron'}>
                <h1>Test</h1>
                <Link className='nav-link' to='/about'>Sobre</Link>
            </div>
        )
    }
}

export default connect(HomePage)
