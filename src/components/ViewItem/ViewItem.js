import React, {useState, useEffect} from 'react';
import axios from 'axios';
import cameraBanner from '../../Images/banner.png';


const ViewItem = (props) => {

  const [id, setId] = useState(props.match.params.id);
  const [item, setItem] = useState();

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(
        `https://labstech2rentstaging.herokuapp.com/api/items/${id}`,
      );
      console.log('result', result.data)
      setItem(result.data);
    };
    fetchItem();
  }, []);

  console.log('item', item);

  return (
    <div className="create-listing view-item mainContent">
      <div className="banner">
        <img src={cameraBanner} alt="Camera" />
      </div>
      <div>
        {item && 
            <div className="view-item__content">
                <div className="view-item__content__left">
                    <img src={item.picture}/>
                </div>
                <div className="view-item__content__right">
                    <h2>{item.name}</h2>
                </div>
            </div>
        }
      </div>
    </div>
  );
};

export default ViewItem;