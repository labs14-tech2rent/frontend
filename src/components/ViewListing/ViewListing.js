import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { getItems } from '../../actions';

const ViewListing = props => {
    const [items, setItems] = useState({
        items: []
    });

    const itemStore = useSelector(store => store.getItems.items)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getItems())
            
      }, []);
    return (
    <div className="view-listing mainContent">
        <div className="listing-form-container">
            {console.log(itemStore)}
            <h2>Find Tech</h2>
            <form className="listing-form">
                <label>Item Name</label>
                <input type="text" placeholder="Name, Brand, or Tech type" />
                <p className="addition">+ Add Additional Gear</p>

                <label>Location</label>
                <input type="text" placeholder="City or Zipcode" />

                <label>Booking Date</label>
                <input type="date" placeholder="MM/DDYY" />

                <button type="submit">Find Your Tech</button>
            </form>
        </div>

        <div className="listings">
            {itemStore ?
                itemStore.map(item =>
                    <div>
                        <h3>{item.category}</h3>
                        <img src={item.picture} alt="item picture" title="item photo" />
                    </div>
                     ) : null
            }
        </div>
    </div>

    )}

export default ViewListing