import { useEffect, useState } from 'react';
import { Partner } from '../../../backend/src/types';
import axios from 'axios';
import PartnerTile from './PartnerTile';

const DisplayData: React.FC = () => {
    const [data, setData] = useState<Partner[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/submit');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Data List</h2>
            {data.length > 0 ? (
                <ul>
                    {data.map((partner) => (
                        <PartnerTile name={partner.name} description={partner.description} 
                        logo={partner.logo} active={partner.active} />
                    ))}
                </ul>
            ) : (
                <p>No partners available.</p>
            )}
        </div>
    );
};

export default DisplayData;