import { 
    FaBed, 
    FaCar, 
    FaPlane, 
    FaRegCalendarAlt, 
    FaUser } from 'react-icons/fa';
import { DateRange } from 'react-date-range';
import './header.css';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Header = () => {
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);
  return (
    <div className="header">
      <div className='headerContainer'>
        <div className="headerList">
            <div className="headerListItem active">
                <FaBed />
                <span>Stays</span>
            </div>
            <div className="headerListItem">
                <FaPlane />
                <span>Flights</span>
            </div>
            <div className="headerListItem">
                <FaCar />
                <span>Car rentals</span>
            </div>
            <div className="headerListItem">
                <FaBed />
                <span>Attraction</span>
            </div>
            <div className="headerListItem">
                <FaCar />
                <span>Airpot taxis</span>
            </div>
        </div>
        <h1 className='headerTitle'>
            A lifetime of discounts? It's Genius.
        </h1>
        <p className='headerDesc'>
            Get rewarded for your travels - unlock instant savings of 10% or more with a free <br/>Bookme.com account
        </p>
        <button className='headerBtn'>Sign in / Register</button>
        <div className='headerSearch'>
            <div className='headerSearchItem'>
                <FaBed className="headerIcon" />
                <input 
                  type="text" 
                  placeholder="Where are you going?" 
                  className="headerSearchInput" 
                  />
            </div>
            <div className='headerSearchItem'>
                <FaRegCalendarAlt className="headerIcon" />
                <span className='headerSearchText'>date to date</span>
                <DateRange 
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  range={date}
                />
            </div>
            <div className='headerSearchItem'>
                <FaUser className="headerIcon" />
                <span className='headerSearchText'>2 adults 2 children 1 room</span>
            </div>
            <div className='headerSearchItem'>
                <button className="headerBtn">Search</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;