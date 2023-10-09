import "./BrandTable.css";

const BrandTable = (props) => {
  return (
    <div className="Brand-table">
      <table>
        <tr>
          <th colSpan={4}>
            <label>{props.tableHeader}</label>
          </th>
        </tr>
        <tr>
          <td>
            <img
              className="brand-image-item"
              src={process.env.PUBLIC_URL + props.image1}
              alt="placeholder"
            ></img>
          </td>
          <td>
            <img
              className="brand-image-item"
              src={process.env.PUBLIC_URL + props.image2}
              alt="placeholder"
            ></img>
          </td>
          <td>
            <img
              className="brand-image-item"
              src={process.env.PUBLIC_URL + props.image3}
              alt="placeholder"
            ></img>
          </td>
          <td>
            <img
              className="brand-image-item"
              src={process.env.PUBLIC_URL + props.image4}
              alt="placeholder"
            ></img>
          </td>
        </tr>
        <tr>
          <td>
            <img
              className="brand-image-item"
              src={process.env.PUBLIC_URL + props.image5}
              alt="placeholder"
            ></img>
          </td>
          <td>
            <img
              className="brand-image-item"
              src={process.env.PUBLIC_URL + props.image6}
              alt="placeholder"
            ></img>
          </td>
          <td>
            <img
              className="brand-image-item"
              src={process.env.PUBLIC_URL + props.image7}
              alt="placeholder"
            ></img>
          </td>
          <td>
            <img
              className="brand-image-item"
              src={process.env.PUBLIC_URL + props.image8}
              alt="placeholder"
            ></img>
          </td>
        </tr>
        <tr>
          <td>
            <img
              className="brand-image-item"
              src={process.env.PUBLIC_URL + props.image9}
              alt="placeholder"
            ></img>
          </td>
          <td>
            <img
              className="brand-image-item"
              src={process.env.PUBLIC_URL + props.image10}
              alt="placeholder"
            ></img>
          </td>
          <td>
            <img
              className="brand-image-item"
              src={process.env.PUBLIC_URL + props.image11}
              alt="placeholder"
            ></img>
          </td>
          <td>
            <img
              className="brand-image-item"
              src={process.env.PUBLIC_URL + props.image12}
              alt="placeholder"
            ></img>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default BrandTable;
