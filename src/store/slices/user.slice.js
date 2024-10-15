import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const User = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        setUsuario: (state, action) => {
            return action.payload; // Devuelve el usuario recibido
        }
    }
});

export const LoginThung = (data, navigate) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        const res = await axios.post("http://localhost:3000/api/users/login", data, {
            headers: {
                'Content-Type': 'application/json' // Añadiendo el encabezado
            }
        });

        dispatch(setUsuario(res.data));
        localStorage.setItem('token', res.data.token);

        // Redirigir al inicio
        navigate("/inicio");
 // Recargar la página

    } catch (error) {
        console.error('Error en el login:', error);
    } finally {
        dispatch(setIsLoading(false));
    }
};

export const { setUsuario } = User.actions;

export default User.reducer;
