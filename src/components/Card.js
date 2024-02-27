import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';


export default function TeamCard({ team }) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar src={team.img} aria-label="user img">
                    </Avatar>
                }
                title={
                    <Typography variant="h6" fontWeight="bold" style={{ color: '#3c3838' }}>
                        {`${team.first_name} ${team.last_name}`}
                    </Typography>
                }
                subheader={`${team.email}`}
            />
        </Card>
    );
}