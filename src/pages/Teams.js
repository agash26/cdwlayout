import { useContext } from 'react'
import DataContext from '../context/DataContext'
import { Typography, Grid, Alert, Divider } from '@mui/material';
import TeamCard from '../components/Card';

const Teams = () => {
  const { adminTeam, memberTeam, memberTeamTitle, adminTeamTitle, search } = useContext(DataContext);

  const renderCardRow = (teamArray) => {
    return (
      <Grid container spacing={2}>
        {teamArray.map(team => (
          <Grid item xs={12} sm={6} md={3} key={team.email}>
            <TeamCard team={team} />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <section style={{ marginLeft: "1.6rem" }}>
      <article>
        <Typography variant="h5" component="div" sx={{
          flexGrow: 1,
          color: 'gray',
          mt: '1rem',
          mb: '0.5rem'
        }}>
          {adminTeamTitle}
        </Typography>
        {adminTeam.length ? (
          renderCardRow(adminTeam)
        ) : (
          <Alert severity="warning">
            No results found {search && (`for "${search}"`)}
          </Alert>
        )}
      </article>
      <Divider sx={{ my: 5, height: 2 }} />
      <article>
        <Typography variant="h5" component="div" sx={{
          flexGrow: 1,
          color: 'gray',
          marginTop: '1rem',
          marginBottom: '0.5rem',
          margin: '1rem 0.5rem 0.5 rem 1rem'
        }}>
          {memberTeamTitle}
        </Typography>
        {memberTeam.length ? (
          renderCardRow(memberTeam)
        ) : (
          <Alert severity="warning">
            No results found {search && (`for "${search}"`)}
          </Alert>
        )}
      </article>
      <Divider sx={{ my: 5, height: 2 }} />
    </section>
  );
}

export default Teams;
