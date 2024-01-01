import PropTypes from "prop-types";

const Numbers = ({ data }) => {
  return (
    <section>
    <div id="numbers-container">
      {data ? (
        data.map(([key, value]) => (
          <div key={key} className="number-box">
            <div className="number-fact">
              <p>{value}</p>
            </div>
            <div className="number">
              {key}
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </section>
  );
};

Numbers.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default Numbers;
