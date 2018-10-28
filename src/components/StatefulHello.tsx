// src/components/StatefullHello.tsx

import * as React from 'react';
import '../styles/Hello.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}

class StatefullHello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
  }

  public onIncrement = () =>
    this._updateEnthusiasm(this.state.currentEnthusiasm + 1);
  public onDecrement = () =>
    this._updateEnthusiasm(this.state.currentEnthusiasm - 1);

  public render() {
    const { name } = this.props;

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + this._getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    );
  }

  private _updateEnthusiasm(currentEnthusiasm: number) {
    this.setState({ currentEnthusiasm });
  }
  private _getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
  }
}

export default StatefullHello;
