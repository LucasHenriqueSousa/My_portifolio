package com.test.minhaagenda.Dao

import androidx.room.Dao
import androidx.room.Insert
import com.test.minhaagenda.model.Usuarios

@Dao
interface UsuarioDao {
    @Insert

    fun inserir(ListaDeUsuarios: MutableList<Usuarios>)

}