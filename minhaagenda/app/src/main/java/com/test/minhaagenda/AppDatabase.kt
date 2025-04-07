package com.test.minhaagenda

import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase
import com.test.minhaagenda.model.Usuarios
import android.content.Context

@Database(entities = [Usuarios::class], version = 1)
abstract class AppDatabase: RoomDatabase() {
    abstract fun usuarioDao(): Usuarios
    companion object {
        private const val DATABASE_NAME: String = "DB_USUARIOS"

        @Volatile
        private var INSTANCE: AppDatabase? = null

        fun gatInstance(context: Context):AppDatabase{
            return INSTANCE?: synchronized(this) {
                val instance = Room.databaseBuilder(
                    context.applicationContext,
                    AppDatabase::class.java,
                    DATABASE_NAME
                ).build()
                INSTANCE = instance
                instance
            }
        }
    }
}