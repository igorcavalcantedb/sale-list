import NotificationButton from "../NotificationButton";
import './styles.css';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import axios from "axios";
import { BASE_URL } from "../../util/request";
import { Sale } from "../../models/sale";

function SalesCard() {

  const dateYearAgo = new Date(new Date().setDate(new Date().getDate() - 365));
  const [dateMin, setDateMin] = useState(dateYearAgo);
  const [dateMax, setDateMax] = useState(new Date());

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/v1/sales/find-all`)
      .then(response => {
        setSales(response.data.content);
        console.log(response.data.content);
      })
    console.log("Teste");
  }, []);

  return (

    <div>
      <DatePicker
        selected={dateMin}
        onChange={(date: Date) => setDateMin(date)}
        className="dsmeta-form-control"
        dateFormat="dd/MM/yyyy"
      />
      <DatePicker
        selected={dateMax}
        onChange={(date: Date) => setDateMax(date)}
        className="dsmeta-form-control"
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
          {
            sales.map(sale => {
              return (
                <tr key={sale.id}>
                  <td  className="show992">{sale.id}</td>
                  <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                  <td>{sale.sellerName}</td>
                  <td className="show992">{sale.visited}</td>
                  <td className="show992">{sale.deals}</td>
                  <td>R$ {sale.amount.toFixed(2)}</td>
                  <td>
                    <NotificationButton />
                  </td>
                </tr>

              )
            })
          }

        </tbody>

      </table>
    </div>
  )
}

export default SalesCard;