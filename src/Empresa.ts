import { Funcionario } from "./Funcionario";

export class Empresa {
  private funcionarios: Funcionario[] = [];

  public adicionarFuncionario(funcionario: Funcionario): void {
    const existe = this.funcionarios.find((f) => f.matricula === funcionario.matricula);
    if (existe) {
      console.error(`❌ Erro: Já existe um funcionário com a matrícula ${funcionario.matricula}.`);
      return;
    }
    this.funcionarios.push(funcionario);
    console.log(`✅ Funcionário "${funcionario.nome}" cadastrado com sucesso!`);
  }

  public atualizarSalario(matricula: number, novoSalario: number): void {
    if (novoSalario <= 0) {
      console.error("❌ Erro: O salário deve ser um valor positivo.");
      return;
    }
    const funcionario = this.consultarFuncionario(matricula);
    if (!funcionario) {
      console.error(`❌ Erro: Funcionário com matrícula ${matricula} não encontrado.`);
      return;
    }
    const salarioAnterior = funcionario.salario;
    funcionario.salario = novoSalario;
    console.log(`✅ Salário de "${funcionario.nome}" atualizado: R$ ${salarioAnterior.toFixed(2)} → R$ ${novoSalario.toFixed(2)}`);
  }

  public consultarFuncionario(matricula: number): Funcionario | undefined {
    return this.funcionarios.find((f) => f.matricula === matricula);
  }

  public totalFuncionarios(): number {
    return this.funcionarios.length;
  }
}