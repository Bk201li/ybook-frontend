import React from "react";
import Menu from "../../shared-components/menu/Menu";
import Box from "@mui/material/Box";
import { relative } from "path";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import EmailIcon from "@mui/icons-material/Email";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { ListItemText } from "@mui/material";

interface HomeProps {}

const posts = [
  {
    id: 1,
    name: "Clément Llorens",
    content:
      "Bonjour, Clément fan de musculation et de femme, j'adore passer du temps avec mes amis et ma femme !",
    avatar: "/ybook-frontend/src/assets/media/mada.png",
  },
  {
    id: 2,
    name: "Ali Chamass",
    content:
      "Bonjour, Enchanté Ali fan de fiesta et d'alcool vraiment beaucoup je suis Libanné mes amis m'appelent prince Ali t'as la ref ? C'est une ref au film d'animation Disney Aladin premier du nom pas celui fait par Kev Adams qui lui est beaucoup plus inégale parce que c'est pas gentil de dire que les choses puent la merde.",
    avatar: "/ybook-frontend/src/assets/media/chamassali.png",
  },
  {
    id: 3,
    name: "Lucas Dindault",
    content:
      "Bonjour, Lucas Dindault enchanté ! Grand pongiste à mes heures perdus et hater de fou de ce chien de Téo avec ça chatte de merde, mais aussi développeur segnor capable de déboguer les projets les plus buggés de mes collègues notamment sur un application React. Ancien fumeur je défie l'autorité de mes professeur en Vapant en cours comme un THUG.",
    avatar: "/ybook-frontend/src/assets/media/dindomino.png",
  },
];

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <>
      <Menu />
      {/* <Card sx={{ maxWidth: 345, boxShadow: "0px 5px 10px" }}>
        {posts.map(({ id, name, content, avatar }) => (
          <React.Fragment key={id}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardHeader
              avatar={<Avatar alt="Profile Picture" src={avatar} />}
              name={name}
            />
            <CardContent content={content} >
            </CardContent>
            <CardActions>
              <ThumbUpIcon />
              <EmailIcon />
            </CardActions>
          </React.Fragment>
        ))}
      </Card> */}
    </>
  );
};

export default Home;
