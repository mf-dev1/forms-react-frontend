// src/components/StatefullHello.tsx

import * as React from 'react';
import Hello from '../components/Hello';
import '../styles/Hello.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}

class ReactHello extends React.Component<Props, State> {
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
    return (
      <Hello
        name={name}
        enthusiasmLevel={this.state.currentEnthusiasm}
        onIncrement={this.onIncrement}
        onDecrement={this.onDecrement}
      />
    );
  }

  private _updateEnthusiasm(currentEnthusiasm: number) {
    this.setState({ currentEnthusiasm });
  }
}

export default ReactHello;
