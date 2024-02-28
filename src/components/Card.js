import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function TeamCard({ team }) {
    return (
        <Card sx={{
            display: 'flex',
            alignItems: 'center',
            maxWidth: 345,
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
                transform: 'scale(1.1) rotate(3deg)',
                boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
            },
        }}>
            <Avatar src={team.img} alt="user img" sx={{ width: 60, height: 60, ml: 1 }} />
            <CardContent sx={{ flexGrow: 1, flexBasis: 'auto', flexWrap: 'wrap' }}>
                <Typography variant="h6" fontWeight="bold" style={{ color: '#3c3838', marginBottom: 1 }}>
                    {`${team.first_name} ${team.last_name}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {team.email}
                </Typography>
            </CardContent>
        </Card>
    );
}
