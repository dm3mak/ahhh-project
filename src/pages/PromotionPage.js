import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

 class PromotionPage extends Component {
     
    render() {
        const promo = this.props.allPromos.find((promo) => promo.id == this.props.match.params.id)
        return (
            <div className="p-promotion">
               {promo.title}
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/"><h4>Back to home page</h4>
                    </Link>
                
            </div>
        )
    }
}
export default withRouter(PromotionPage)