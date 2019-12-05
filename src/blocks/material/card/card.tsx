import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export const CardBlock = (props) => {
  return (
    <div>
      <Card>
        <CardContent>
          {props.text}
        </CardContent>
      </Card>
    </div>
  );
}

