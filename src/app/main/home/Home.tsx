import React from "react";
import NavBar from "../../shared-components/navbar/NavBar";
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
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';
import ImageIcon from "@mui/icons-material/Image";
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
    avatar: "/media/profile/mada.png",
    media: "/media/cbum.jpg",
  },
  {
    id: 2,
    name: "Ali Chamass",
    content:
      "Bonjour, Enchanté Ali fan de fiesta et d'alcool vraiment beaucoup je suis Libanné mes amis m'appelent prince Ali t'as la ref ? C'est une ref au film d'animation Disney Aladin premier du nom pas celui fait par Kev Adams qui lui est beaucoup plus inégale parce que c'est pas gentil de dire que les choses puent la merde.",
    avatar: "/media/profile/chamassali.png",
    media: "/media/cbum.jpg",
  },
  {
    id: 3,
    name: "Lucas Dindault",
    content:
      "Bonjour, Lucas Dindault enchanté ! Grand pongiste à mes heures perdus et hater de fou de ce chien de Téo avec ça chatte de merde, mais aussi développeur segnor capable de déboguer les projets les plus buggés de mes collègues notamment sur un application React. Ancien fumeur je défie l'autorité de mes professeur en Vapant en cours comme un THUG.",
    avatar: "/media/profile/dindomino.png",
  },
  {
    id: 4,
    name: "Micka",
    content:
      "Bonjour, Micka ozebfiuf pihzbfp i z bpziebcp aziebfpiezhfb bp izehf blkbv dspbjvqsdq sihpebf hz i upvihephqzdv bp qsbdv puzbeub.",
    avatar: "",
  },
  {
    id: 5,
    name: "Etienne",
    content:
      "Bonjour je m'appelle Etienne, moi dans la vie je suis un kiffeur. J'aime passer mon temps libre à jouer sur LOL. Venez me rejoindre sur mon Twitch, tous les soirs à 21h. Soyez nombreux xD !!! Sinon je recherche mon âme soeur, celle qui saura me comprendre, m'accompagner dans les moments les plus dur. Je veux pouvoir m'épanouir et fonder une famille. ",
    avatar: "",
  },
];

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <>
      <Menu />
      {posts.map(({ id, name, content, avatar, media }) => (
        <Card
          sx={{
            position: "relative",
            top: "20px",
            maxWidth: "100%",
            maxHeight: "100%",
            overflow: "auto",
            borderRadius: 4,
            boxShadow: "0px 2px 10px",
            px: 2,
            my: 2,
          }}
        >
          <React.Fragment key={id}>
            <CardHeader
              avatar={<Avatar alt="profil" src={avatar} />}
              titleTypographyProps={{ variant: "h6", display: "flex", justifyContent: "start" }}
              title={name}
              sx={{pb: "10px"}}
            />
            <CardContent sx={{pt: "1px"}}>
              <Typography variant="body2" align="left">{content}</Typography>
            </CardContent>
            <CardMedia
              component="img"
              image={media}
              alt="User Media"
              sx={{ objectFit: "contain", borderRadius: "15px" }}
            />
            <CardActions className="flex justify-left">
              <ThumbUpIcon sx={{ width: "30px", pr: "10px" }} />
              <ModeCommentRoundedIcon sx={{ width: "30px", pl: "10px" }} />
            </CardActions>
          </React.Fragment>
        </Card>
      ))}
      <NavBar />
    </>
  );
};

export default Home;
