import * as React from 'react';
import { connect } from 'react-redux';

export interface DetailItem {
  id: number;
  text: string;
}
export interface Props {
  items: DetailItem[];
  title: string;
}
class Detail extends React.Component<Props> {
  public render() {
    const items = this.props.items;

    const pageContent = (
      <ul className="detail-items">
        {items.map((item, i) => (
          <li key={item.id}>
            {item.id} {item.text}
          </li>
        ))}
      </ul>
    );
    return <div className="detail-container">{pageContent}</div>;
  }
}
// Map Redux state to component props
function mapStateToProps(state: any) {
  return {
    items: state.detail.items,
    title: state.detail.title
  };
}

// Connected Component
export default connect(
  mapStateToProps,
  null
)(Detail);
