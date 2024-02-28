import { useContext } from 'react'
import DataContext from '../context/DataContext'
import { Typography, Grid, Alert, Divider, Button, CircularProgress } from '@mui/material';
import TeamCard from '../components/Card';
import AddIcon from '@mui/icons-material/Add';

const Teams = () => {
  const { loading, adminTeam, memberTeam, memberTeamTitle, adminTeamTitle, search } = useContext(DataContext);

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

  if (loading)
    return (
      <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>
        <CircularProgress size={60} />
      </div>
    );

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
          search && (
            <Alert severity="warning">
              No results found {search && (`for "${search}"`)}
            </Alert>
          )
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
          search && (
            <Alert severity="warning">
              No results found {search && (`for "${search}"`)}
            </Alert>
          )
        )}
      </article>
      <Divider sx={{ my: 5, height: 2 }} />
      <Button
        variant="contained"
        color="primary"
        sx={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          zIndex: 9999,
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          minWidth: 'unset',
          minHeight: 'unset',
          cursor: 'not-allowed'
        }}
        title='Event is not derived'
      >
        <AddIcon />
      </Button>
    </section >
  );
}

export default Teams;
