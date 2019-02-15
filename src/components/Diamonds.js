import React, { Component } from 'react';
import dead_diamond from '../img/dead_diamond.png';

// reference breakpoints
// $breakpoints: (
//   xs: 576px,
//   sm: 768px,
//   md: 992px,
//   lg: 1200px
// );

class Diamonds extends Component {
  render() {
    return (
      <section className="Diamonds">
        <article className="Diamonds-grid">
          {this.props.data.map((o, i, arr)=>{
              var cn = "Diamonds-diamond numb-" + ++i;
              return (
                <div key={++i} className={cn}>
                  <img src={o.default} alt="Project" />
                </div>
              )
            })
          }
        </article>
      </section>
    );
  }
}

export default Diamonds;