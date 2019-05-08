import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import SelectBox from '../../../features/select-box';


const scrape = (props) => (
    <div>
        <header>
            <NavBar />
        </header>
            <h3>Scrape</h3>
            <p>Name: </p>
            <input 
                required
                type="text"
                value={props.scrapeName}
                name="scrapeName"
                placeholder="e.g. John's Resume"
                onChange={props.handleChange}
            />

            <p>Form: </p>
            <div>
            <SelectBox 
                width={260}
                name="saved_form_id"
                items = {[
                    { value: 'get from users saved forms'}
                ]}
            />
            </div>
            <span></span>
            <p>Department: </p>
            <div>
            <SelectBox 
                width={260}
                name="saved_dept_id"
                items = {[
                    {value: 'get from users saved dept'}
                ]}
            />
            </div>
            
            {/* temporary... needs to update to submit & actual scrape */}
            <Link to={'/edit-scrape'}><button>Scrape</button></Link>

    </div>
)

export default scrape