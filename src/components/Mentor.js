import React, { Component } from "react";

export class Mentor extends Component {
  render(props) {
    const { name, company, college, imageUrl, tags, profilelink } = this.props;
    return (
      <div>
        <div className="card my-3" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="img" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{company}</p>
            <p className="card-text">{college}</p>
            <div className="container my-2">
              {tags.slice(0, tags.length > 5 ? 5 : tags.length).map((elm) => {
                return <span class="badge badge-dark">#{elm}</span>;
              })}
            </div>
            <a
              href={profilelink}
              target="_blank"
              class="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Mentor;
