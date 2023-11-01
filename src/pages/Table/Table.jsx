import styles from "./table.module.scss";

const Table = () => {
  return (
    <table>
      <tr>
        <th>Car brand</th>
        <th>Establishment year</th>
      </tr>
      <tr>
        <td>Audi</td>
        <td>1909</td>
      </tr>
      <tr>
        <td>BMW</td>
        <td>1916</td>
      </tr>
      <tr>
        <td>Mercedes-Benz</td>
        <td>1926</td>
      </tr>
      <tr>
        <td>Volkswagen</td>
        <td>1937</td>
      </tr>
    </table>
  );
};

export default Table;
