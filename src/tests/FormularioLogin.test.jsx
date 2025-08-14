import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import FormularioLogin from '../components/FormularioLogin';

test('el boton Login esta deshabilitado inicialmente', () => {
    render(<FormularioLogin/>);
    const botonLogin = screen.getByRole('button', { name: /Iniciar Sesión/i});
    expect(botonLogin).toBeDisabled();
})

//Test para ver que el boton este habilitado
test('El boton se habilita cuando codigo, usuario y contrasena tienen contenido', () => {
    render(<FormularioLogin />);
    const inputCodigo = screen.getByPlaceholderText(/codigo/i);
    const inputUsuario = screen.getByPlaceholderText(/usuario/i);
    const inputPassword = screen.getByPlaceholderText(/contraseña/i);
    const botonLogin = screen.getByRole('button', {name: /Iniciar Sesión/i});

    fireEvent.change(inputCodigo, {target: {value: '1359523'}});
    fireEvent.change(inputUsuario, {target: {value: 'miusuario'}});
    fireEvent.change(inputPassword, {target: {value: 'password'}});

    expect(botonLogin).toBeEnabled();
})

test("Al hacer clic en el botón se llama a Login con los datos correctos", () => {
    const mockLogin = jest.fn();
    render(<FormularioLogin Login={mockLogin} />);
    const codigoInput = screen.getByPlaceholderText(/codigo/i);
    const usuarioInput = screen.getByPlaceholderText(/usuario/i);
    const pswdInput = screen.getByPlaceholderText(/contraseña/i);
    const button = screen.getByRole("button", { name: /iniciar sesión/i });

    fireEvent.change(codigoInput, { target: { value: "123" } });
    fireEvent.change(usuarioInput, { target: { value: "Juan" } });
    fireEvent.change(pswdInput, { target: { value: "1234" } });
    fireEvent.click(button);

    expect(mockLogin).toHaveBeenCalledWith({
      codigo: "123",
      usuario: "Juan",
      password: "1234",
    });
});