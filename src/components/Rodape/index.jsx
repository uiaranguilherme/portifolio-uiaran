import { Container, MsgAgradecimento, RedesSociais, Linkdin, GitHub, WhatsApp } from './styles';

function Rodape() {
  return (
        <Container>
            <MsgAgradecimento>
                <h3>Obrigado me visitar!</h3>
                <h4>Este site foi desenvolvido por Uiaran Guilherme</h4>
            </MsgAgradecimento>
            <RedesSociais>
                <div>
                    <a href="https://github.com/uiaranguilherme"><GitHub/></a>
                    <a href="https://www.linkedin.com/in/uiarancampos/"><Linkdin/></a>
                    <a href="https://api.whatsapp.com/send?phone=5541997498395"><WhatsApp/></a>
                </div>
                <div>
                    <h3>E-mail: uiaran@hotmail.com</h3>
                </div>
            </RedesSociais>
        </Container>
    );
}

export default Rodape;