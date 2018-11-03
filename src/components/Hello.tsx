// src/components/Hello.tsx

import * as React from 'react';

// tslint:disable-next-line:interface-name
export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

class Hello extends React.Component<Props, object> {
  public render() {
    const { name, enthusiasmLevel = 1 } = this.props;
    const onIncrement = this.props.onIncrement ? this.props.onIncrement : null;
    const onDecrement = this.props.onDecrement ? this.props.onDecrement : null;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    if (onIncrement && onDecrement) {
      return (
        <div className="hello">
          <div className="greeting">
            Hello {name + this._getExclamationMarks(enthusiasmLevel)}
          </div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      );
    } else {
      return (
        <div className="hello">
          <div className="greeting">
            Hello {name + this._getExclamationMarks(enthusiasmLevel)}
          </div>
        </div>
      );
    }
  }

  private _getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
  }
}

export default Hello;
