import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/notification-icon.svg'
import { BASE_URL } from '../../util/request';
type Props = {
  saleId: number;
}
function handleClick(id: number) {
  console.log("ID da venda =" + id);
  axios.post(`${BASE_URL}/v1/sales/notification`)
    .then(
      response => {
        
        toast.info("sms sent successfully!");

      }
    );
}

function NotificationButton({ saleId }: Props) {
  return (
    <div className="dsmeta-red-btn-container" onClick={() => handleClick(saleId)}>
      <div className="dsmeta-red-btn">
        <img src={icon} alt="Notificar" />
      </div>
    </div>
  )
}

export default NotificationButton;