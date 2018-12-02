import React from 'react';
import style from "../../styles/table.js";

const EmptyTable = ({ name, size }) => {
  return(
    <tr>
      <td className="table__cell" colSpan={size}>
        {`No ${name} yet`}
      </td>
      <style jsx>{style}</style>
    </tr>
  );
}

export default EmptyTable;
