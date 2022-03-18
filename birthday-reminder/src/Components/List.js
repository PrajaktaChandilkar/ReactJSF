import React from "react";

function List({ people, removeThisPerson }) {
  return (
    <>
      {people.map((person) => {
        const { id, image, age, name } = person;
        return (
          <div className="person">
            <img src={image} alt={name} />

            <div className="name">
              <h4>
                {" "}
                {name}
                <i
                  style={{ color: "red" }}
                  className="fa fa-times"
                  aria-hidden="true"
                  onClick={() => removeThisPerson(id)}
                />
              </h4>

              <p>{age}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default List;
