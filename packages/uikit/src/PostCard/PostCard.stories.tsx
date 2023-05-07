import React from 'react';
import { FaCloudDownloadAlt, FaEdit, FaTrash } from 'react-icons/fa';

import { Story, Meta } from '@storybook/react';

import Button from '~/Button';
import PostCard, { PostCardProps } from '~/PostCard';

export default {
  title: 'Layout/PostCard',
  component: PostCard,
} as Meta;

const Template: Story<PostCardProps> = (args) => <PostCard {...args} />;

const downloadIcon = <FaCloudDownloadAlt />;
const downloadButton = (
  <Button size="small" >
    Download
  </Button>
);

const editIcon = <FaEdit />;

const deleteIcon = <FaTrash />;
const renderingButton = (
  <Button size="small">
    Renderizando
  </Button>
);

export const Ready = Template.bind({});
Ready.args = {
  title: 'My First Post at CodeLeap Network!',
  username: '@Victor',
  hourPost: '25 minutes ago',
  content: 'Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.'
};
