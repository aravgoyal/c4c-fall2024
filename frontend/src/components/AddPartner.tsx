import { useState } from 'react';
import { Partner } from '../../../backend/src/types';
import axios from 'axios';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

// interface PartnerTileProps {
//   partnerData: PartnerData
// }

/*
// @ts-expect-error: This variable is currently unused. You will have to either use them or remove them (at which point you should remove this comment)
*/
function AddPartner() {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');
  const [active, setActive] = useState(false);

  // const [partners, setPartners] = useState<PartnerDetails[]>();

  // Saves the submitted data
  const handleSubmit = async () => {
    // partners.push(new Partner(name, description, logo, active));
    console.log(JSON.stringify(new Partner(name, description, logo, active)));
    try {
      const response = await axios.post('http://localhost:4000/submit', {
          name: name,
          description: description,
          logo: logo,
          active: active,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  }

  return (
    <div className="partner-tile">
      <img className="partner-thumbnail" src='' />
      <hr />
      <div className="partner-info">
        <h2>Add Partner Info</h2>
        <input type="text" id="name" 
          placeholder="Partner name..." onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value)
            console.log("Name changed to " + e.target.value)
          }}/>
        <input type="text" id="description" 
          placeholder="Description..." onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDescription(e.target.value)
            console.log("Description changed to " + e.target.value)
          }}/>
        <input type="text" id="logo"
          placeholder="Logo Source URL..." onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setLogo(e.target.value)
            console.log("Logo URL changed to " + e.target.value)
          }}/>
        <div>
          <input type="checkbox" id="active" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setActive(e.target.checked)
            console.log("Active changed to " + e.target.checked)
          }}/>
          <label id='active'>Active?</label>
        </div>  
        <button className="submit-button" id="submit" onClick={handleSubmit}>
          Submit
        </button> 
      </div>
    </div>
  )
}

export default AddPartner;