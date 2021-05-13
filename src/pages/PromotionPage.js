import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PromotionPage extends Component {
    render() {
        return (
            <div className="p-promotion">
                I AM EVERY PROMOTION PAGE BY USING ID
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/"><h4>Back to home page</h4>
                    </Link>
                
            </div>
        )
    }
}