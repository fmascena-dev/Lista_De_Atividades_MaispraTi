import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.*;

// ======================================================
// Exercício 1 — Encapsulamento (Classe Produto)
// ======================================================
class Produto implements Identificavel<String> {
    private String nome;
    private BigDecimal preco;
    private int quantidadeEmEstoque;

    public Produto(String nome, BigDecimal preco, int quantidadeEmEstoque) {
        setNome(nome);
        setPreco(preco);
        setQuantidadeEmEstoque(quantidadeEmEstoque);
    }

    @Override
    public String getId() {
        return nome;
    }

    public String getNome() { return nome; }
    public BigDecimal getPreco() { return preco; }
    public int getQuantidadeEmEstoque() { return quantidadeEmEstoque; }

    public void setNome(String nome) {
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("Nome inválido.");
        }
        this.nome = nome;
    }

    public void setPreco(BigDecimal preco) {
        if (preco == null || preco.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Preço não pode ser negativo ou nulo.");
        }
        this.preco = preco;
    }

    public void setQuantidadeEmEstoque(int quantidade) {
        if (quantidade < 0) {
            throw new IllegalArgumentException("Quantidade não pode ser negativa.");
        }
        this.quantidadeEmEstoque = quantidade;
    }
}

// ======================================================
// Exercício 2 — Encapsulamento com Validação de Regra (Desconto)
// ======================================================
class ProdutoComDesconto extends Produto {
    public ProdutoComDesconto(String nome, BigDecimal preco, int quantidade) {
        super(nome, preco, quantidade);
    }

    public void aplicarDesconto(double porcentagem) {
        if (porcentagem < 0 || porcentagem > 50) {
            throw new IllegalArgumentException("Desconto inválido. Deve estar entre 0 e 50%.");
        }
        BigDecimal desconto = getPreco().multiply(BigDecimal.valueOf(porcentagem / 100));
        setPreco(getPreco().subtract(desconto));
    }
}

// ======================================================
// Exercício 3 — Herança (Hierarquia de Funcionários)
// ======================================================
abstract class Funcionario {
    protected String nome;
    protected BigDecimal salario;

    public Funcionario(String nome, BigDecimal salario) {
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("Nome não pode ser nulo ou vazio.");
        }
        if (salario == null || salario.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Salário deve ser positivo e não nulo.");
        }
        this.nome = nome;
        this.salario = salario;
    }

    public String getNome() { return nome; }
    public BigDecimal getSalario() { return salario; }

    public abstract BigDecimal calcularBonus();
}

class Gerente extends Funcionario {
    public Gerente(String nome, BigDecimal salario) {
        super(nome, salario);
    }

    @Override
    public BigDecimal calcularBonus() {
        return salario.multiply(BigDecimal.valueOf(0.2));
    }
}

class Desenvolvedor extends Funcionario {
    public Desenvolvedor(String nome, BigDecimal salario) {
        super(nome, salario);
    }

    @Override
    public BigDecimal calcularBonus() {
        return salario.multiply(BigDecimal.valueOf(0.1));
    }
}

// ======================================================
// Exercício 4 — Polimorfismo com Interface (IMeioTransporte)
// ======================================================
interface IMeioTransporte {
    void acelerar();
    void frear();
}

class Carro implements IMeioTransporte {
    private int velocidade = 0;

    public void acelerar() {
        if (velocidade >= 200) throw new IllegalStateException("Carro já está na velocidade máxima!");
        velocidade += 20;
        System.out.println("Carro acelerando: " + velocidade + " km/h");
    }

    public void frear() {
        if (velocidade <= 0) throw new IllegalStateException("Carro já está parado!");
        velocidade -= 20;
        System.out.println("Carro freando: " + velocidade + " km/h");
    }
}

class Bicicleta implements IMeioTransporte {
    private int velocidade = 0;

    public void acelerar() {
        if (velocidade >= 40) throw new IllegalStateException("Bicicleta no limite!");
        velocidade += 5;
        System.out.println("Bicicleta acelerando: " + velocidade + " km/h");
    }

    public void frear() {
        if (velocidade <= 0) throw new IllegalStateException("Bicicleta já parada!");
        velocidade -= 5;
        System.out.println("Bicicleta freando: " + velocidade + " km/h");
    }
}

class Trem implements IMeioTransporte {
    private int velocidade = 0;

    public void acelerar() {
        if (velocidade >= 300) throw new IllegalStateException("Trem no limite!");
        velocidade += 50;
        System.out.println("Trem acelerando: " + velocidade + " km/h");
    }

    public void frear() {
        if (velocidade <= 0) throw new IllegalStateException("Trem já parado!");
        velocidade -= 50;
        System.out.println("Trem freando: " + velocidade + " km/h");
    }
}

// ======================================================
// Exercício 5 — Abstração (Sistema de Pagamentos)
// ======================================================
abstract class FormaPagamento {
    public abstract void validarPagamento(String dados) throws Exception;
    public abstract void processarPagamento(BigDecimal valor);
}

class CartaoCredito extends FormaPagamento {
    public void validarPagamento(String numeroCartao) throws Exception {
        if (numeroCartao == null || numeroCartao.length() != 16 || !numeroCartao.matches("\\d+")) {
            throw new Exception("Número do cartão inválido. Deve conter 16 dígitos.");
        }
    }

    public void processarPagamento(BigDecimal valor) {
        System.out.println("Pagamento de R$" + valor + " realizado no Cartão de Crédito.");
    }
}

class Boleto extends FormaPagamento {
    public void validarPagamento(String codigo) throws Exception {
        if (codigo == null || codigo.length() != 10 || !codigo.matches("\\d+")) {
            throw new Exception("Código do boleto inválido. Deve conter 10 dígitos.");
        }
    }

    public void processarPagamento(BigDecimal valor) {
        System.out.println("Pagamento de R$" + valor + " realizado via Boleto.");
    }
}

class Pix extends FormaPagamento {
    public void validarPagamento(String chave) throws Exception {
        if (chave == null || chave.trim().isEmpty()) {
            throw new Exception("Chave Pix inválida. Não pode ser nula ou vazia.");
        }
    }

    public void processarPagamento(BigDecimal valor) {
        System.out.println("Pagamento de R$" + valor + " realizado via Pix.");
    }
}

// ======================================================
// Exercício 6 — Imutabilidade e Objetos de Valor (Carrinho)
// ======================================================
enum Moeda { BRL, USD, EUR }

final class Dinheiro {
    private final BigDecimal valor;
    private final Moeda moeda;

    public Dinheiro(BigDecimal valor, Moeda moeda) {
        if (valor.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Valor não pode ser negativo.");
        }
        this.valor = valor.setScale(2, RoundingMode.HALF_EVEN);
        this.moeda = moeda;
    }

    public BigDecimal getValor() { return valor; }
    public Moeda getMoeda() { return moeda; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Dinheiro)) return false;
        Dinheiro d = (Dinheiro) o;
        return valor.equals(d.valor) && moeda == d.moeda;
    }

    @Override
    public int hashCode() {
        return Objects.hash(valor, moeda);
    }
}

class ItemCarrinho {
    private final Produto produto;
    private final int quantidade;

    public ItemCarrinho(Produto produto, int quantidade) {
        if (quantidade <= 0) throw new IllegalArgumentException("Quantidade deve ser > 0");
        this.produto = produto;
        this.quantidade = quantidade;
    }

    public Produto getProduto() { return produto; }
    public int getQuantidade() { return quantidade; }
}

class Carrinho {
    private final List<ItemCarrinho> itens;

    public Carrinho(List<ItemCarrinho> itens) {
        this.itens = Collections.unmodifiableList(new ArrayList<>(itens));
    }

    public List<ItemCarrinho> getItens() { return itens; }

    public Carrinho adicionar(ItemCarrinho item) {
        List<ItemCarrinho> novaLista = new ArrayList<>(itens);
        novaLista.add(item);
        return new Carrinho(novaLista);
    }
}

// ======================================================
// Exercício 7 — Generics (Repositório Genérico)
// ======================================================
interface Identificavel<ID> {
    ID getId();
}

interface IRepository<T extends Identificavel<ID>, ID> {
    void salvar(T entidade);
    Optional<T> buscarPorId(ID id);
    List<T> listarTodos();
    void remover(ID id);
}

class InMemoryRepository<T extends Identificavel<ID>, ID> implements IRepository<T, ID> {
    private final Map<ID, T> storage = new HashMap<>();

    public void salvar(T entidade) { storage.put(entidade.getId(), entidade); }
    public Optional<T> buscarPorId(ID id) { return Optional.ofNullable(storage.get(id)); }
    public List<T> listarTodos() { return List.copyOf(storage.values()); }
    public void remover(ID id) {
        if (!storage.containsKey(id)) {
            throw new IllegalArgumentException("Entidade com ID " + id + " não encontrada.");
        }
        storage.remove(id);
    }
}

// ======================================================
// Exercício 8 — Padrão Strategy (Frete)
// ======================================================
interface CalculadoraFrete {
    BigDecimal calcular(Pedido pedido);
}

class Pedido {
    private CalculadoraFrete estrategiaFrete;
    private BigDecimal valor;
    private String cep;

    public Pedido(BigDecimal valor, String cep, CalculadoraFrete estrategia) {
        if (valor == null || valor.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Valor do pedido deve ser positivo e não nulo.");
        }
        if (cep == null || cep.trim().isEmpty()) {
            throw new IllegalArgumentException("CEP não pode ser nulo ou vazio.");
        }
        if (estrategia == null) {
            throw new IllegalArgumentException("Estratégia de frete não pode ser nula.");
        }
        this.valor = valor;
        this.cep = cep;
        this.estrategiaFrete = estrategia;
    }

    public void setEstrategiaFrete(CalculadoraFrete estrategia) {
        if (estrategia == null) {
            throw new IllegalArgumentException("Estratégia de frete não pode ser nula.");
        }
        this.estrategiaFrete = estrategia;
    }

    public BigDecimal calcularFrete() {
        return estrategiaFrete.calcular(this);
    }

    public BigDecimal getValor() { return valor; }
    public String getCep() { return cep; }
}

class Sedex implements CalculadoraFrete {
    public BigDecimal calcular(Pedido pedido) {
        return new BigDecimal("20.00");
    }
}

class Pac implements CalculadoraFrete {
    public BigDecimal calcular(Pedido pedido) {
        return new BigDecimal("10.00");
    }
}

class RetiradaNaLoja implements CalculadoraFrete {
    public BigDecimal calcular(Pedido pedido) {
        return BigDecimal.ZERO;
    }
}

// ======================================================
// MAIN — Demonstração
// ======================================================
public class ExerciciosJava {
    public static void main(String[] args) {
        System.out.println("=== Demonstração dos Exercícios de Orientação a Objetos ===");

        demonstrarEncapsulamento();
        demonstrarHeranca();
        demonstrarPolimorfismo();
        demonstrarAbstracao();
        demonstrarImutabilidade();
        demonstrarGenerics();
        demonstrarStrategy();
    }

    private static void demonstrarEncapsulamento() {
        System.out.println("\n--- Exercícios 1 e 2: Encapsulamento ---");
        try {
            ProdutoComDesconto produto = new ProdutoComDesconto("Notebook", new BigDecimal("3000.00"), 10);
            System.out.println("Produto: " + produto.getNome() + ", Preço original: R$ " + produto.getPreco());

            produto.aplicarDesconto(15.0);
            System.out.println("Preço após desconto de 15%: R$ " + produto.getPreco());

            // Teste de validação
            try {
                produto.aplicarDesconto(60.0); // Deve lançar exceção
            } catch (IllegalArgumentException e) {
                System.out.println("Validação funcionando: " + e.getMessage());
            }
        } catch (Exception e) {
            System.err.println("Erro: " + e.getMessage());
        }
    }

    private static void demonstrarHeranca() {
        System.out.println("\n--- Exercício 3: Herança ---");
        try {
            List<Funcionario> funcionarios = List.of(
                new Gerente("João Silva", new BigDecimal("10000.00")),
                new Desenvolvedor("Maria Santos", new BigDecimal("5000.00"))
            );

            funcionarios.forEach(f -> {
                System.out.println(f.getNome() + " (" + f.getClass().getSimpleName() + ") - Salário: R$ " +
                    f.getSalario() + ", Bônus: R$ " + f.calcularBonus());
            });
        } catch (Exception e) {
            System.err.println("Erro: " + e.getMessage());
        }
    }

    private static void demonstrarPolimorfismo() {
        System.out.println("\n--- Exercício 4: Polimorfismo ---");
        try {
            List<IMeioTransporte> transportes = List.of(new Carro(), new Bicicleta(), new Trem());

            for (IMeioTransporte transporte : transportes) {
                System.out.println("\nTestando " + transporte.getClass().getSimpleName() + ":");
                transporte.acelerar();
                transporte.acelerar();
                transporte.frear();
            }
        } catch (Exception e) {
            System.err.println("Erro: " + e.getMessage());
        }
    }

    private static void demonstrarAbstracao() {
        System.out.println("\n--- Exercício 5: Abstração ---");
        try {
            List<FormaPagamento> formasPagamento = List.of(
                new CartaoCredito(),
                new Boleto(),
                new Pix()
            );

            BigDecimal valor = new BigDecimal("250.00");
            String[] dadosValidacao = {"1234567890123456", "1234567890", "usuario@email.com"};

            for (int i = 0; i < formasPagamento.size(); i++) {
                FormaPagamento forma = formasPagamento.get(i);
                try {
                    forma.validarPagamento(dadosValidacao[i]);
                    forma.processarPagamento(valor);
                } catch (Exception e) {
                    System.err.println("Erro na validação: " + e.getMessage());
                }
            }
        } catch (Exception e) {
            System.err.println("Erro: " + e.getMessage());
        }
    }

    private static void demonstrarImutabilidade() {
        System.out.println("\n--- Exercício 6: Imutabilidade ---");
        try {
            Produto mouse = new Produto("Mouse", new BigDecimal("50.00"), 10);
            Produto teclado = new Produto("Teclado", new BigDecimal("100.00"), 5);

            Carrinho carrinho = new Carrinho(new ArrayList<>());
            carrinho = carrinho.adicionar(new ItemCarrinho(mouse, 2));
            carrinho = carrinho.adicionar(new ItemCarrinho(teclado, 1));

            System.out.println("Carrinho contém " + carrinho.getItens().size() + " tipo(s) de item.");

            Dinheiro dinheiro1 = new Dinheiro(new BigDecimal("100.50"), Moeda.BRL);
            Dinheiro dinheiro2 = new Dinheiro(new BigDecimal("100.50"), Moeda.BRL);
            System.out.println("Dinheiros são iguais: " + dinheiro1.equals(dinheiro2));
        } catch (Exception e) {
            System.err.println("Erro: " + e.getMessage());
        }
    }

    private static void demonstrarGenerics() {
        System.out.println("\n--- Exercício 7: Generics ---");
        try {
            InMemoryRepository<Produto, String> repositorio = new InMemoryRepository<>();

            Produto produto1 = new Produto("Smartphone", new BigDecimal("800.00"), 15);
            Produto produto2 = new Produto("Tablet", new BigDecimal("600.00"), 8);

            repositorio.salvar(produto1);
            repositorio.salvar(produto2);

            System.out.println("Total de produtos no repositório: " + repositorio.listarTodos().size());

            Optional<Produto> produtoEncontrado = repositorio.buscarPorId("Smartphone");
            if (produtoEncontrado.isPresent()) {
                System.out.println("Produto encontrado: " + produtoEncontrado.get().getNome());
            }

            repositorio.remover("Tablet");
            System.out.println("Após remoção: " + repositorio.listarTodos().size() + " produto(s)");
        } catch (Exception e) {
            System.err.println("Erro: " + e.getMessage());
        }
    }

    private static void demonstrarStrategy() {
        System.out.println("\n--- Exercício 8: Padrão Strategy ---");
        try {
            Pedido pedido = new Pedido(new BigDecimal("500.00"), "01234-567", new Sedex());
            System.out.println("Valor do pedido: R$ " + pedido.getValor());
            System.out.println("Frete SEDEX: R$ " + pedido.calcularFrete());

            pedido.setEstrategiaFrete(new Pac());
            System.out.println("Frete PAC: R$ " + pedido.calcularFrete());

            pedido.setEstrategiaFrete(new RetiradaNaLoja());
            System.out.println("Retirada na loja: R$ " + pedido.calcularFrete());

            // Usando lambda para estratégia personalizada
            pedido.setEstrategiaFrete(p ->
                p.getValor().compareTo(new BigDecimal("400.00")) > 0
                    ? BigDecimal.ZERO
                    : new BigDecimal("15.00")
            );
            System.out.println("Frete promocional (gratis acima de R$ 400): R$ " + pedido.calcularFrete());
        } catch (Exception e) {
            System.err.println("Erro: " + e.getMessage());
        }
    }
}
