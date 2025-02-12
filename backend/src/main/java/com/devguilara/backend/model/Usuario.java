package com.devguilara.backend.model;


import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name="usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "email", unique= true)
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "dt_created")
    private LocalDate dt_created;

    @PrePersist
    public void prePersist(){
        setDt_created(LocalDate.now());
    }

    public LocalDate getDt_created() {
        return dt_created;
    }

    public void setDt_created(LocalDate dt_created) {
        this.dt_created = dt_created;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public Usuario(String nome, String password, String email,LocalDate dt_created) {
        this.nome = nome;
        this.password = password;
        this.email = email;
        this.dt_created = dt_created;
    }


    public Usuario(int id,String nome , String password, String email, LocalDate dt_created) {
        this.id = id;
        this.nome = nome;
        this.password = password;
        this.email = email;
        this.dt_created = dt_created;
    }

    public Usuario() {
        super();
    }

    @Override
    public String toString() {
        return "Usuario{"+
                "nome='" + nome + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", dt_created=" + dt_created +
                '}';
    }
}
