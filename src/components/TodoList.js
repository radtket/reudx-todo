import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Tooltip, Button, Checkbox, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { toggleTodoAction, deleteTodoAction } from "../actions/todos";

const TodoList = () => {
  const { todos } = useSelector(state => {
    return state.todos;
  });

  const dispatch = useDispatch();

  return (
    <List
      dataSource={todos}
      renderItem={({ id, complete, name }) => (
        <List.Item
          actions={[
            <Tooltip title="delete">
              <Button
                icon={<DeleteOutlined />}
                onClick={() => {
                  dispatch(deleteTodoAction(id));
                }}
                shape="circle"
                type="danger"
              />
            </Tooltip>,
          ]}
        >
          <List.Item.Meta
            avatar={
              <Checkbox
                checked={complete}
                onChange={() => {
                  dispatch(toggleTodoAction(id));
                }}
              />
            }
            title={<Typography.Text delete={complete}>{name}</Typography.Text>}
          />
        </List.Item>
      )}
    />
  );
};

export default TodoList;
