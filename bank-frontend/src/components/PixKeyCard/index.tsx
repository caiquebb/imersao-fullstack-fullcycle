import classes from "./PixKeyCard.module.scss";
import { PixKey } from "../../model";
import { useContext } from "react";
import BankContext from "../../context/BankContext";

interface PixKeyCardProps {
  pixKey: PixKey;
}
const pixKeyKinds = {
  cpf: "CPF",
  email: "E-mail",
};

const PixKeyCard: React.FunctionComponent<PixKeyCardProps> = (props) => {
  const { pixKey } = props;
  const bank = useContext(BankContext);

  return (
    <div className={`${classes.root} ${classes[bank.cssCode]}`}>
      <p className={classes.kind}>{pixKeyKinds[pixKey.kind]}</p>
      <span className={classes.key}>{pixKey.key}</span>
    </div>
  );
};

export default PixKeyCard;
