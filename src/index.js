import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Jogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { valor: "", numero: "", totalTentativas: ""};
    }

    sortearNumero() {
        return Math.floor(Math.random() * 99) + 1;
    }

    componentDidMount() {
        this.setState({ numero: this.sortearNumero() });
    }

    atualizaValor(event) {
        this.setState({ valor: event.target.value });
    }

    quantidadeTentativas(event) {
        let t = event.target;
        t++;
    }

    tentativas() {
        this.setState({tentativa:this.quantidadeTentativas()})
    }

    verifica(event) {
        const u = this.state.valor;
        const n = this.state.numero;
        const t = this.state.tentativa;

        if (u == n) alert("acertou\n "+t+" tentativas");
        else if (u > n) alert("seu palpite foi acima\n");
        else alert("seu palpite foi abaixo\n");

        event.preventDefault(); //Cancela o evento. Sem essa linha o browser sai da aplicação

    }

    render() {
        return (
            <form onSubmit={(e) => this.verifica(e)}>
                <label>
                    Seu palpite:
                    <input
                        type="number"
                        min="1"
                        max="100"
                        value={this.state.valor}
                        onChange={(e) => this.atualizaValor(e)}
                    />
                </label>
                <input type="submit" value="Enviar"/>
                <input type="button" value="Novo"/>
            </form>

        );
    }
}

ReactDOM.render(<Jogo />, document.getElementById("root"));
