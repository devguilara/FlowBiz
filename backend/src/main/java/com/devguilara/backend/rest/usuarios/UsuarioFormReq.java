package com.devguilara.backend.rest.usuarios;

import com.devguilara.backend.model.Usuario;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;

public class UsuarioFormReq {
    private int id;
    private String nome;
    private String password;
    private String email;
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dt_created;

    public Usuario toModel(){
        return new Usuario(nome, password, email, dt_created);
    }

    public UsuarioFormReq() {
    }

    public UsuarioFormReq(int id, String nome,String password, String email,LocalDate dt_created) {
        this.id = id;
        this.nome = nome;
        this.password = password;
        this.email = email;
        this.dt_created = dt_created;
    }

    public static UsuarioFormReq fromModel(Usuario usuario) {
        return new UsuarioFormReq(
                usuario.getId(),
                usuario.getNome(),
                usuario.getPassword(),
                usuario.getEmail(),
                usuario.getDt_created()
        );
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LocalDate getDt_created() {
        return dt_created;
    }

    public void setDt_created(LocalDate dt_created) {
        this.dt_created = dt_created;
    }

    @Override
    public String toString() {
        return "UsuarioFormReq{" +
                "dt_created=" + dt_created +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", nome='" + nome + '\'' +
                '}';
    }
}
