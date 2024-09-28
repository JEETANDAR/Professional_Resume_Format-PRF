import "./Gallary-View.css"; // Import the CSS file

const Card = ({ image, imageTitle}, index) => {
  return (
    <>
      <div className="Container" key={index}>
        <div className="Certificate">
          <img src={image} alt="" />
        </div>
        <div className="Description">
          <h1>{imageTitle}</h1>
        </div>
      </div>
    </>
  );
};

export default Card;
