export class Funcionario {
  public matricula: number;
  public nome: string;
  public cargo: string;
  public salario: number;

  constructor(matricula: number, nome: string, cargo: string, salario: number) {
    this.matricula = matricula;
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }

  public exibirInformacoes(): string {
    return (
      `Matrícula: ${this.matricula}\n` +
      `Nome:      ${this.nome}\n` +
      `Cargo:     ${this.cargo}\n` +
      `Salário:   R$ ${this.salario.toFixed(2)}`
    );
  }
}