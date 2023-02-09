import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IUser from '~/types/user.type';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFriendship } from '~/store/api/services/friendships';
import { Typography } from '@mui/material';

const UsersList = ({ users }: { users: IUser[] }) => {
  const queryClient = useQueryClient();
  const createFriendshipMutation = useMutation({
    mutationFn: createFriendship,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['friendships'] });
    },
  });
  const handleAddFriend = (userId: number) => {
    createFriendshipMutation.mutate({ toId: userId });
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {users.map((user) => {
        return (
          user.id !== 1 && (
            <ListItem key={user.id}>
              <ListItemAvatar>
                <Avatar>
                  <AccountCircleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <div className="flex justify-between">
                    <Typography>{`${user.firstname} ${user.lastname}`}</Typography>
                    <IconButton onClick={() => handleAddFriend(user.id)}>
                      <AddCircleOutlineIcon />
                    </IconButton>
                  </div>
                }
              />
            </ListItem>
          )
        );
      })}
    </List>
  );
};

export default UsersList;
