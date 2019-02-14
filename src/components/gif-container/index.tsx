import * as React from 'react';
import { Gif } from '../../AppState';
import { Button } from '../../../node_modules/semantic-ui-react';
import { UserConsumer } from '../contexts/userContext';

const GifContainer = (props: Gif) => (
  <div>
    <h2>{props.title}</h2>
    <iframe
      src={props.embed_url}
      width="480"
      height="360"
      frameBorder="0"
      className="giphy-embed"
      allowFullScreen
    />
    <AddButton />
  </div>
);

const AddButton = () => {
  return (
    <UserConsumer>
      {context => (context.user ? <Button>Add to library</Button> : null)}
    </UserConsumer>
  );
};

export default GifContainer;
