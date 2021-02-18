import React from 'react';

import Task from './Task';

export default {
  component: Task,
  title: 'Task',
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};

const longString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum elit ac lorem pretium malesuada. Integer a porttitor nulla. Maecenas accumsan interdum arcu non feugiat. Fusce tincidunt ligula ac suscipit pulvinar. Aenean eu eleifend nibh. Praesent est nulla, sodales vitae tristique nec, aliquet sed sem.";

export const TextOverflow = Template.bind({});
TextOverflow.args = {
  task: {
    ...Default.args.task,
    title: longString,
  }
}