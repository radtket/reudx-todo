import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { Form, Input, Button } from "antd";
import { addTodoAction } from "../actions/todos";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  return (
    <Form
      initialValues={{
        remember: true,
      }}
      name="basic"
      onFinish={values => {
        const isTodoBlank = todo.trim() === "";

        if (isTodoBlank) {
          return;
        }

        dispatch(
          addTodoAction({
            id: uuid(),
            name: values.todo,
            complete: false,
          })
        );

        setTodo("");
      }}
      onFinishFailed={errorInfo => {
        // eslint-disable-next-line no-console
        console.log("Failed:", errorInfo);
      }}
    >
      <Form.Item
        label="Todo"
        name="todo"
        rules={[
          {
            message: "Add a todo",
          },
        ]}
      >
        <Input
          onChange={({ target }) => {
            setTodo(target.value);
          }}
          value={todo}
        />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TodoInput;
