import * as React from 'react'

import connect from './connect'

interface IPropTypes {
}

class About extends React.Component<IPropTypes> {

    render() {
        return(
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div className={'title'}>
                        <h2>Sobre</h2>
                    </div>
                </div>
                <div className={'row'}>

                </div>
            </div>
        )
    }
}

export default connect(About)
