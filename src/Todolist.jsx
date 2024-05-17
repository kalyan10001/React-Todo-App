import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  List,
  ListItem
} from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon, ArrowUpward, ArrowDownward } from '@mui/icons-material';

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function removeTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updated = [...tasks];
      [updated[index], updated[index - 1]] = [updated[index - 1], updated[index]];
      setTasks(updated);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updated = [...tasks];
      [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
      setTasks(updated);
    }
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        To-Do List
      </Typography>
      <div className="input-add" style={{ display: 'flex', marginBottom: '16px' }}>
        <TextField
          label="Enter task"
          variant="outlined"
          fullWidth
          value={newTask}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={addTask}
          style={{ marginLeft: '8px' }}
        >
          Add
        </Button>
      </div>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} style={{ padding: '0' }}>
            <Card style={{ width: '100%', marginBottom: '16px' }}>
              <CardContent>
                <Typography variant="body1">{task}</Typography>
              </CardContent>
              <CardActions>
                <IconButton color="secondary" onClick={() => removeTask(index)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton onClick={() => moveTaskUp(index)}>
                  <ArrowUpward />
                </IconButton>
                <IconButton onClick={() => moveTaskDown(index)}>
                  <ArrowDownward />
                </IconButton>
              </CardActions>
            </Card>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Todolist;
