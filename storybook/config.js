import { configure } from '@storybook/react';

const loadStories = () => {
    require('./stories/button')
};

configure(loadStories, module);