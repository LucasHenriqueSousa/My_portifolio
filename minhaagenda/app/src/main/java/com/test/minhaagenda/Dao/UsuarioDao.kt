package com.test.minhaagenda.Dao

import androidx.room.Dao
import androidx.room.Insert

@Dao
interface UsuarioDao {
    @Insert

    fun inserir(ListaDeUsuarios: MutableList<Usuario>)

}