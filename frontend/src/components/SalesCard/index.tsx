import NotificationButton from "../NotificationButton";
import './styles.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
function SalesCard() {
  const dateYearAgo = new Date(new Date().setDate(new Date().getDate() - 365));
  const [dateMin, setDateMin] = useState(dateYearAgo);
  const [dateMax, setDateMax] = useState(new Date());

  return (
    
    <div>
      <DatePicker
        selected={dateMin}
        onChange={(date: Date) =>  setDateMin(date) }
        className ="dsmeta-form-control"
        dateFormat="dd/MM/yyyy"
      />
      <DatePicker
        selected={dateMax}
        onChange={(date: Date) =>  setDateMax(date) }
        className ="dsmeta-form-control"
        dateFormat="dd/MM/yyyy"
      />
      <table className="dsmeta-sales-table">
        <thead>
          <tr>
            <th className="show992">ID</th>
            <th className="show576">Data</th>
            <th>Vendedor</th>
            <th className="show992">Visitas</th>
            <th className="show992">Vendas</th>
            <th>Total</th>
            <th>Notificar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="show992">#341</td>
            <td className="show576">08/07/2022</td>
            <td>Anakin</td>
            <td className="show992">15</td>
            <td className="show992">11</td>
            <td>R$ 55300.00</td>
            <td>
              <NotificationButton />
            </td>
          </tr>
          <tr>
            <td className="show992">#341</td>
            <td className="show576">08/07/2022</td>
            <td>Anakin</td>
            <td className="show992">15</td>
            <td className="show992">11</td>
            <td>R$ 55300.00</td>
            <td>
              <NotificationButton />
            </td>
          </tr>
          <tr>
            <td className="show992">#341</td>
            <td className="show576">08/07/2022</td>
            <td>Anakin</td>
            <td className="show992">15</td>
            <td className="show992">11</td>
            <td>R$ 55300.00</td>
            <td>
              <NotificationButton />
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default SalesCard;