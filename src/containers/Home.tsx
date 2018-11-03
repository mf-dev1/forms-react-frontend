import * as React from 'react';

class Home extends React.Component {
  public render() {
    const elements = ['Form1', 'Form2', 'Form3', 'Form4'];
    const pageContent = (
      <ul className="List">
        {elements.map((element, i) => (
          <li key={i}>{element}</li>
        ))}
      </ul>
    );
    return <div className="Home">{pageContent}</div>;
  }
}

export default Home;
