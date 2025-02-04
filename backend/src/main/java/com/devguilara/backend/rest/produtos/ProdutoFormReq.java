package com.devguilara.backend.rest.produtos;

import com.devguilara.backend.model.Produto;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;
import java.math.BigDecimal;

public class ProdutoFormReq {
    private Long   id;
    private String nome;
    private BigDecimal preco;
    private String descricao;
    private String sku;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataCadastro;

    public Produto toModel(){
        return new Produto(nome,descricao,preco,sku);
    }

    public ProdutoFormReq() {
        super();
    }

    public ProdutoFormReq(
            Long id,
            String nome,
            BigDecimal preco,
            String descricao,
            String sku,
            LocalDate dataCadastro)
    {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.sku = sku;
        this.dataCadastro = dataCadastro;
    }

    public static ProdutoFormReq fromModel(Produto prod){
        return new ProdutoFormReq(
                prod.getId(),
                prod.getNome(),
                prod.getPreco(),
                prod.getDescricao(),
                prod.getSku(),
                prod.getDataCadastro()
        );
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public void setPreco(BigDecimal preco) {
        this.preco = preco;
    }

    public String getSku() {
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public LocalDate getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(LocalDate dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

    @Override
    public String toString() {
        return "ProdutoFormReq{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", preco=" + preco +
                ", descricao='" + descricao + '\'' +
                ", sku='" + sku + '\'' +
                '}';
    }
}
