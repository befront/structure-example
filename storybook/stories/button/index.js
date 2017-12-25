import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from 'sharedComponents/button';

storiesOf('Button', module)
    .add('default', () => (
        <Button>
            Hello
        </Button>
    ));