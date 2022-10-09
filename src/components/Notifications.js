import {Alert} from "react-bootstrap";
import './Notifications.css';
import {useEffect} from "react";

function Notifications({alerts, setAlerts}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if(!alerts.length) {return;}

      let newAlerts = JSON.parse(JSON.stringify(alerts));
      newAlerts.shift();
      setAlerts(newAlerts);
    }, 1000);
    return () => clearTimeout(timer);
  }, [alerts]);

  return <div className={'custom-alert'}>
    {alerts.filter((el, index, data) => index >= (data.length - 5))
        .map(el => <Alert variant={el.type} key={el.created}>{el.text}</Alert>)}
  </div>
}

export default Notifications