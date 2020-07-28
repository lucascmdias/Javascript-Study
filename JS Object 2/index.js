import {Cliente} from "./cliente.js"
import {ContaCorrente} from "./contacorrente.js"
import { ContaPoupanca } from "./contapoupanca.js"
import { Conta } from "./conta.js"

const cliente1 = new Cliente("lucas",23223)

const contacorrente1 = new ContaCorrente(555,cliente1,554)

contacorrente1.depositar(100)
contacorrente1.sacar(50)
console.log(contacorrente1)

const contapoupanca1 = new ContaPoupanca(100,contacorrente1.agencia,cliente1)

const conta1 = new Conta(232,100,cliente1)


