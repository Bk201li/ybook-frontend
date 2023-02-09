import DoNotDisturbOnRoundedIcon from '@mui/icons-material/DoNotDisturbOnRounded';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import IFriendship from '~/types/friendship.type';
import { friendshipStatus } from '~/pages/friends';

const FriendsList = ({ friendships, status }: { friendships: IFriendship[]; status: string }) => {
  return (
    <div>
      {friendships.map((friendship) => {
        return friendship.status === status ? (
          <div className="flex items-center justify-between" key={friendship.id}>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full"
                src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                alt=""
              />

              <p className="ml-2">
                {friendship.from.firstname} {friendship.from.lastname}
              </p>
            </div>

            <div>
              {friendship.status === friendshipStatus.PENDING && (
                <IconButton>
                  <AddCircleIcon className="mr-1" color="success" />
                </IconButton>
              )}
              <IconButton>
                <DoNotDisturbOnRoundedIcon sx={{ color: red[500] }} />
              </IconButton>
            </div>
          </div>
        ) : (
          <div key={friendship.id}></div>
        );
      })}
    </div>
  );
};

export default FriendsList;
