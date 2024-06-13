import { Partner } from '../../../backend/src/types';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

function PartnerTile(partner: Partner) {

    const isActive = (active: boolean) => {
        if (active) {
            return "Active";
        } else {
            return "Inactive";
        }
    }

  return (
    <div className="partner-tile">
      <img className="partner-thumbnail" src={partner.logo} />
      <hr />
      <div className="partner-info">
        {partner.name}
        <p>{isActive(partner.active)}</p>
        {partner.description}
      </div>
    </div>
  )
}

export default PartnerTile;