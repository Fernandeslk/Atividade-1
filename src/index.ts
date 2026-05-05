import { Funcionario } from "./Funcionario";
import { Empresa } from "./Empresa";

const empresa = new Empresa();

function cadastrarFuncionarios(): void {
  console.log("\n══════════════════════════════════");
  console.log("       CADASTRO DE FUNCIONÁRIOS   ");
  console.log("══════════════════════════════════");

  empresa.adicionarFuncionario(new Funcionario(1001, "Ana Lima",      "Desenvolvedora",      7500.00));
  empresa.adicionarFuncionario(new Funcionario(1002, "Carlos Souza",  "Analista de Dados",   6200.00));
  empresa.adicionarFuncionario(new Funcionario(1003, "Beatriz Rocha", "Gerente de Projetos", 9800.00));
  empresa.adicionarFuncionario(new Funcionario(1001, "Duplicado",     "Teste",               0));
}

function atualizarSalarios(): void {
  console.log("\n══════════════════════════════════");
  console.log("       ATUALIZAÇÃO DE SALÁRIOS    ");
  console.log("══════════════════════════════════");

  empresa.atualizarSalario(1002, 7000.00);
  empresa.atualizarSalario(9999, 5000.00);
  empresa.atualizarSalario(1001, -100);
}

function consultarFuncionarios(): void {
  console.log("\n══════════════════════════════════");
  console.log("      CONSULTA DE FUNCIONÁRIOS    ");
  console.log("══════════════════════════════════");

  const encontrado: Funcionario | undefined = empresa.consultarFuncionario(1003);
  if (encontrado) {
    console.log("\n📋 Funcionário encontrado:");
    console.log(encontrado.exibirInformacoes());
  } else {
    console.log("❌ Funcionário não encontrado.");
  }

  const naoEncontrado = empresa.consultarFuncionario(8888);
  if (!naoEncontrado) {
    console.log("\n❌ Matrícula 8888: Funcionário não encontrado.");
  }
}

cadastrarFuncionarios();
atualizarSalarios();
consultarFuncionarios();

console.log(`\n📊 Total de funcionários cadastrados: ${empresa.totalFuncionarios()}`);