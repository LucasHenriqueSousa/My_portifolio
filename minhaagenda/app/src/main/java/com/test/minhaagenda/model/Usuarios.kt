package com.test.minhaagenda.model

import androidx.room.Entity
import androidx.room.ColumnInfo
@Entity(tableName = "table-usuarios")

data class Usuarios (
    @ColumnInfo(name = "nome")
    val nome: String,
    @ColumnInfo(name = "email")
    val email: String,
    @ColumnInfo(name = "senha")
    val senha: String
)