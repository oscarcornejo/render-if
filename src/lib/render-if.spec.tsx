import React from 'react';
import ReactDOM from 'react-dom';
import { act } from '@testing-library/react';
import { RenderIf } from './render-if';

describe('useViewportSize', () => {
  it('should render successfully', () => {
    // Setup
    let container = document.createElement('div');
    document.body.appendChild(container);

    const App = () => {
      return (
        <RenderIf isTrue={true}>
          <div>Content!</div>
        </RenderIf>
      );
    };

    act(() => {
      ReactDOM.render(<App />, container);
    });

    expect(container.textContent).toEqual('Content!');

    // Teardown
    document.body.removeChild(container);
    container = HTMLDivElement.prototype;
  });
});
