import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import TagIcon from "@mui/icons-material/Tag";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";


export const TagsBlock = ({ items, isLoading = true }) => {
    const styles = {
        root: {
          margin: "0 0 20px 0",
        },
        tittle: {
          padding: '15px 15px 0 15px'
        },
      };
          

  return (
    <div>
      <List>
        {(isLoading ? [...Array(5)] : items).map((name, i) => (
          <a
            style={{ textDecoration: "none", color: "black" }}
            href={`/tags/${name}`}
          >
            <ListItem key={i} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TagIcon />
                </ListItemIcon>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <ListItemText primary={name} />
                )}
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );
};