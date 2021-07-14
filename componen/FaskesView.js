import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Divider } from '@material-ui/core';
import { Badge } from '@chakra-ui/layout';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotesIcon from '@material-ui/icons/Notes';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

export default function FaskesView({data, tanggal}) {
  const kuotaSisa = data.result.map(e => e.tanggal_vaksin).indexOf(tanggal)
  return (
    <Card>
      <CardHeader style={{backgroundColor: "#e0e0e0", textAlign: 'center'}} title={data.datafaskes[0].faskes}/>
      <Divider />
      <CardContent>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <NotesIcon />
            </ListItemIcon>
            <ListItemText primary="Kuota" />
            {Math.abs(data.result[kuotaSisa].quota) > 0 ? (
              <Badge colorScheme="green">{Math.abs(data.result[kuotaSisa].quota)} Dosis</Badge>
            ) : (
              <Badge colorScheme="red">{Math.abs(data.result[kuotaSisa].quota)} Dosis</Badge>
            )}
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <IndeterminateCheckBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Sisa" />
            {Math.abs(data.result[kuotaSisa].sisa) > 0 ? (
              <Badge colorScheme="green">{Math.abs(data.result[kuotaSisa].sisa)} Dosis</Badge>
            ) : (
              <Badge colorScheme="red">{Math.abs(data.result[kuotaSisa].sisa)} Dosis</Badge>
            )}
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}