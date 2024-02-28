import { createContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    const title = 'Team';
    const adminTeamTitle = 'Administrators';
    const memberTeamTitle = 'Members';
    const [loading, setLoading] = useState(true);
    const [teams, setTeams] = useState([]);
    const [adminTeam, setAdminTeam] = useState([]);
    const [memberTeam, setMemberTeam] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const TEAMS_API_URL = 'https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098';
                const response = await axios.get(TEAMS_API_URL);
                setTeams(response.data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                console.log(`Error: ${err.message})`);
            }
        }
        fetchTeams();
    }, []);

    useEffect(() => {
        const filterRes = teams.filter((team) =>
            ((team.first_name).toLowerCase()).includes(search.toLowerCase()) || ((team.last_name).toLowerCase().includes(search.toLowerCase())) || ((team.email).toLowerCase().includes(search.toLowerCase())));

        setAdminTeam(filterRes.filter(user => user.role === 'admin'));
        setMemberTeam(filterRes.filter(user => user.role === 'member'));
    }, [teams, search]);


    return (
        <DataContext.Provider value={{
            title, search, setSearch, adminTeam, memberTeam, memberTeamTitle, adminTeamTitle, loading

        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;