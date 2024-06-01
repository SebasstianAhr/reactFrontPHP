import React from "react";
import "./table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function Table() {
  return (
    <table>
      <thead>
        <tr className="tr-head">
          <th>Nombre</th>
          <th>Descripcion</th>
          <th className="table-options">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tablet</td>
          <td>pantalla grande para dibujar</td>
          <td className="td-options">
            <FontAwesomeIcon className="fa-edit" icon={faPenToSquare} />
            <FontAwesomeIcon
              className="fa-trash"
              icon={faTrashCan}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
