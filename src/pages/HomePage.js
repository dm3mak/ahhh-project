import React, { Component } from 'react'




class HomePage extends Component {
    
    render() {
        
        const shuffled =  this.props.allPromos.sort( (a,b) => 0.5 - Math.random());
        const randomPromos = [];
        for(let i =0; i<3;i++){
            const promotion = shuffled[i];
            randomPromos.push(<div>{promotion.title}</div>)
        }
        return (
            // filter by type + map to show cards
            <div className="p-home">
               
                {randomPromos}
            </div>
        )
    }
}

export default HomePage